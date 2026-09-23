const imageModules = import.meta.glob<string>(
  "@/resources/YGO/**/*.{jpg,jpeg,png,webp,gif,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const cardImages = new Map<string, string>();

for (const [path, url] of Object.entries(imageModules)) {
  const filename = path.slice(path.lastIndexOf("/") + 1);
  const name = filename.replace(/\.[^.]+$/, "");

  if (cardImages.has(name)) {
    throw new Error(`카드 이미지 이름이 중복됩니다: ${name}`);
  }

  cardImages.set(name, url);
}

export function getCardImage(name: string) {
  return cardImages.get(name);
}
