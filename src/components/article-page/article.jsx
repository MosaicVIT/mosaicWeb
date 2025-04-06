import React from "react";
import "./article.css";
import { apiClient } from "../../apiclient";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { getImageUrl } from "../helper/colors";
// import { articledata } from "../../data";

const Article = () => {
  const { id } = useParams();

  const [articledata, setArticleData] = React.useState(null);
  React.useEffect(() => {
    apiClient
      .get("/single", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const tagColors = ["#8D30F1", "#129EC1"];

  if (!articledata) {
    return (
      <div className="loading-container">
        <Spin />
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">
        <h1>{articledata.metadata.title}</h1>
        <p className="article-para" style={{ marginTop: "-20px" }}>
          by {articledata.source.platform}
        </p>
        <div className="article-details">
          <div className="article-tags">
            {articledata.assigned_tags.map((value, index) => (
              <div
                className="tag-design"
                style={{
                  "--tab-color": tagColors[index % tagColors.length],
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
          <p>{articledata.source.scrape_timestamp.split("T")[0]}</p>
        </div>
        <img
          className="article-bg-img"
          src={getImageUrl("/ph-1.jpg")}
          alt="article-bg-img"
        />
        <h2>Description</h2>
        <p className="article-para">{articledata.content.description}</p>
        <div className="vert-separator" />
        <h2>Abstract</h2>
        <p className="article-para">{articledata.content.abstract}</p>
        <div className="vert-separator" />
        <h2>Article</h2>
        <p className="article-para">{articledata.content.article_text}</p>
        <div className="vert-separator" />
        <h2>Keywords</h2>
        <p className="article-para">
          {articledata.content.keywords.map((value, index) => (
            <>
              {value}
              {index != articledata.content.keywords.length - 1 && ", "}
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Article;
