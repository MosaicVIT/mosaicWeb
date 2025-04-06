import "./App.css";
import { Background } from "./components/helper/background";
import Header from "./components/header/header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Discovery from "./pages/discovery";
import "@xyflow/react/dist/style.css";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/foryou" element={<div>For You</div>} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/timeline" element={<div>Timeline</div>} />
          <Route path="/subscription" element={<div>Search</div>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
