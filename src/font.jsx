import React from "react";

export default class Font extends React.Component {
  render() {
    return (
      <div>
        <h2 id="font">Font</h2>
        <p>Font guidelines...</p>
        <div>
          <h3>Font Unit Sizes</h3>

          <table>
            <tbody>
              <tr>
                <th style={{ width: "12%" }}>Unit</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>em</td>
                <td>
                  Relative to the fontSize of the element (2em means 2 times the
                  size of the current font)
                </td>
              </tr>
              <tr>
                <td>ex</td>
                <td>
                  Relative to the x-height of the current font (rarely used)
                </td>
              </tr>
              <tr>
                <td>ch</td>
                <td>Relative to width of the "0" (zero)</td>
              </tr>
              <tr>
                <td>rem</td>
                <td>
                  Relative to fontSize of the root element. In most modern
                  browsers, 1rem = 16px.
                </td>
              </tr>
              <tr>
                <td>vw</td>
                <td>Relative to 1% of the width of the viewport*</td>
              </tr>
              <tr>
                <td>vh</td>
                <td>Relative to 1% of the height of the viewport*</td>
              </tr>
              <tr>
                <td>vmin</td>
                <td>Relative to 1% of viewport's* smaller dimension</td>
              </tr>
              <tr>
                <td>vmax</td>
                <td>Relative to 1% of viewport's* larger dimension</td>
              </tr>
              <tr>
                <td>%</td>
                <td>Relative to the parent element</td>
              </tr>
            </tbody>
          </table>

          <p>
            The most used units for font are{" "}
            <strong>
              <em>px</em>
            </strong>
            ,{" "}
            <strong>
              <em>rem</em>
            </strong>
            , and{" "}
            <strong>
              <em>em</em>
            </strong>
            . Please take care as to not confuse rem and em as they work
            differently. For this chart, please note that on this page the
            default font size is set at 14px.
          </p>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ border: "1px solid #ccc", padding: "20px 60px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <span>Em Chart</span>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>px</th>
                    <th>em</th>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "7px" }}>7px</td>
                    <td style={{ fontSize: "0.5em" }}>0.5em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "14px" }}>14px</td>
                    <td style={{ fontSize: "1em" }}>1em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "21px" }}>21px</td>
                    <td style={{ fontSize: "1.5em" }}>1.5em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "28px" }}>28px</td>
                    <td style={{ fontSize: "2em" }}>2em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "35px" }}>35px</td>
                    <td style={{ fontSize: "2.5em" }}>2.5em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "42px" }}>42px</td>
                    <td style={{ fontSize: "3em" }}>3em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "51px" }}>51px</td>
                    <td style={{ fontSize: "3.5em" }}>3.5em</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "58px" }}>58px</td>
                    <td style={{ fontSize: "4em" }}>4em</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ border: "1px solid #ccc", padding: "20px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <span>Rem Chart</span>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>px</th>
                    <th>rem</th>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "8px" }}>8px</td>
                    <td style={{ fontSize: "0.5rem" }}>0.5rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "16px" }}>16px</td>
                    <td style={{ fontSize: "1rem" }}>1rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "24px" }}>24px</td>
                    <td style={{ fontSize: "1.5rem" }}>1.5rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "32px" }}>32px</td>
                    <td style={{ fontSize: "2rem" }}>2rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "40px" }}>40px</td>
                    <td style={{ fontSize: "2.5rem" }}>2.5rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "48px" }}>48px</td>
                    <td style={{ fontSize: "3rem" }}>3rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "56px" }}>56px</td>
                    <td style={{ fontSize: "3.5rem" }}>3.5rem</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "64px" }}>64px</td>
                    <td style={{ fontSize: "4rem" }}>4rem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3>Font Families</h3>
            <p>The fonts we use are as follows</p>
          </div>
        </div>
      </div>
    );
  }
}
