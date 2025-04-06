import React, { useCallback, useEffect, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import { v4 as uuid } from "uuid";
import { Handle } from "@xyflow/react";
import { apiClient } from "../../apiclient";

// Start with 3 initial nodes arranged arbitrarily
const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 100 },
    data: { label: "Node 1" },
    type: "circle",
  },
  {
    id: "2",
    position: { x: 250, y: 250 },
    data: { label: "Node 2" },
    type: "circle",
  },
  {
    id: "3",
    position: { x: 250, y: 400 },
    data: { label: "Node 3" },
    type: "circle",
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

const GraphView = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    apiClient.get("/initialize-discover").then((res) => {
      return res.data}
    ).then((out) => {

      console.log(out)
    }
  )
  },[])

  const nodeTypes = {
    circle: CircleNode,
  };
  const handleNodeClick = useCallback((event, node) => {
    // Use a radial layout: new nodes at fixed radius, equally spaced
    const { x, y } = node.position;
    const radius = 150;
    // Angles in radians: 0, 120, and 240 degrees
    const angles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];


    
    const newNodes = angles.map((angle) => {
      return {
        id: uuid(),
        type: "circle",
        data: {},
        position: {
          x: x + radius * Math.cos(angle),
          y: y + radius * Math.sin(angle),
        },
      };
    });

    const newEdges = newNodes.map((newNode) => ({
      id: `e${node.id}-${newNode.id}`,
      source: node.id,
      target: newNode.id,
    }));

    setNodes((nds) => [...nds, ...newNodes]);
    setEdges((eds) => [...eds, ...newEdges]);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const CircleNode = ({ data, isConnectable }) => (
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "#333",
      border: "3px solid #a020f0", // violet border
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      margin: 0,
      overflow: "hidden",
    }}
  >
    <Handle type="target" position="top" style={{ opacity: 0 }} />
    <Handle type="source" position="bottom" style={{ opacity: 0 }} />
  </div>
);

export default GraphView;
