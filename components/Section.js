import React from "react";

function Section(props) {
  return (
    // <div className="container">
      <div className="sec">
        {props.children}
      </div>
    // </div>
  );
}

export default Section;
