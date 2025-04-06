import React, { useEffect } from "react";
import { Box } from "../cards/arcard";
import "./for-you.css";
import { apiClient } from "../../apiclient";
import { Pagination, Spin } from "antd";
import { transformToCard } from "../helper/transformToCard";

const pageSize = 24;
const CardTypes = ["All", "Model", "AI Tool", "Article"];



const colorConfigs = [
  { bgColor: "#fff", textColor: "#000" },
  { bgColor: "#D093FF", textColor: "#000" },
  { bgColor: "#363636", textColor: "#fff" },
  { bgColor: "#939AFF", textColor: "#000" },
  {
    bgColor: "#CCCCCC",
    textColor: "#000",
    tabArrow: "#cccccc",
    tabBg: "#181D39",
  },
  { bgColor: "#93EDFF", textColor: "#000" },
];

const getColor = (i) => {
  const index = i % colorConfigs.length;
  return colorConfigs[index];
};
const ForYou = () => {
  const [activeType, setActiveType] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(0);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = async (page, type = activeType) => {
    apiClient
      .get("/listings", {
        params: {
          page,
          page_size: pageSize,
          type:type,
        },
      })

      .then((res) => res.data)

      .then((out) => {
        const { data, total_count } = out;
        setData(data.map(transformToCard).filter((i) => i));
        setTotalCount(total_count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="for-you">
        <div className="for-you-left">
          <div className="for-you-navigation">
            {CardTypes.map((type, index) => {
              return (
                <span>
                  <span
                    key={index}
                    className={activeType === type ? "active" : ""}
                    onClick={() => {
                      setPage(1);
                      setData([]);
                      setActiveType(type);
                      fetchData(1, type);
                    }}
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
            {data.map((item, index) => {
              const { bgColor, textColor } = getColor(index);
              return (
                <Box
                  data={item}
                  key={index}
                  bgColor={bgColor}
                  textColor={textColor}
                  articleType={item.type}
                />
              );
            })}
          </div>
          {data.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            >
              <Spin size="small" />
            </div>
          )}
          {data.length > 0 && (
            <Pagination
              current={page}
              onChange={(p) => {
                setData([]);
                fetchData(p);
                setPage(p);
              }}
              total={totalCount}
              pageSize={pageSize}
              showSizeChanger={false}
              align="center"
            />
          )}
          <br />
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
    </div>
  );
};

export default ForYou;
