import * as forgo from "forgo";
import * as marked from "marked";

export type MarkdownProps = {
  src: string;
};

marked.setOptions({
  highlight: function (code, language) {
    const hljs = require("highlight.js");
    const validLanguage = hljs.getLanguage(language) ? language : "jsx";
    return hljs.highlight(code, { language: validLanguage }).value;
  },
});

export default function Markdown(initialProps: MarkdownProps) {
  return {
    render(props: MarkdownProps) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(props.src) }}
        ></div>
      );
    },
  };
}
