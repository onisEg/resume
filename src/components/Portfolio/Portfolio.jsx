import React from "react";
import SecTitle from "../SecTitle/SecTitle";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { portfolioData } from "../../portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ margin: "100px 0" }}>
      <SecTitle title="Portfolio" subTitle="Portfolio" />
      <div className="container">
        <div className="row">
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
