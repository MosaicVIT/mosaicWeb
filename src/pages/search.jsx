import React from "react";
import { Box } from "../components/cards/arcard";
import "../search.css";

const Search = () => {
	const data = {
		title: "How these top growing AIs can be beneficial for you",
		views: 1453,
		date: "05-04-2025",
		bg: "./bg-1.png",
		tags: ["Data Learning", "NLP", "ML"],
	};
	return (
		<div className="search">
			<div className="search-container">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
					if (index % 6 === 0)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#fff"
								textColor="#000"
							/>
						);
					else if (index % 6 === 1)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#D093FF"
								textColor="#000"
							/>
						);
					else if (index % 6 === 2)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#363636"
								textColor="#fff"
								articleType="Product"
							/>
						);
					else if (index % 6 === 3)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#939AFF"
								textColor="#000"
							/>
						);
					else if (index % 6 === 4)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#CCCCCC"
								textColor="#000"
								tabArrow="#cccccc"
								tabBg="#181D39"
								articleType="Article"
							/>
						);
					else if (index % 6 === 5)
						return (
							<Box
								data={data}
								key={index}
								bgColor="#93EDFF"
								textColor="#000"
							/>
						);
				})}
			</div>
		</div>
	);
};

export default Search;
