import React from "react";
import "./model.css";
import { modeldata } from "../../data";

const Model = () => {
	const tagColors = ["#8D30F1", "#129EC1"];
	return (
		<div className="model-page">
			{/* <div className="model-content">
				<p className="">{modeldata.Model}</p>
			</div>
			<hr className="separator" /> */}
			<div className="model-container">
				<h1>{modeldata.Model}</h1>
				<div className="model-para">
					<p>by {modeldata.Organization}</p> <span>•</span>{" "}
					<p>
						{
							modeldata[
								"Organization categorization (from Organization)"
							]
						}
					</p>
					<span>•</span>
					<p>{modeldata["Country (from Organization)"]}</p>{" "}
				</div>
				<div className="model-details">
					<div className="model-tags">
						{["Deep Learning", "NLP"].map((value, index) => (
							<div
								className="tag-design"
								style={{
									"--tab-color":
										tagColors[index % tagColors.length],
								}}
								key={index}
							>
								{value}
							</div>
						))}
					</div>
					<span>•</span>
					<p>Updated 18 days ago</p>
					<span>•</span>
					<p>{modeldata["Publication date"]}</p>
				</div>
				<img
					className="model-bg-img"
					src="./bg-1.png"
					alt="model-bg-img"
				/>
				<h2>Overview</h2>
				<p className="model-para">{modeldata.Abstract}</p>
				<div className="vert-separator" />
				<h2>Training Dataset Notes</h2>
				<p className="model-para">
					{modeldata["Training dataset notes"].replaceAll('"', "")}
				</p>

				<div className="vert-separator" />
				<h2>Domain</h2>
				<div className="model-para">
					{modeldata.Domain.split(",").map((value, index) => (
						<p key={index}>
							{value}
							{index != modeldata.Domain.split(",").length - 1 &&
								","}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Model;
