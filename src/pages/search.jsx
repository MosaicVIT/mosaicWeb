import React, { useEffect } from "react";
import { Box } from "../components/cards/arcard";
import "../search.css";
import { useLocation } from "react-router-dom";
import { apiClient } from "../apiclient";
import { transformToCard } from "../components/helper/transformToCard";
import { getColor } from "../components/helper/colors";
import { Spin } from "antd";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const query = queryParams.get("query"); // ?user=123

  useEffect(() => {
    setData([]);
    setLoading(true);
    apiClient
      .get("/search", {
        params: {
          query: query,
        },
      })
      .then((res) => {
        return res.data;
      })
      .then((out) => {
        console.log(out);
        setData(out.map(transformToCard).filter((i) => i));
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="search">
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <Spin />
        </div>
      )}
      <div className="search-container">
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
    </div>
  );
};

export default Search;
