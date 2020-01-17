import React from "react";

export default class ColorCard extends React.Component {
  render() {
    return (
      <div>
        <div className="color-card">
          <div
            className="color-preview"
            style={{ backgroundColor: this.props.bcolor }}
          >
            <span>{this.props.bcolor}</span>
          </div>
          {this.props.handle ? (
            <div className="color-label">
              <span>{this.props.handle}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
