import React from "react";
import "../home.css";
import { getImageUrl } from "../components/helper/colors";
import { CTAButton } from "../components/helper/ctaButton";

const Home = () => {
  return (
    <div className="home-page">
      <img
        src={getImageUrl("/landing-cards.svg")}
        alt="landing-cards"
        id="home-bg-img"
      />

      <div id="home-txt-cont">
        <div id="home-text-container">
          <p>This is the future.</p>
          <h1>Discover how far AI has come with Mosaic</h1>
        </div>
        <CTAButton to="/foryou">Explore For You →</CTAButton>

        <a href="https://github.com/MosaicVIT/mosaicWeb?tab=readme-ov-file">
          <img
            src={getImageUrl("/landing-card.svg")}
            alt="landing-card"
            id="home-card-img"
          />
        </a>
      </div>

      <div id="home-gph-cont">
        <img
          src={process.env.PUBLIC_URL + "/landing-graph.svg"}
          alt="landing-card"
          id="home-gph-img"
        />
      </div>
      <img
        src={getImageUrl("/landing-nodes.svg")}
        alt="landing-nodes"
        id="home-nodes-img"
      />
    </div>
  );
};

export default Home;
