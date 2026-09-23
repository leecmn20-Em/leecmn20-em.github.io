import type { HTMLAttributes } from "react";

type MarkdownDirectiveElementProps = HTMLAttributes<HTMLElement>;

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "md-block-directive": MarkdownDirectiveElementProps;
      "md-inline-directive": MarkdownDirectiveElementProps;
    }
  }
}
