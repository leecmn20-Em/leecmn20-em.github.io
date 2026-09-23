import type { DirectiveDefinition } from "../../directiveTypes.ts";
import { YuGiOhHalfField } from "./yugiohfield.tsx";

export default {
  name: "ygohalffield",
  kind: "block",
  component: YuGiOhHalfField,
} satisfies DirectiveDefinition;
