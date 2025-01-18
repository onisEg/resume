import React from "react";

export default function Hero() {
  return (
    <>
      <>
        <section
          className="st-hero st-style2 st-bg st-dynamic-bg"
          data-src="/hero-bg-2.jpg"
        >
          <div className="container">
            <div className="st-hero-text">
              <h1>
                Hi, I am <span>Anas</span>
              </h1>
              <p>
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. <br />I also make websites more & more
                interactive with web animations.
              </p>
              <div className="st-hero-social-links">
                <a
                  target="_blank"
                  href="https://wa.me/+34666281390"
                  className="st-social-btn"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  target="_blank"
                  href="tel:+34666281390"
                  className="st-social-btn"
                >
                  <i className="fa-solid fa fa-phone"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/anaseg/"
                  className="st-social-btn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/onisEg"
                  className="st-social-btn"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.behance.net/AnasEg"
                  className="st-social-btn"
                >
                  <i className="fab fa-behance"></i>
                </a>
              </div>
              <div className="st-social-link d-flex justify-content-center pt-3">
                <a
                  href="/AnasCvfrontEndEs.pdf"
                  className="st-social-btn active"
                  download={true}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="st-social-icon">
                    <i class="fa-solid fa-download"></i>
                  </span>
                  <span className="st-icon-name">Download CV</span>
                </a>
              </div>
            </div>
          </div>
          <svg
            x="0px"
            y="0px"
            viewBox="0 186.5 1920 113.5"
            className="st-hero-shape"
          >
            <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
          </svg>
        </section>
      </>
    </>
  );
}
