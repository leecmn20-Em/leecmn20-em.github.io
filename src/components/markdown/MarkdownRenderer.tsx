import Markdown from "react-markdown";
import remarkDirective from "remark-directive";
import { BlockDirective, InlineDirective } from "./MarkdownDirectiveComponents";
import remarkCustomDirectives from "./markdownDirectives";
import styles from "./markdown.module.css";

type MarkdownRendererProps = {
  children: string;
};

function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <div className={styles.markdown}>
      <Markdown
        remarkPlugins={[remarkDirective, remarkCustomDirectives]}
        components={{
          div: BlockDirective,
          span: InlineDirective,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}

export default MarkdownRenderer;
