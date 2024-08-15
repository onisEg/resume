import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="st-site-header st-style1 st-sticky-header st-transparent-header">
        <div className="st-main-header">
          <div className="container">
            <div className="st-main-header-in">
              <div className="st-main-header-left">
                <a className="st-site-branding" href="index.html">
                  <img src="/AnasLogo.png" alt="" />
                </a>
              </div>
              {/* <div className="st-main-header-right">
                <div className="st-nav">
                  <ul className="st-nav-list st-onepage-nav">
                    <li>
                      <a href="#home" className="st-smooth-move">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="st-smooth-move">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#resume" className="st-smooth-move">
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="st-smooth-move">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#blog" className="st-smooth-move">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="st-smooth-move">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="sp-phone">
                    <svg viewBox="0 0 513.64 513.64">
                      <g>
                        <g>
                          <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                        </g>
                      </g>
                    </svg>
                    <div className="sp-phone-no">
                      <a href="tel:+96879283498">+968 7928 3498</a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
