import * as forgo from "forgo";
import Logo from "./Logo";

export default function Footer() {
  return {
    render() {
      return (
        <div>
          <h2>Community</h2>
          <ul>
            <li>
              <a href="https://twitter.com/forgojs">@forgojs</a>
            </li>
            <li>
              <a href="https://twitter.com/jeswin">@jeswin</a>
            </li>
          </ul>
          <div>
            Copyright © 2021 @jeswin and contributors. Built with{" "}
            <a href="https://github.com/forgojs/gabble">Gabble</a>.
          </div>
        </div>
      );
    },
  };
}
