import React from "react";
import SynalioLogoLarge from "./SynalioLogoLarge.jsx";

export default class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <SynalioLogoLarge />
        <h1>Style Guide</h1>
        <p>
          Bacon ipsum dolor amet beef bresaola sausage turducken, drumstick
          cupim meatloaf shank. Ribeye meatloaf sirloin burgdoggen beef ribs
          turkey pork belly, sausage buffalo chuck brisket salami flank pork
          jerky. Doner chislic short loin tri-tip kielbasa pork belly venison
          drumstick. Ribeye flank short ribs boudin leberkas jowl salami
          pastrami shankle biltong porchetta doner swine. Landjaeger frankfurter
          capicola picanha shankle. Chislic meatball hamburger salami fatback
          turducken. Tongue pork chop beef ribs, shankle meatball kielbasa pork
          loin t-bone.
        </p>
      </div>
    );
  }
}
