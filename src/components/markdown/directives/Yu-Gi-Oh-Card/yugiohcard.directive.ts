import type { DirectiveDefinition } from "../../directiveTypes.ts";
import YuGiOhCard from "./yugiohcard.tsx";

export default {
  name: "ygocard",
  kind: "block",
  component: YuGiOhCard,
} satisfies DirectiveDefinition;
