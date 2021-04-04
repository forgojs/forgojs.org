import * as forgo from "forgo";
import Footer from "./components/Footer";
import Markdown from "./components/Markdown";
import TopBar from "./components/TopBar";
import * as fs from "fs";
import * as path from "path";
import renderToString from "forgo-ssr";
import layout from "./layouts/basic";

const content = fs.readFileSync(path.join(__dirname, "index/content.md"));

export function Index() {
  return {
    render() {
      return (
        <div className="p-4 max-w-full md:max-w-screen-md m-auto mb-8">
          <TopBar />
          <div className="mt-12">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingBottom: "2em",
              }}
            >
              <p style={{ paddingTop: "0.3em", paddingRight: "2em" }}>
                <img
                  alt="Forgo Logo"
                  src="/img/forgo.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    marginTop: "32px",
                    float: "left",
                    borderRadius: "1em",
                  }}
                />
              </p>
              <div style={{ maxWidth: "360px" }}>
                <h2 style={{ fontSize: "1.6em" }}>
                  Tiny UI runtime <br />
                  for modern web apps.
                </h2>
                <p style={{ fontSize: "1.2em" }}>
                  Forgo is a 4KB library that makes it super easy to create
                  modern web apps using JSX (like React).
                </p>
                <p style={{ fontSize: "1.2em" }}>
                  Unlike React, there are very few framework specific patterns
                  and lingo to learn. Everything you already know about DOM APIs
                  and JavaScript will easily carry over.
                </p>
              </div>
            </div>
            <Markdown src={content.toString()} />
          </div>
          <Footer />
        </div>
      );
    },
  };
}

export default function html() {
  return { html: layout(renderToString(<Index />)) };
}
