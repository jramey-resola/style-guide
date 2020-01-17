import React from "react";

export default class PageLayout extends React.Component {
  render() {
    return (
      <div>
        <h2
          id="page_layout"
          style={{ borderBottom: "1px solid #ccc", width: "fit-content" }}
        >
          Page Layout
        </h2>

        <h4>Header</h4>
        <img
          src={require("./images/page_header_example.png")}
          alt="page header example"
          style={{ height: "300px" }}
        />
        <p>
          Most pages have a title. Apply it via django's title block tag and it
          will automatically have its necessary styles applied.
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
            {"{"}% block title %{"}\n"}
            {"{"}
            {"{"} message.YOUR_TITLE {"}\n"}
            {"}\n"}
            {"{"}% endblock %{"}\n"}
          </code>
        </div>

        <p>
          Page titles should have a padding of 10px and a margin-top of 70px.
          Element blocks should have a padding of 20px on the left and right
          sides.
        </p>

        <h4>Content blocks</h4>
        <p>
          We present our elements in a blocked list, each block appears like so.
        </p>
        <img
          src={require("./images/element_item_example.png")}
          alt="Element item example"
          style={{ height: "400px" }}
        />
        <p>
          In our box head we have a block number, a title, and a description.
          These three are keys in guiding the user as they follow the form so
          that they know what the content in these blocks are and what they do.
        </p>
        <span>Element number:</span>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;div class="number-box"&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;span&gt;1&lt;/span&gt;</span>
          <br />
          <span>&lt;/div&gt;</span>
        </div>
        <br />
        <span>Element name:</span>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          &lt;h3&gt;基本情報入力&lt;/h3&gt;
        </div>
        <br />
        <span>Element description:</span>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          &lt;div
          class="lead-text"&gt;このキャンペーンの基本情報を入力してください。&lt;/div&gt;
        </div>
        <br />
        <span>Full block head example:</span>
        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;div class="head-box"&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div class="number-box"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>&lt;span&gt;1&lt;/span&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;h3&gt;基本情報入力&lt;/h3&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div
            class="lead-text"&gt;このキャンペーンの基本情報を入力してください。&lt;/div&gt;
          </span>
          <br />
          <span>&lt;/div&gt;</span>
        </div>

        <p>Each form item inside of this box should also have a label.</p>

        <h3>Box Breakdown</h3>
        <img
          src={require("./images/inner_box_breakdown.png")}
          alt="inner box breakdown"
          style={{ height: "200px" }}
        />
        <p>
          Each box item goes inside of a an inner box, and the inner box has two
          pieces:
        </p>
        <ol>
          <li>Label (block-head)</li>
          <li>Content (block-body)</li>
        </ol>

        <p>
          If your class names are correct, the spacing and styles will apply for
          you automatically based on our style sheet and you won't need to make
          any changes.
        </p>

        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;div class="block-inner-box"&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div class="block-head flex-box flex-align-center"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;div class="head-text"&gt;Title goes here ：&lt;/div&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div class="block-body"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;p&gt;Content goes here.&lt;/p&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <span>&lt;/div&gt;</span>
        </div>

        <p>
          These inner-box's go inside of the block-box class. Here is a
          class-list breakdown for the whole element to help you visualize it.
        </p>

        <img
          src={require("./images/box_breakdown.png")}
          alt="box breakdown"
          style={{ height: "400px" }}
        />

        <h4>Full box example:</h4>

        <div
          style={{
            backgroundColor: "#ccc",
            borderRadius: "8px",
            width: "fit-content",
            padding: "10px"
          }}
        >
          <span>&lt;div class="inner-box box-type1"&gt;</span>
          <br />
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div class="head-box"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;div class="number-box"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "60px" }}>&lt;span&gt;5&lt;/span&gt;</span>
          <br />
          <span style={{ marginLeft: "40px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;h3&gt;その他の設定&lt;/h3&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;div
            class="lead-text"&gt;その他必要事項を設定してください。&lt;/div&gt;
          </span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <br />
          <span style={{ marginLeft: "20px" }}>
            &lt;div class="block-box"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "40px" }}>
            &lt;div class="block-inner-box"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "60px" }}>
            &lt;div class="block-head flex-box flex-align-center"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "80px" }}>
            &lt;div class="head-text"&gt;Label goes here ：&lt;/div&gt;
          </span>
          <br />
          <span style={{ marginLeft: "60px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "60px" }}>
            &lt;div class="block-body"&gt;
          </span>
          <br />
          <span style={{ marginLeft: "80px" }}>
            &lt;p&gt;Content goes here.&lt;/p&gt;
          </span>
          <br />
          <span style={{ marginLeft: "60px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "40px" }}>&lt;/div&gt;</span>
          <br />
          <span style={{ marginLeft: "20px" }}>&lt;/div&gt;</span>
          <br />
          <br />
          <span>&lt;/div&gt;</span>
        </div>
      </div>
    );
  }
}
