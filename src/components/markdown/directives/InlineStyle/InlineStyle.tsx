import type { DirectiveComponentProps } from "../../directiveTypes";
import s2j from "style-to-js";

function InlineStyle({ attributes, children }: DirectiveComponentProps) {
  return (
    <span
      data-md-style={attributes.type ?? undefined}
      style={attributes.style ? s2j(attributes.style) : undefined}
    >
      {children}
    </span>
  );
}

export default InlineStyle;
