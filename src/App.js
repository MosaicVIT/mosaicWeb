// import logo from "./logo.svg";
import "./App.css";
import { Background } from "./components/helper/background";
import Header from "./components/header/header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Discovery from "./pages/discovery";
import "@xyflow/react/dist/style.css";
import ForYou from "./components/for-you/for-you";
import Model from "./components/models-page/model";
import Article from "./components/article-page/article";
import AITool from "./components/ai-tool-page/ai-tool";
import Home from "./pages/home";
import Search from "./pages/search";
import Timeline from "./pages/timeline";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Background />
        <Header />
        <Routes>
          <Route path="/models/:id" element={<Model />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/ai-tools/:id" element={<AITool />} />

          <Route path="/foryou" element={<ForYou />} />

          <Route path="/search" element={<Search />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/subscription" element={<div>Search</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
