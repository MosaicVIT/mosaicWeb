import React from "react";
import "./card.css";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const maxNCharacters = (text, n) => {
  if (!text) return text;
  if (text.length > n) {
    return text.slice(0, n) + "...";
  }
  return text;
};

const getUrl = (id, type) => {
  const typeMap = {
    Model: "models",
    Article: "articles",
    "AI Tool": "ai-tools",
  };

  return `/${typeMap[type]}/${id}`;
};
export const Box = ({
  bgColor = "#fff",
  textColor = "#000",
  tabBg = "#d9d9d9",
  tabArrow = "#000",
  data,
  articleType = "Model",
}) => {
  return (
    <Link
      to={getUrl(data.id, articleType)}
      className="box"
      style={{ "--txt-color": textColor }}
    >
      <div className="inner-box" style={{ "--bg-color": bgColor }}>
        <div className="tab-title">
          <p>{articleType}</p>
          <div className="tab-arrow" style={{ "--tab-arrow-bg": tabBg }}>
            <a href={data?.link || ""} style={{ "--txt-color": textColor }} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
              <LuArrowUpRight color={tabArrow} size={"30px"} />
            </a>
          </div>
        </div>
        <img alt="article-photo" src={data?.bg} />
        <div className="tags">
          {data?.tags.map((value, index) => (
            <div
              className="tag-design"
              style={{ "--tab-color": textColor }}
              key={index}
            >
              {value}
            </div>
          ))}
        </div>
        <p>{maxNCharacters(data?.title, 50)}</p>
        <div className="card-footer">
          <p className="views">
            {data?.views} {data?.views > 1 ? "views" : "view"}
          </p>
          <p className="date">{data?.date}</p>
        </div>
      </div>
    </Link>
  );
};
