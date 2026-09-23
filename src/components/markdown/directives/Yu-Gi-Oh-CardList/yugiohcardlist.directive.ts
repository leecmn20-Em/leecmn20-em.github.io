import type { DirectiveDefinition } from "../../directiveTypes.ts";
import YuGiOhCardList from "./yugiohcardlist.tsx";

export default {
  name: "ygocardlist",
  kind: "block",
  component: YuGiOhCardList,
} satisfies DirectiveDefinition;
