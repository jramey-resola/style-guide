import React from "react";

export default class Switch extends React.Component {
  render() {
    return (
      <div>
        <h2 id="switch">Switch</h2>
        <img
          src={require("./images/switch.png")}
          alt="switch"
          style={{ height: "200px" }}
        />
        <p>To use the switch you must first import it via this tag:</p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <code>
            {"{"}% include 'common/react/slider.jsx' %{"}\n"}
          </code>
        </div>

        <p>It requires the following props:</p>
        <ul>
          <li>activeText</li>
          <li>inactiveText</li>
          <li>checked (true/false)</li>
          <li>action (onClick)</li>
        </ul>
        <p>Full use example:</p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>
            &lt;Slider activeText={"{"}"ON"{"}\n"} inactiveText={"{"}"OFF"
            {"}\n"} checked={"{"}foo === bar ? true : false{"}\n"} action={"{"}
            () => console.log("I love Resola"){"}\n"} /&gt;
          </span>
        </div>
      </div>
    );
  }
}
