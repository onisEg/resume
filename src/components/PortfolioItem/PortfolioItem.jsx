import React from "react";

export default function PortfolioItem(props) {
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-6 my-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className=" bg-light p-3 rounded">
          <div className="st-portfolio-single st-style1 st-lightgallery mb-3">
            <div className="st-portfolio-item ">
              <a
                href={props.projectLink}
                className="st-portfolio  st-lightbox-item rounded shadow-lg"
                target="_blank"
              >
                <div className="st-portfolio-img position-relative">
                  {props.tag && (
                    <span
                      className={`badge position-absolute top-0 start-0 m-2 bg-${
                        props.tagColor || "secondary"
                      }`}
                    >
                      {props.tag}
                    </span>
                  )}
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
              {props.classes?.map((cls, i) => (
                <i key={i} className={`${cls} mx-2`}></i>
              ))}
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
