import * as forgo from "forgo";
import * as marked from "marked";

export type MarkdownProps = {
  src: string;
};

export default function Markdown(initialProps: MarkdownProps) {
  return {
    render(props: MarkdownProps) {
      const renderer = new marked.Renderer();

      marked.setOptions({
        renderer: renderer,
        highlight: function (code, language) {
          const hljs = require("highlight.js");
          const validLanguage = hljs.getLanguage(language) ? language : "jsx";
          return hljs.highlight(code, { language: validLanguage }).value;
        },
      });

      const toc: { anchor: string; level: number; text: string }[] = [];

      renderer.heading = function (text, level, raw) {
        const anchor =
          this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-");
        toc.push({
          anchor: anchor,
          level: level,
          text: text,
        });
        return (
          "<h" + level + ' id="' + anchor + '">' + text + "</h" + level + ">\n"
        );
      };

      const html = marked.parse(props.src);

      const tocPadding: { [key: number]: string } = {
        1: "pl-0",
        2: "pl-0",
        3: "pl-4",
        4: "pl-8",
        5: "pl-12",
        6: "pl-12",
      };

      return (
        <div className="page-content lg:flex">
          <div
            className="lg:pl-4 lg:pr-8 lg:w-3/4"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          {toc.length ? (
            <div className="hidden lg:block toc text-xs mt-12 w-1/4">
              <ul
                className="fixed border-l border-gray-600 pl-4"
                style={{ top: "100px" }}
              >
                {toc.map((item) => (
                  <li className={`${tocPadding[item.level]} my-2`}>
                    <a href={`#${item.anchor}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    },
  };
}
