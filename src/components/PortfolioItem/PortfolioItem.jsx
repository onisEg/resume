import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortfolioItem(props) {

  return (
    <>
      <div className="col-lg-4 col-md-6 col-6 my-2">
        <div className=" bg-light p-3 rounded">
          <div className="st-portfolio-single st-style1 st-lightgallery mb-3">
            <div className="st-portfolio-item ">
              <a
                href={props.projectLink}
                className="st-portfolio  st-lightbox-item rounded shadow-lg"
                target="_blank"
              >
                <div className="st-portfolio-img" >
                  <img
                    className="img-fluid rounded"
                    src={props.img}
                    alt={props.projectTitle}
                  />
                </div>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-dark">{props.projectTitle}</h5>
            <p className="text-muted">
              <span>Languages and Tools : </span>
              <i className={`${props.class1} mx-2`}></i>
              <i className={`${props.class2} mx-2`}></i>
              <i className={`${props.class3} mx-2`}></i>
              <i className={`${props.class4} mx-2`}></i>
              <i className={`${props.class5} mx-2`}></i>
              <i className={`${props.class6} mx-2`}></i>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-dark px-4"
              >
                Demo
              </a>
            </span>

            <a target="_blank" href={props.projectGitLike} className="">
              <i class="fa-brands fa-github fa-2x text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
