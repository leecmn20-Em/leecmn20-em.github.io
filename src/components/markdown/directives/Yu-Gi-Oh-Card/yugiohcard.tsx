import type { DirectiveComponentProps } from "../../directiveTypes";
import styles from "./yugiohcard.module.css";

const imageModules = import.meta.glob<string>(
  "@/resources/YuGiOh/*.{jpg,jpeg,png,webp,gif,avif}",
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

function YuGiOhCard({ attributes, children }: DirectiveComponentProps) {
  const cardName = attributes.card ?? "";
  const imageUrl = cardImages.get(cardName);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardinfo}>
        {imageUrl ? (
          <img src={imageUrl} alt={cardName} loading="lazy" />
        ) : (
          <span>이미지를 찾을 수 없습니다: {cardName}</span>
        )}
        <div className={styles.carddesc}>{children}</div>
      </div>
    </div>
  );
}

export default YuGiOhCard;
