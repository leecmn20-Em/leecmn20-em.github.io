import Markdown from "react-markdown";
import remarkDirective from "remark-directive";
import { BlockDirective, InlineDirective } from "./MarkdownDirectiveComponents";
import remarkCustomDirectives from "./markdownDirectives";

type MarkdownRendererProps = {
  children: string;
};

function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkDirective, remarkCustomDirectives]}
      components={{
        div: BlockDirective,
        span: InlineDirective,
      }}
    >
      {children}
    </Markdown>
  );
}

export default MarkdownRenderer;
