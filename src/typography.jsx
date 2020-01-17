import React from "react";

export default class Typography extends React.Component {
  render() {
    return (
      <div>
        <h2 id="typography">Typography</h2>
        <h3>Some things to note:</h3>
        <ul>
          <li>
            Headers and labels should never end with a period. Periods are only
            for blocks of text.
          </li>
          <li>List labels shoud not end with a colon(:)</li>
        </ul>

        <h3>Text Style:</h3>
        <h3>Text colors</h3>
        <ul>
          <li style={{ backgroundColor: "#444", color: "white" }}>
            <span>#444</span>
          </li>
          <li style={{ backgroundColor: "#ccc", listStyle: "none" }}>
            <span>#ccc</span>
          </li>
        </ul>
      </div>
    );
  }
}
