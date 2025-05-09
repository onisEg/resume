import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio " style={{ margin: "100px 0" }}>
        <SecTitle title="Portfolio" subTitle="Portfolio" />
        <div className="container">
          <div className="row">
            <PortfolioItem
              img="/portfolio/contant.png"
              projectTitle="Contact ➕"
              projectLink="https://contacts-indol.vercel.app/"
              projectGitLike="https://github.com/onisEg/contacts"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-tsx"
              class4="fa-brands fa-stripe"
              tag="Latest"
              tagColor="success"
            />
            <PortfolioItem
              img="/portfolio/image7.jpg"
              projectTitle="Food Recipe 🍇"
              projectLink="https://food-app-git-update-v2-onisegs-projects.vercel.app/"
              projectGitLike="https://github.com/onisEg/food_app"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-tsx"
              class4="fa-brands fa-stripe"
              tag="working on"
              tagColor="warning"
            />
            <PortfolioItem
              img="/portfolio/bookshop-git-main-onisegs-projects-vercel-app-dashbord-books-2024-09-30-14_07_10.png"
              projectTitle="Book Shop 📚"
              projectLink="https://bookshop-git-main-onisegs-projects.vercel.app/"
              projectGitLike="https://github.com/onisEg/bookshop"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-tsx"
              class4="fa-brands fa-stripe"
            />
            <PortfolioItem
              img="/portfolio/ums.jpg"
              projectTitle="UMS !"
              projectLink="https://user-management-system-orpin.vercel.app/"
              projectGitLike="https://github.com/onisEg/userManagementSystem"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-tsx"
            />
            <PortfolioItem
              img="/portfolio/cars-mocha-phi-vercel-app-2024-09-30-11_33_44.png"
              projectTitle="RentCars 🚗"
              projectLink="https://cars-mocha-phi.vercel.app/"
              projectGitLike="https://github.com/onisEg/cars"
              class1="fa-brands fa-react "
              class2="fa-brands fa-html5"
              class3="bi bi-filetype-jsx"
            />
            <PortfolioItem
              img="/portfolio/busicol-2024-09-30-12_07_16.png"
              projectTitle="busicol !"
              projectLink="https://oniseg.github.io/busicol/"
              projectGitLike="https://github.com/onisEg/busicol"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
            />
            <PortfolioItem
              img="/portfolio/eCommerce-2024-09-30-12_09_52.png"
              projectTitle="eCommerce !"
              projectLink="https://oniseg.github.io/eCommerce/"
              projectGitLike="https://github.com/onisEg/eCommerce"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-js"
              class4="fa-brands fa-bootstrap"
            />

            <PortfolioItem
              img="/portfolio/MeFamily-2024-09-30-12_12_56.png"
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
              img="/portfolio/pixels.jpg"
              projectTitle="Pixels !"
              projectLink="https://oniseg.github.io/pixels/"
              projectGitLike="https://github.com/onisEg/pixels"
              class1="fa-brands fa-html5"
              class2="fa-brands fa-css3"
              class3="fa-brands fa-bootstrap"
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
