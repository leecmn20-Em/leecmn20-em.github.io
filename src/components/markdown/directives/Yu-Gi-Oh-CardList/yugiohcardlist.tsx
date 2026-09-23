import type { DirectiveComponentProps } from "../../directiveTypes";
import { extractDirectiveLines } from "../../extractDirectiveLines";
import { getCardImage } from "../Yu-Gi-Oh-Card/cardImages";
import styles from "./yugiohcardlist.module.css";

function YuGiOhCardList({ attributes, children }: DirectiveComponentProps) {
  const cardNames = extractDirectiveLines(children);

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
                <div className={styles.missing}>
                  이미지를 찾을 수 없습니다: {cardName}
                </div>
              )}
              {attributes.caption === "true" && (
                <figcaption>{cardName}</figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default YuGiOhCardList;
