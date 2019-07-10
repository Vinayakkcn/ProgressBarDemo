import React from "react";
import { MDBProgress } from "mdbreact";

import "../styles/Progressbar.scss";

const ProgressBarStatus = props => {
  return (
    <>
      <MDBProgress
        material
        value={props.barValue}
        style={{backgroundColor:(props.barValue / props.limit) * 100}>75? "red": "blue"}
        className = "progressBar" 
      >
        {((props.barValue / props.limit) * 100).toFixed(0)}
      </MDBProgress>
    </>
  );
};

export default ProgressBarStatus;
