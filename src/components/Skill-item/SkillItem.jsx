import React from "react";

export default function SkillItem(props) {
  return (
    <>
      <div className="col-4 col-md ">
        <div className="d-flex flex-column align-items-center ">
          <div className=" d-flex align-items-center justify-content-center p-md-1 p-3">
            <img
              className={` img-fluid p-md-1   ${props.style}`}
              src={props.img}
              alt={props.skillTile}
            />
          </div>
          <p className={`text-capitalize pt-3 `}>{props.skillTile}</p>
        </div>
      </div>
    </>
  );
}
