import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // يغلق المينيو لما يضغط على أي لينك
  };

  return (
    <header className="st-site-header st-style1 st-sticky-header st-transparent-header">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <a className="st-site-branding" href="#home">
                <img src="/AnasLogo.png" alt="Logo" />
              </a>
            </div>

            <div className="st-main-header-right">
              {/* زر الهامبرجر في الموبايل */}
              <div
                className={`st-munu-toggle d-lg-none ${
                  isOpen ? "st-toggle-active" : ""
                }`}
                onClick={handleToggle}
              >
                <span></span>
              </div>

              <div className="st-nav">
                <ul
                  className="st-nav-list st-onepage-nav"
                  style={{ display: isOpen ? "block" : "" }}
                >
                  {["home", "Skills", "portfolio"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className="st-smooth-move"
                        onClick={handleLinkClick}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* رقم الهاتف - يظهر فقط في الديسكتوب */}
                <div className="sp-phone d-none d-lg-flex">
                  <svg viewBox="0 0 513.64 513.64">
                    <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                  </svg>
                  <div className="sp-phone-no">
                    <a href="tel:+96879283498">+968 7928 3498</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
