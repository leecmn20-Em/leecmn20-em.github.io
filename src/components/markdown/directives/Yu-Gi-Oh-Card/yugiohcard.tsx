import type { DirectiveComponentProps } from "../../directiveTypes";
import styles from "./yugiohcard.module.css";

function YuGiOhCard({ attributes, children }: DirectiveComponentProps) {
  const card = "@/resources/YuGiOh/" + attributes.card;
  return <img src={card} />;
}

export default YuGiOhCard;
