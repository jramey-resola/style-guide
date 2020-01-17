import React from "react";

export default class Inputs extends React.Component {
  render() {
    return (
      <div>
        <h2>Inputs</h2>
        <h3>Text</h3>
        <img
          src={require("./images/input_text.png")}
          alt="text input"
          style={{ width: "600px" }}
        />
        <p>
          In the case of text inputs, the css classes handle all of the styling
          for you, just add the form-control class type.
        </p>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          &lt;input class="form-control" type="text" maxlength="200"
          name="description" value="田中のテストアプリです" &gt;
        </div>

        <br />
        <h3>Date</h3>
        <img
          src={require("./images/input_date.png")}
          alt="date input"
          style={{ width: "600px" }}
        />
        <p>Not sure how these work....</p>

        <div style={{ height: "100px" }} />
      </div>
    );
  }
}
