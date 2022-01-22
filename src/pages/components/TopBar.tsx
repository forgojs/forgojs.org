import * as forgo from "forgo";
import Logo from "./Logo.js";

export default function TopBar() {
  return {
    render() {
      return (
        <>
          <div>
            <div className="md:hidden topbar p-2 w-full">
              <div className="flex">
                <svg
                  id="hamburger-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                  className="cursor-pointer"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
                <h1 className="m-0 ml-2 w-32 font-bold text-base">
                  <a href="/">ForgoJS</a>
                </h1>
              </div>
            </div>
            <div id="hamburger-menu" className="hidden py-4 bg-gray-800">
              <div
                id="close-hamburger-menu"
                className="flex absolute inline pr-4 cursor-pointer"
                style={{ right: 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                close
              </div>
              <ul className="text-sm font-bold pl-4">
                <li className="m-2">
                  <a href="https://github.com/forgojs/forgo-router">Routing</a>
                </li>
                <li className="m-2">
                  <a href="https://github.com/forgojs/forgo-state">State</a>
                </li>
                <li className="m-2">
                  <a href="https://github.com/forgojs/forgo-ssr">SSR</a>
                </li>
                <li className="m-2">
                  <a href="https://codesandbox.io/s/forgo-todos-javascript-1oi9b">
                    Sandbox
                  </a>
                </li>
                <li className="m-2">
                  <a href="https://twitter.com/forgojs">@forgojs</a>
                </li>
                <li className="m-2">
                  <a href="https://github.com/forgojs/forgo">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="hidden md:flex topbar p-2 w-full justify-between"
            style={{ left: 0, top: 0, background: "#05070c" }}
          >
            <div className="flex items-center" style={{ left: 0, top: 0 }}>
              <Logo />
              <h1 className="m-0 ml-2 w-24 font-bold text-base">
                <a href="/">ForgoJS</a>
              </h1>
              <ul className="text-sm font-bold flex">
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
            <ul className="flex items-center text-sm font-bold">
              <li className="mx-2">
                <a href="https://twitter.com/forgojs">@forgojs</a>
              </li>
              <li className="mx-2">
                <a href="https://github.com/forgojs/forgo">GitHub</a>
              </li>
            </ul>
          </div>
        </>
      );
    },
  };
}
