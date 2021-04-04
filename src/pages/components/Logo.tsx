import * as forgo from "forgo";

export default function Logo() {
  return {
    render() {
      return (
        <img
          className="navbar__logo"
          src="/img/forgo.png"
          alt="ForgoJS"
          style={{ width: "32px", height: "32px" }}
        ></img>
      );
    },
  };
}
