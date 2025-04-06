import React, { useCallback, useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import { Handle } from "@xyflow/react";

const colors = {
  Model: "#787a1e",
  "AI Tool": "#6a72de",
  Article: "#8e3131",
};
function DotNode({ data }) {
  // You can style or color-code based on data props if needed
  return (
    <div
      title={data.name || data.model}
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: colors[data.type], // blue if unselected, red if selected
        border: data.selected ? "2px solid white" : "",
      }}
    >
      {/* Hides default connection handles (no edges) */}
      <Handle type="target" position="top" style={{ opacity: 0 }} />
      <Handle type="source" position="bottom" style={{ opacity: 0 }} />
    </div>
  );
}

const nodeTypes = { dot: DotNode };

// Convert each coordinate to a React Flow node
function createNodes(coords) {
  return coords.map((item, index) => ({
    id: `node-${index}`,
    type: "dot",
    position: { x: item.coords[0] * 20, y: item.coords[1] * 5 },
    data: { ...item, selected: false, id: item._id }, // we’ll use this to highlight selected node
  }));
}

export default function Plot2D({ coords, searchAndShow }) {
  const [nodes, setNodes] = useState(() => createNodes(coords));
  const [edges, setEdges] = useState([]); // no edges

  // Handle node click -> toggle 'selected' state
  const onNodeClick = useCallback((event, node) => {
    searchAndShow(node.data.id); // Call the searchAndShow function with the node ID
    setNodes((prevNodes) =>
      prevNodes.map((n) =>
        n.id === node.id
          ? { ...n, data: { ...n.data, selected: !n.data.selected } }
          : {
              ...n,
              data: { ...n.data, selected: false },
            }
      )
    );
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
