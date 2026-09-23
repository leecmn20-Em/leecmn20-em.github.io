import Markdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGFM from "remark-gfm";
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
        remarkPlugins={[remarkGFM, remarkDirective, remarkCustomDirectives]}
        components={{
          "md-block-directive": BlockDirective,
          "md-inline-directive": InlineDirective,
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}

export default MarkdownRenderer;
