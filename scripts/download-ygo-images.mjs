import { existsSync } from "node:fs";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const KO_LOCAL = new URL("../src/resources/YGO/ko.json", import.meta.url);
const KO_API = "https://db.ygoresources.com/data/idx/card/name/ko";
const YGOPRO_API = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const cardName = process.argv[2]?.trim();

const outputDirectory = new URL("../src/resources/YGO/cards/", import.meta.url);

if (!cardName) {
  console.error('invalid input\nuse npm run resources:ygo -- "NAME"');
  process.exit(1);
}

const url = new URL(YGOPRO_API);

if (/[가-힣ㄱ-ㅎㅏ-ㅣ]/u.test(cardName)) {
  const index = await (async () => {
    try {
      const text = await readFile(KO_LOCAL, "utf-8");
      return JSON.parse(text);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    const response = await fetch(KO_API, {
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      throw new Error(`한국어 카드명 조회 실패: HTTP ${response.status}`);
    }
    return await response.json();
  })();

  const cardNameAlt = cardName.replaceAll("-", "－").replaceAll("=", "＝");

  const ids = index
    ? Object.hasOwn(index, cardName)
      ? index[cardName]
      : Object.hasOwn(index, cardNameAlt)
        ? index[cardNameAlt]
        : undefined
    : undefined;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error(`한국어 카드명을 찾지 못했습니다: ${cardName}`);
  }
  if (ids.length !== 1) {
    throw new Error(`같은 이름의 카드 ID가 여러 개입니다: ${ids.join(", ")}`);
  }
  if (!Number.isSafeInteger(ids[0]) || ids[0] <= 0) {
    throw new Error("올바른 Konami ID가 아닙니다.");
  }

  url.searchParams.set("konami_id", String(ids[0]));
  console.log(`한국어 카드명 조회: ${cardName} → Konami ID ${ids[0]}`);
} else {
  url.searchParams.set("name", cardName);
}

const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });

if (!response.ok) {
  throw new Error(`카드 조회 실패: HTTP ${response.status}`);
}

const result = await response.json();

if (!Array.isArray(result.data)) {
  throw new Error(result.error ?? "카드 데이터가 없습니다.");
}

if (result.data.length !== 1) {
  throw new Error("정확히 한 장의 카드 이름을 입력해주세요.");
}

// Preserve the input name, replacing only characters unsafe in filenames.
let filenameStem = Array.from(cardName)
  .map((character) =>
    character.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(character)
      ? "_"
      : character,
  )
  .join("")
  .replace(/[. ]+$/u, "");

if (
  !filenameStem ||
  /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/iu.test(filenameStem)
) {
  filenameStem = `_${filenameStem}`;
}

await mkdir(outputDirectory, { recursive: true });

for (const card of result.data) {
  for (const [imageIndex, image] of (card.card_images ?? []).entries()) {
    try {
      if (!Number.isSafeInteger(image.id) || image.id < 0) {
        throw new Error("올바른 이미지 ID가 없습니다.");
      }

      const suffix = imageIndex === 0 ? "" : `-${imageIndex + 1}`;
      const filename = `${filenameStem}${suffix}.jpg`;
      const outputFile = new URL(encodeURIComponent(filename), outputDirectory);

      if (existsSync(outputFile)) {
        console.log(`건너뜀: ${filename} (이미 저장됨)`);
        continue;
      }

      const imageUrl = new URL(image.image_url);
      if (
        imageUrl.protocol !== "https:" ||
        imageUrl.hostname !== "images.ygoprodeck.com"
      ) {
        throw new Error("예상한 이미지 서버의 URL이 아닙니다.");
      }

      await delay(1_000);
      const imageResponse = await fetch(imageUrl, {
        signal: AbortSignal.timeout(30_000),
      });

      if (!imageResponse.ok) {
        throw new Error(`이미지 다운로드 실패: HTTP ${imageResponse.status}`);
      }

      const bytes = Buffer.from(await imageResponse.arrayBuffer());
      if (
        bytes.length < 3 ||
        bytes[0] !== 0xff ||
        bytes[1] !== 0xd8 ||
        bytes[2] !== 0xff
      ) {
        throw new Error("응답이 JPEG 이미지가 아닙니다.");
      }

      await writeFile(outputFile, bytes, { flag: "wx" });
      console.log(`저장 완료: ${card.name} → ${fileURLToPath(outputFile)}`);
    } catch (error) {
      console.error(
        `다운로드 실패 (${card.name}, ${image.id}):`,
        error.message,
      );
      process.exitCode = 1;
    }
  }
}
