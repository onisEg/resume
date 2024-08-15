import React from "react";

export default function SecTitle(props) {
  return (
    <>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">{props.title}</h4>
          <h2 className="st-section-heading-subtitle">{props.subTitle}</h2>
        </div>
      </div>
    </>
  );
}
