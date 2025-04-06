// import logo from "./logo.svg";
import "./App.css";
import { Background } from "./components/helper/background";
import Header from "./components/header/header";
import { HashRouter, Route, Routes } from "react-router-dom";
import ForYou from "./components/for-you/for-you";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Background />
				<Header />
				<Routes>
					<Route path="/" element={<div>Home</div>} />
					<Route path="/foryou" element={<ForYou />} />
					<Route path="/discovery" element={<div>Discovery</div>} />
					<Route path="/timeline" element={<div>Timeline</div>} />
					<Route path="/subscription" element={<div>Search</div>} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
