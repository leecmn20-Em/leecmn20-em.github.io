import type { DirectiveComponentProps } from "../../directiveTypes";
import styles from "./Notice.module.css";

function Notice({ attributes, children }: DirectiveComponentProps) {
  const allowedVariants = ["info", "warning", "success"];
  const requestedVariant = attributes.variant;

  const variant =
    requestedVariant && allowedVariants.includes(requestedVariant)
      ? requestedVariant
      : "info";

  return (
    <aside className={styles.notice} data-variant={variant}>
      {children}
    </aside>
  );
}

export default Notice;
