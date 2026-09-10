import type {
  DirectiveComponentProps,
  DirectiveDefinition,
} from "./directiveTypes";
import type { ComponentType } from "react";

type DirectiveModule = {
  default: DirectiveDefinition;
};

type DirectiveRegistry = Record<string, ComponentType<DirectiveComponentProps>>;

const modules = import.meta.glob<DirectiveModule>(
  "./directives/**/*.directive.ts",
  {
    eager: true,
  },
);

export const blockDirectiveComponents: DirectiveRegistry = {};
export const inlineDirectiveComponents: DirectiveRegistry = {};

for (const [path, module] of Object.entries(modules)) {
  const definition = module.default;

  const registry =
    definition.kind === "block"
      ? blockDirectiveComponents
      : inlineDirectiveComponents;

  if (Object.hasOwn(registry, definition.name)) {
    throw new Error(`Duplicate directive name "${definition.name}" in ${path}`);
  }

  registry[definition.name] = definition.component;
}
