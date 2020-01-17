import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home.jsx";
import Buttons from "./buttons.jsx";
import Color from "./color.jsx";
import Inputs from "./inputs.jsx";
import Font from "./font.jsx";
import Modals from "./modals.jsx";
import PageLayout from "./pagelayout.jsx";
import Pagination from "./pagination.jsx";
import Sidebar from "./sidebar.jsx";
import Switch from "./switch.jsx";
import Toolbar from "./toolbar.jsx";
import Tooltip from "./tooltip.jsx";
import Typography from "./typography.jsx";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home"
    };
  }

  changeView(selectedView) {
    this.setState({ view: selectedView });
  }

  render() {
    return (
      <div className="app">
        <Sidebar changeView={this.changeView.bind(this)} />
        <div className="main">
          {this.state.view === "home" ? <Home /> : ""}
          {this.state.view === "buttons" ? <Buttons /> : ""}
          {this.state.view === "color" ? <Color /> : ""}
          {this.state.view === "inputs" ? <Inputs /> : ""}
          {this.state.view === "font" ? <Font /> : ""}
          {this.state.view === "modals" ? <Modals /> : ""}
          {this.state.view === "page_layout" ? <PageLayout /> : ""}
          {this.state.view === "pagination" ? <Pagination /> : ""}
          {this.state.view === "switch" ? <Switch /> : ""}
          {this.state.view === "toolbar" ? <Toolbar /> : ""}
          {this.state.view === "tooltip" ? <Tooltip /> : ""}
          {this.state.view === "typography" ? <Typography /> : ""}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
