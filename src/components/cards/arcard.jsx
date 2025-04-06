import React from "react";
import "./card.css";
import { LuArrowUpRight } from "react-icons/lu";

const maxNCharacters = (text, n) => {
  if (!text) return text;
  if (text.length > n) {
    return text.slice(0, n) + "...";
  }
  return text;
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
    <a
      href={data?.link || ""}
      className="box"
      style={{ "--txt-color": textColor }}
    >
      <div className="inner-box" style={{ "--bg-color": bgColor }}>
        <div className="tab-title">
          <p>{articleType}</p>
          <div className="tab-arrow" style={{ "--tab-arrow-bg": tabBg }}>
            <LuArrowUpRight color={tabArrow} size={"30px"} />
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
    </a>
  );
};
