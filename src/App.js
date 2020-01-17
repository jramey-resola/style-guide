import React from "react";
import "./styles.css";
import Sidebar from "./sidebar.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}
