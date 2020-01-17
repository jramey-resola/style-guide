import React from "react";

export default class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <h2>Toolbar</h2>
        <img
          src={require("./images/toolbar_1.png")}
          alt="toolbar_1"
          style={{ height: "200px" }}
        />
        <img
          src={require("./images/toolbar_2.png")}
          alt="toolbar_2"
          style={{ height: "200px" }}
        />
      </div>
    );
  }
}
