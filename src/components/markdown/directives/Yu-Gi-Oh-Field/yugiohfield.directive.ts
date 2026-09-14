import type { DirectiveDefinition } from "../../directiveTypes.ts";
import { YuGiOhField } from "./yugiohfield.tsx";

export default {
  name: "ygofield",
  kind: "block",
  component: YuGiOhField,
} satisfies DirectiveDefinition;
