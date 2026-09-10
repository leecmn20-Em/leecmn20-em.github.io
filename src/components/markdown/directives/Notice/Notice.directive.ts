import type { DirectiveDefinition } from "../../directiveTypes";
import Notice from "./Notice";

export default {
  name: "notice",
  kind: "block",
  component: Notice,
} satisfies DirectiveDefinition;
