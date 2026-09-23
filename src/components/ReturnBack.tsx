import { resolveURL } from "@/routes";

type ReturnBackProps = {
  href?: string;
  text?: string;
};

function ReturnBack({ href, text }: ReturnBackProps) {
  href ??= "../";
  text ??= "돌아가기";
  return (
    <div className="returnback">
      <a href={resolveURL(href)} rel="noopener noreferrer">
        ← {text}
      </a>
    </div>
  );
}

export default ReturnBack;
