import React from "react";

export default class Pagination extends React.Component {
  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <img
          src={require("./images/pagination.png")}
          alt="pagination"
          style={{ height: "100px" }}
        />
      </div>
    );
  }
}
