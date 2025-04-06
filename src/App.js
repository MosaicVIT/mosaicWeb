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

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Background />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/foryou" element={<ForYou />} />
					<Route path="/foryou/models/abc" element={<Model />} />
					<Route path="/foryou/articles/abc" element={<Article />} />
					<Route path="/foryou/ai-tools/abc" element={<AITool />} />
					<Route path="/search" element={<Search />} />
					<Route path="/discovery" element={<div>Discovery</div>} />
					<Route path="/timeline" element={<div>Timeline</div>} />
					<Route path="/subscription" element={<div>Search</div>} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
