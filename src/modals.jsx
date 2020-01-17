import React from "react";

export default class Modals extends React.Component {
  render() {
    return (
      <div>
        <h2>Delete Modal</h2>
        <img
          src={require("./images/modal.png")}
          alt="modal"
          style={{ height: "200px" }}
        />
        <p>
          This modal type is used to confirm if the user wants to delete
          something, they are sometimes used for other purposes also.
        </p>

        <h2>Info Modals</h2>
        <p>These modals are used in the dashboards. They look like this:</p>
        <img
          src={require("./images/tooltip_i_1.png")}
          alt="i-tooltip 1"
          style={{ height: "200px" }}
        />
        <p>
          Upon clicking, it will open a window which covers the whole page and
          provides information like this:
        </p>
        <img
          src={require("./images/tooltip_i_2.png")}
          alt="i-tooltip 2"
          style={{ height: "400px" }}
        />
      </div>
    );
  }
}
