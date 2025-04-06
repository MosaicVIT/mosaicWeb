import React from "react";
import "../home.css";

const Home = () => {
	return (
		<div className="home-page">
			<img
				src="./landing-cards.svg"
				alt="landing-cards"
				id="home-bg-img"
			/>
			<div id="home-txt-cont">
				<div id="home-text-container">
					<p>This is the future.</p>
					<h1>Discover how far AI has come with Mosaic</h1>
				</div>
				<img
					src="./landing-card.svg"
					alt="landing-card"
					id="home-card-img"
				/>
			</div>
			<div id="home-gph-cont">
				<img
					src="./landing-graph.svg"
					alt="landing-card"
					id="home-gph-img"
				/>
			</div>
			<img
				src="./landing-nodes.svg"
				alt="landing-nodes"
				id="home-nodes-img"
			/>
		</div>
	);
};

export default Home;
