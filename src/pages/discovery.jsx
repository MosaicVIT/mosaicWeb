import React from "react";
import styled from "styled-components";
import GraphView from "../components/graph/graph";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  height: 100%;
  overflow-y: hidden;
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
  return (
    <PageContainer>
      <LeftPanel>
        {/* <GraphView /> */}
      </LeftPanel>
      <RightPanel>
        <GraphView />
      </RightPanel>
    </PageContainer>
  );
};

export default Discovery;
