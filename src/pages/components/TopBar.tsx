import * as forgo from "forgo";
import Logo from "./Logo";

export default function TopBar() {
  return {
    render() {
      return (
        <div
          className="topbar p-2 bg-gray-600 absolute md:w-full flex justify-between"
          style={{ left: 0, top: 0 }}
        >
          <div className="flex items-center" style={{ left: 0, top: 0 }}>
            <Logo />
            <h1 className="m-0 ml-2 w-32 font-bold text-base">
              <a href="/">ForgoJS</a>
            </h1>
            <ul className="flex text-sm font-bold hidden md:block">
              <li className="mx-2">
                <a href="https://github.com/forgojs/forgo-router">Routing</a>
              </li>
              <li className="mx-2">
                <a href="https://github.com/forgojs/forgo-state">State</a>
              </li>
              <li className="mx-2">
                <a href="https://github.com/forgojs/forgo-ssr">SSR</a>
              </li>
              <li className="mx-2">
                <a href="https://codesandbox.io/s/forgo-todos-javascript-1oi9b">
                  Sandbox
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex items-center text-sm font-bold hidden md:block">
            <li className="mx-2">
              <a href="https://twitter.com/forgojs">@forgojs</a>
            </li>
            <li className="mx-2">
              <a href="https://github.com/forgojs/forgo">GitHub</a>
            </li>
          </ul>
        </div>
      );
    },
  };
}
