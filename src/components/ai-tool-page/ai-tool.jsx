import React from "react";
import "../models-page/model.css";
import { apiClient } from "../../apiclient";
import { Spin } from "antd";
import { useParams } from "react-router-dom";

const AITool = () => {
  const { id } = useParams();

  const [productData, setProductData] = React.useState(null);
  React.useEffect(() => {
    apiClient
      .get("/single", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const tagColors = ["#8D30F1", "#129EC1"];

  if (!productData) {
    return (
      <div className="loading-container">
        <Spin />
      </div>
    );
  }

  return (
    <div className="model-page">
      {/* <div className="model-content">
                    <p className="">{modeldata.Model}</p>
                </div>
                <hr className="separator" /> */}
      <div className="model-container">
        <h1>{productData.metadata.title}</h1>

        <p className="model-para">by {productData.source.platform}</p>
        <div className="model-details">
          <div className="model-tags">
            {["Deep Learning", "NLP"].map((value, index) => (
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
          <p>{productData.source.scrape_timestamp.split("T")[0]}</p>
        </div>
        <img
          className="model-bg-img"
          src={productData.content.images[1].url}
          alt="model-bg-img"
        />
        <h2>Overview</h2>
        <p className="model-para">{productData.content.description}</p>
        {/* <div className="vert-separator" />
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
                    </div> */}
      </div>
    </div>
  );
};

export default AITool;
