import * as forgo from "forgo";
import Logo from "./Logo";

export default function Footer() {
  return {
    render() {
      return (
        <div className="footer p-2 mt-24 border-t border-gray-500 text-center">
          <p>
            MIT Licensed. Copyright:{" "}
            <a href="https://twitter.com/jeswin">@jeswin</a> and contributors.
          </p>
          <p className="text-sm font-bold">
            Built with <a href="https://github.com/forgojs/gabble">Gabble.</a>
          </p>
        </div>
      );
    },
  };
}
