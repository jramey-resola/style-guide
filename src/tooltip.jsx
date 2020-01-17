import React from "react";

export default class Tooltip extends React.Component {
  render() {
    return (
      <div>
        <h2 id="tooltip">Tooltip</h2>
        <img
          src={require("./images/tooltip_1.png")}
          alt="tooltip 1"
          style={{ height: "200px" }}
        />
        <p>
          The tooltip consists of two parts, the toggle button and the tooltip
          itself. We can create our toggle button like so:
        </p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>
            &lt;div style="display: flex; flex-direction: column;"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;span style="background-color: rgb(0, 0, 0); width: 4px; height:
            4px; border-radius: 50%; position: relative; margin: 2px
            auto;"&gt;&lt;/span&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;span style="background-color: rgb(0, 0, 0); width: 4px; height:
            4px; border-radius: 50%; position: relative; margin: 2px
            auto;"&gt;&lt;/span&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;span style="background-color: rgb(0, 0, 0); width: 4px; height:
            4px; border-radius: 50%; position: relative; margin: 2px
            auto;"&gt;&lt;/span&gt;
          </span>
          <br />
          <span>&lt;/div&gt;</span>
        </div>

        <p>And it generates as:</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              position: "relative",
              margin: "2px auto"
            }}
          />
          <span
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              position: "relative",
              margin: "2px auto"
            }}
          />
          <span
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              position: "relative",
              margin: "2px auto"
            }}
          />
        </div>

        <p>The code for the tooltip is like this:</p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;ul className="change-list"&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;li&gt;&lt;a className="tooltips"&gt;&lt;span name="delete"
            type="submit" onClick={"{"}() =&gt; this.function(){"}\n"}&gt;BUTTON
            TEXT HERE&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
          </span>
          <br />
          <span>&lt;/ul&gt;</span>
        </div>

        <p>
          Because the tooltip functions as a list we can easily add more options
          as needed.
        </p>
        <img
          src={require("./images/tooltip_2.png")}
          alt="tooltip 2"
          style={{ height: "200px" }}
        />
        <p>
          In order for the tooltip and toggle button to play nicely together
          they must go together in the same div like this:
        </p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;div&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div style="display: flex; flex-direction: column;"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;span style="backgroundColor: #000; width: 4px; height: 4px;
            borderRadius: 50%; position: relative; margin: 2px auto;" /&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;span style="backgroundColor: #000; width: 4px; height: 4px;
            borderRadius: 50%; position: relative; margin: 2px auto;" /&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;span style="backgroundColor: #000; width: 4px; height: 4px;
            borderRadius: 50%; position: relative; margin: 2px auto;" /&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;ul className="change-list"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;li&gt;&lt;a className="tooltips"&gt;&lt;span name="delete"
            type="submit" onClick={"{"}() =&gt; this.function(){"}\n"}&gt;BUTTON
            TEXT HERE&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/ul&gt;</span>
          <br />
          <span>&lt;/div&gt;</span>
        </div>

        <h1 style={{ color: "red" }}>
          NOTE TO SELF: The code for the tooltips is pretty static, go ahead and
          turn it into a component that we can import.{" "}
        </h1>
      </div>
    );
  }
}
