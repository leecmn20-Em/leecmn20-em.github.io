import type { DirectiveDefinition } from "../../directiveTypes.ts";
import YuGiOhCard from "./yugiohcard.tsx";

export default {
  name: "yugiohcard",
  kind: "block",
  component: YuGiOhCard,
} satisfies DirectiveDefinition;
