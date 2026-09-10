import type { Root } from "mdast";
import type {
  ContainerDirective,
  LeafDirective,
  TextDirective,
} from "mdast-util-directive";
import { visit } from "unist-util-visit";

type DirectiveNode = ContainerDirective | LeafDirective | TextDirective;

function markAsDirective(node: DirectiveNode) {
  node.data ??= {};
  node.data.hName = node.type === "textDirective" ? "span" : "div";
  node.data.hProperties = {
    dataDirective: node.name,
    dataDirectiveAttributes: JSON.stringify(node.attributes ?? {}),
  };
}

export default function remarkCustomDirectives() {
  return (tree: Root) => {
    visit(tree, "containerDirective", markAsDirective);
    visit(tree, "leafDirective", markAsDirective);
    visit(tree, "textDirective", markAsDirective);
  };
}
