import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio  ">
        <SecTitle title="Portfolio" subTitle="Portfolio" />
        <div className="container">
          <div className="row">
            <PortfolioItem
              img="/portfolio/umsSignIn.jpg"
              projectTitle="User Management System !"
              projectLink="https://user-management-system-orpin.vercel.app/"
              projectGitLike="https://github.com/onisEg/userManagementSystem"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-tsx"
            />
            <PortfolioItem
              img="/portfolio/carRentHeader.jpg"
              projectTitle="RentCars !"
              projectLink="https://cars-mocha-phi.vercel.app/"
              projectGitLike="https://github.com/onisEg/cars"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-jsx"
            />
            <PortfolioItem
              img="/portfolio/eCommers.jpg"
              projectTitle="eCommerce !"
              projectLink="https://oniseg.github.io/eCommerce/"
              projectGitLike="https://github.com/onisEg/eCommerce"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-js"
              class4="fa-brands fa-bootstrap"
            />
            <PortfolioItem
              img="/portfolio/busicol.jpg"
              projectTitle="busicol !"
              projectLink="https://oniseg.github.io/busicol/"
              projectGitLike="https://github.com/onisEg/busicol"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
            />
            <PortfolioItem
              img="/portfolio/pixels.jpg"
              projectTitle="Pixels !"
              projectLink="https://oniseg.github.io/pixels/"
              projectGitLike="https://github.com/onisEg/pixels"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
            />
            <PortfolioItem
              img="/portfolio/family.jpg"
              projectTitle="My Family !"
              projectLink="https://oniseg.github.io/MeFamily/"
              projectGitLike="https://github.com/onisEg/MeFamily"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
            />
            <PortfolioItem
              img="/portfolio/bmi.jpg"
              projectTitle="BMI calculator !"
              projectLink="https://oniseg.github.io/BMI-calculator/"
              projectGitLike="https://github.com/onisEg/BMI-calculator"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
              class4="fa-brands fa-js"
            />
            <PortfolioItem
              img="/portfolio/fabric.jpg"
              projectTitle="Fabric Store !"
              projectLink="https://oniseg.github.io/FabricStore/"
              projectGitLike="https://github.com/onisEg/FabricStore"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
              class4="fa-brands fa-js"
            />
            <PortfolioItem
              img="/portfolio/danial.jpg"
              projectTitle="Fabric Store !"
              projectLink="https://oniseg.github.io/danial/"
              projectGitLike="https://github.com/onisEg/danial"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
              class4="fa-brands fa-js"
            />
          </div>
        </div>
      </section>
    </>
  );
}
