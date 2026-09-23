import { Children, isValidElement, type ReactNode } from "react";

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractText(node.props.children);
  }

  return Children.toArray(node).map(extractText).join("");
}

export function extractDirectiveLines(children: ReactNode): string[] {
  return Children.toArray(children)
    .flatMap((child) => extractText(child).split(/\r?\n/))
    .map((line) => line.trim())
    .filter(Boolean);
}
