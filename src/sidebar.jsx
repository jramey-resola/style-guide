import React from "react";
import SynalioLogo from "./SynalioLogo.jsx";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <SynalioLogo />
        </div>
        <div>
          <ul>
            <li>
              <a>Basic</a>
              <ul>
                <li>
                  <a onClick={() => this.props.changeView("font")}>Font</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("color")}>Color</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("typography")}>
                    Typography
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("page_layout")}>
                    Page Layout
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("formatting")}>
                    Formatting
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("layout_spacing")}>
                    Layout & Spacing
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>UI Components</a>
              <ul>
                <li>
                  <a onClick={() => this.props.changeView("buttons")}>
                    Buttons
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("inputs")}>Inputs</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("modals")}>Modals</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("pagination")}>
                    Pagintion
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("switch")}>Switch</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("toolbar")}>
                    Toolbars
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("tooltip")}>
                    Tooltip
                  </a>
                </li>
                <li>
                  <span>--------</span>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("alerts")}>Alerts</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("badges")}>Badges</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("text_fields")}>
                    Text Fields
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("snackbars")}>
                    Snackbars
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("icons")}>Icons</a>
                </li>
                <li>
                  <a onClick={() => this.props.changeView("popover")}>
                    Popover
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
