import React from "react";
import ColorCard from "./ColorCard.jsx";

export default class Color extends React.Component {
  render() {
    return (
      <div>
        <h2 id="color">Color</h2>
        <p>Color guidelines</p>

        <h3>Grays</h3>
        <ul style={{ listStyle: "none" }}>
          <li style={{ backgroundColor: "#f5f5f5" }}>
            <span>#f5f5f5</span>
          </li>
          <li style={{ backgroundColor: "#e6e6e6" }}>
            <span>#e6e6e6</span>
          </li>
          <li style={{ backgroundColor: "#D0D1CB" }}>
            <span>#D0D1CB</span>
          </li>
          <li style={{ backgroundColor: "#ccc" }}>
            <span>#ccc</span>
          </li>
          <li style={{ backgroundColor: "#b4b4b4" }}>
            <span>#b4b4b4</span>
          </li>
          <li style={{ backgroundColor: "#696969", color: "white" }}>
            <span>#696969</span>
          </li>
          <li style={{ backgroundColor: "#323232", color: "white" }}>
            <span>#323232</span>
          </li>
          <li style={{ backgroundColor: "rgba(0,0,0,0.8)", color: "white" }}>
            <span>rgba(0,0,0,0.8) (tooltips)</span>
          </li>
        </ul>

        <h3>Brand colors</h3>
        <ul style={{ listStyle: "none" }}>
          <li style={{ backgroundColor: "#006aa1", color: "white" }}>
            <span>#006aa1 (Transparent version is rgba(0,106,161,0.9)</span>
          </li>
          <li style={{ backgroundColor: "#5ca7d1", color: "white" }}>
            <span>#5ca7d1 Used for text</span>
          </li>
          <li style={{ backgroundColor: "#d85328", color: "white" }}>
            <span>#d85328 (Used mostly in sliders/switches</span>
          </li>
          <li style={{ backgroundColor: "#e24e26", color: "white" }}>
            <span>#e24e26 Used for text</span>
          </li>
        </ul>

        <h3>Button colors</h3>
        <ul style={{ listStyle: "none" }}>
          <li style={{ backgroundColor: "#006aa1", color: "white" }}>
            <span>#006aa1</span>
          </li>
          <li style={{ backgroundColor: "#1c95d4", color: "white" }}>
            <span>#1c95d4</span>
          </li>
          <li style={{ backgroundColor: "#23b7e5", color: "white" }}>
            <span>#23b7e5</span>
          </li>
          <li style={{ backgroundColor: "#19a9d5", color: "white" }}>
            <span>#19a9d5 (border for #23b7e5)</span>
          </li>
          <li style={{ backgroundColor: "#2baab1", color: "white" }}>
            <span>#2baab1</span>
          </li>
          <li style={{ backgroundColor: "#4bb37a", color: "white" }}>
            <span>#4bb37a</span>
          </li>
          <li style={{ backgroundColor: "#ef9925", color: "white" }}>
            <span>#ef9925</span>
          </li>
          <li style={{ backgroundColor: "#edbc6c", color: "white" }}>
            <span>#edbc6c</span>
          </li>
          <li style={{ backgroundColor: "#e36159", color: "white" }}>
            <span>#e36159</span>
          </li>
          <li style={{ backgroundColor: "#df4c43", color: "white" }}>
            <span>#df4c43 (border for #e36159)</span>
          </li>
        </ul>

        <h3>Chat Window Theme Colors</h3>
        <div className="grid-container">
          <ColorCard bcolor={"#e22c2c"} />
          <ColorCard bcolor={"#02a7cb"} />
          <ColorCard bcolor={"#ed6a01"} />
          <ColorCard bcolor={"#4fab17"} />
          <ColorCard bcolor={"#ab177c"} />
          <ColorCard bcolor={"#ec2f7b"} />
          <ColorCard bcolor={"#575757"} />
          <ColorCard bcolor={"#062374"} />
          <ColorCard bcolor={"#905800"} />
          <ColorCard bcolor={"#838220"} />
          <ColorCard bcolor={"#f9d615"} />
          <div className="color-card">
            <div
              className="color-preview"
              style={{
                backgroundColor: "#ffffff",
                color: "black",
                borderColor: "#ccc"
              }}
            >
              <span>#ffffff</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
