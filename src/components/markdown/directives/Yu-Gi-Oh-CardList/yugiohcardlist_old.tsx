import type { DirectiveComponentProps } from "../../directiveTypes";
import { getCardImage } from "../Yu-Gi-Oh-Card/cardImages";
import styles from "./yugiohcardlist.module.css";

function YuGiOhCardList({ attributes, children }: DirectiveComponentProps) {
  const cardNames = (attributes.card ?? "")
    .split("|")
    .map((name) => name.trim())
    .filter(Boolean);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardList}>
        {cardNames.map((cardName, index) => {
          const imageUrl = getCardImage(cardName);

          return (
            <figure className={styles.card} key={`${cardName}-${index}`}>
              {imageUrl ? (
                <img src={imageUrl} alt={cardName} loading="lazy" />
              ) : (
                <div className={styles.missing}>이미지를 찾을 수 없습니다</div>
              )}
            </figure>
          );
        })}
      </div>

      {children && <div className={styles.description}>{children}</div>}
    </div>
  );
}

export default YuGiOhCardList;
