import React, { useEffect } from "react";
import styled from "styled-components";
import GraphView from "../components/graph/graph";
import Plot2D from "../components/dottedGraph/dottedGraph";
import { apiClient } from "../apiclient";
import { transformToCard } from "../components/helper/transformToCard";
import { Box } from "../components/cards/arcard";
import { getColor } from "../components/helper/colors";
import { Spin } from "antd";

export const PageContainer = styled.div`
  display: flex;
  height: calc(100vh - 78px);
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
`;

export const LeftPanel = styled.div`
  flex: 4;
  overflow-y: auto;
  padding-right: 1rem;
  gap: 2rem;
  height: 100%;
  overflow-y: auto;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 100%;
  border: 1px solid #ffffffca;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const Discovery = () => {
  const [coords, setCoords] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    apiClient
      .get("/initialize-discover")
      .then((res) => {
        return res.data;
      })
      .then((out) => {
        console.log(out);
        setCoords(out);
      });
  }, []);

  const searchAndShow = (id) => {
    setData([]);
    setLoading(true);
    apiClient
      .get("/getsimilar", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        return res.data;
      })
      .then((out) => {
        setData(out.map(transformToCard).filter((i) => i));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <PageContainer>
      <LeftPanel>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin />
          </div>
        )}

        {data.length === 0 && !loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h1 style={{ color: "#fff" }}>Click on a node to discover</h1>
            <h3 style={{ color: "#ffffffbb" }}>
              On selecting a node, you will be able to see similar items/ nodes
            </h3>
          </div>
        )}
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
      </LeftPanel>
      <RightPanel>
        {coords.length > 0 && (
          <Plot2D coords={coords} searchAndShow={searchAndShow} />
        )}
      </RightPanel>
    </PageContainer>
  );
};

export default Discovery;
