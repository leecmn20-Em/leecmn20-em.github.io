import type { ComponentType, ReactNode } from "react";

export type DirectiveAttributes = Record<string, string | null>;

export type DirectiveComponentProps = {
  attributes: DirectiveAttributes;
  children?: ReactNode;
};

export type DirectiveKind = "block" | "inline";

export type DirectiveDefinition = {
  name: string;
  kind: DirectiveKind;
  component: ComponentType<DirectiveComponentProps>;
};
