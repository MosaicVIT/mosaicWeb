import React from "react";
import { Box } from "../cards/arcard";
import "./for-you.css";

const CardTypes = ["All", "Model", "Product", "Article"];
const ForYou = () => {
  const [activeType, setActiveType] = React.useState("All");
  const data = {
    title: "How these top growing AIs can be beneficial for you",
    views: 1453,
    date: "05-04-2025",
    bg: "./bg-1.png",
    tags: ["Data Learning", "NLP", "ML"],
  };
  return (
    <div className="for-you">
      <div className="for-you-left">
        <div className="for-you-navigation">
          {CardTypes.map((type, index) => {
            return (
              <span>
                <span
                  key={index}
                  className={activeType === type ? "active" : ""}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </span>
                {index !== CardTypes.length - 1 && " |"}
              </span>
            );
          })}
          {/* <span className="active">All</span> | <span>Model</span> |{" "}
        <span>Product</span> | <span>Article</span> */}
        </div>
        <div className="box-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            if (index % 6 === 0)
              return (
                <Box data={data} key={index} bgColor="#fff" textColor="#000" />
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
      <div className="trending-ai-model">
        <p className="trending-title">Trending AI Models</p>
        {[1, 2, 3, 4, 5].map((value, index) => (
          <div className="trending-card" key={index}>
            <p>{"nividia/Llama-Nemotron"}</p>
            <div className="trending-card-footer">
              <span className="views">
                {data?.views} {data?.views > 1 ? "views" : "view"}
              </span>
              <span className="date">{data?.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYou;
