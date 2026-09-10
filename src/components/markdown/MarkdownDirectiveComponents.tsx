import type { ComponentPropsWithoutRef } from "react";
import type { ExtraProps } from "react-markdown";
import type { DirectiveAttributes } from "./directiveTypes";
import {
  blockDirectiveComponents,
  inlineDirectiveComponents,
} from "./directiveRegistry";

type BlockRendererProps = ComponentPropsWithoutRef<"div"> & ExtraProps;
type InlineRendererProps = ComponentPropsWithoutRef<"span"> & ExtraProps;

function readDirective(node: ExtraProps["node"]) {
  const name = node?.properties?.dataDirective;
  const serializedAttributes = node?.properties?.dataDirectiveAttributes;

  if (typeof name !== "string") {
    return null;
  }

  let attributes: DirectiveAttributes = {};

  if (typeof serializedAttributes === "string") {
    try {
      attributes = JSON.parse(serializedAttributes) as DirectiveAttributes;
    } catch {
      // Invalid attributes fall back to an empty object.
    }
  }

  return { attributes, name };
}

export function BlockDirective({ children, node }: BlockRendererProps) {
  const directive = readDirective(node);
  const Component = directive
    ? blockDirectiveComponents[directive.name]
    : undefined;

  if (!directive || !Component) {
    return <div>{children}</div>;
  }

  return <Component attributes={directive.attributes}>{children}</Component>;
}

export function InlineDirective({ children, node }: InlineRendererProps) {
  const directive = readDirective(node);
  const Component = directive
    ? inlineDirectiveComponents[directive.name]
    : undefined;

  if (!directive || !Component) {
    return <span>{children}</span>;
  }

  return <Component attributes={directive.attributes}>{children}</Component>;
}
