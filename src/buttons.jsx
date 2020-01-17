import React from "react";
import ColorCard from "./ColorCard.jsx";

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h2 id="buttons">Buttons</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a href="#">
              <i className="fas fa-plus" /> <span>新規作成</span>
            </a>
          </div>
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a href="#">
              <i className="fas fa-search" />
            </a>
          </div>
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a
              href="#"
              style={{
                backgroundColor: "#e36159",
                border: "1px solid #df4c43"
              }}
            >
              <span>削除</span>
            </a>
          </div>
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a
              href="#"
              style={{
                backgroundColor: "#23b7e5",
                border: "1px solid #19a9d5"
              }}
            >
              <span>シナリオエディタ</span>
            </a>
          </div>
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a href="#" style={{ backgroundColor: "#4bb37a" }}>
              <span>確認</span>
            </a>
          </div>
          <div
            className="click-btn form-group pull-right"
            data-btn="add"
            style={{ margin: "0px 0.5em" }}
          >
            <a
              href="#"
              style={{ backgroundColor: "#ef9925", minWidth: "80px" }}
            >
              <span>完了</span>
            </a>
          </div>
        </div>

        <p>
          These are our most common button types. We have created a reusable
          component for these and using it is quite easy. Firstly in your file
          you must import it:
        </p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <code>
            {"{"}% include 'common/react/button.jsx' %{"}\n"}
          </code>
        </div>

        <p>And it can take the following prop types:</p>
        <ul>
          <li>url (href)</li>
          <li>content (button text)</li>
          <li>data (sets button color)</li>
          <li>action (onClick)</li>
        </ul>

        <h3>Data types:</h3>
        <div className="grid-container">
          <ColorCard bcolor={"#006aa1"} handle={"[default]"} />
          <ColorCard bcolor={"#ef9925"} handle={"export"} />
          <ColorCard bcolor={"#e24e26"} handle={"del"} />
          <ColorCard bcolor={"#4bb37a"} handle={"confirmation"} />
          <ColorCard bcolor={"#4bb37a"} handle={"preview"} />
          <ColorCard bcolor={"#23b7e5"} handle={"save"} />
          <ColorCard bcolor={"#23b7e5"} handle={"move"} />
          <ColorCard bcolor={"#006aa1"} handle={"new"} />
          <ColorCard bcolor={"#6a6a6a"} handle={"close"} />

          <div className="color-card">
            <div
              className="color-preview"
              style={{
                backgroundColor: "transparent",
                color: "black",
                borderColor: "#ccc"
              }}
            >
              <span>transparent</span>
            </div>
            <div className="color-label">
              <span>conditions-add</span>
            </div>
          </div>

          <ColorCard bcolor={"#828282"} handle={"cancel"} />
          <ColorCard bcolor={"#ef9925"} handle={"decision"} />
          <ColorCard bcolor={"#006aa1"} handle={"chat-visual-add"} />
          <ColorCard bcolor={"#006aa1"} handle={"info"} />
          <ColorCard bcolor={"#006aa1"} handle={"choice"} />
        </div>

        <br />

        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>
            &lt;Button content={"{"}"CLICK ME"{"}\n"} url={"{"}
            "https://google.com"{"}\n"} data={"{"}"export"{"}\n"} action={"{"}()
            =&gt; this.handleClick{"}\n"} /&gt;
          </span>
        </div>
        <br />
      </div>
    );
  }
}
