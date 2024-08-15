import React from "react";

export default function Resume() {
  return (
    <>
      <section id="resume" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SecTitle />
        <div className="container">
          <div className="row ">
            {/* Experience */}
            <div className="col-lg-6">
              <div className="st-resume-wrap">
                <div className="st-resume-heading">
                  <img
                    src="assets/img/icon/resume-icon1.png"
                    alt="resume-icon"
                  />
                  <h2 className="st-resume-heading-title">Experience</h2>
                </div>

                <div className="st-height-b50 st-height-lg-b30"></div>

                <div className="st-resume-timeline-wrap">
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">
                      Senior UX/UI Designer
                    </h3>
                    <div className="st-resume-timeline-duration">
                      Jan 2020 - Present
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      Bergnaum, Hills and Howe
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                  <div className="st-height-b50 st-height-lg-b30"></div>
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">
                      Product Designer
                    </h3>
                    <div className="st-resume-timeline-duration">
                      Jan 2016 - December 2019
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      Langosh, Sipes and Raynor
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                  <div className="st-height-b50 st-height-lg-b30"></div>
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">UI/UX Designer</h3>
                    <div className="st-resume-timeline-duration">
                      Jan 2014 - December 2015
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      Strosin, Maggio and Homenick
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="col-lg-6">
              <div className="st-height-b0 st-height-lg-b50"></div>
              <div className="st-resume-wrap">
                <div className="st-resume-heading">
                  <img
                    src="assets/img/icon/resume-icon2.png"
                    alt="resume-icon"
                  />
                  <h2 className="st-resume-heading-title">Education</h2>
                </div>
                <div className="st-height-b50 st-height-lg-b30"></div>

                <div className="st-resume-timeline-wrap">
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">
                      Master of Computer Science
                    </h3>
                    <div className="st-resume-timeline-duration">
                      2015 - 2016
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      University of XYZ
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                  <div className="st-height-b50 st-height-lg-b30"></div>
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">
                      Bachelor of Computer Science
                    </h3>
                    <div className="st-resume-timeline-duration">
                      2010 - 2014
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      University of ABC
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                  <div className="st-height-b50 st-height-lg-b30"></div>
                  <div className="st-resume-timeline">
                    <h3 className="st-resume-timeline-title">
                      Diploma in Computer Science
                    </h3>
                    <div className="st-resume-timeline-duration">
                      2006 - 2010
                    </div>
                    <h4 className="st-resume-timeline-subtitle">
                      XYZ Institution
                    </h4>
                    <div className="st-resume-timeline-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                        feugiat turpis.
                      </p>
                    </div>
                  </div>{" "}
                  {/* st-resume-timeline */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
    </>
  );
}
