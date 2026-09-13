import type { DirectiveComponentProps } from "../../directiveTypes";
import { getCardImage } from "./cardImages";
import styles from "./yugiohcard.module.css";

function YuGiOhCard({ attributes, children }: DirectiveComponentProps) {
  const cardName = attributes.card ?? "";
  const imageUrl = getCardImage(cardName);
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
