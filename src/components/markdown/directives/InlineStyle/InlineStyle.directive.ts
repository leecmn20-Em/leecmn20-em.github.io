import type { DirectiveDefinition } from "../../directiveTypes";
import InlineStyle from "./InlineStyle";

export default {
  name: "style",
  kind: "inline",
  component: InlineStyle,
} satisfies DirectiveDefinition;
