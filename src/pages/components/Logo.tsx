import * as forgo from "forgo";

export default function Logo() {
  return {
    render() {
      return (
        <div className="flex">
          <img
            className="navbar__logo md:inline"
            src="/img/forgo.png"
            alt="ForgoJS"
            style={{ width: "32px", height: "32px" }}
          />
        </div>
      );
    },
  };
}
