import logo from "./logo.svg";
import "./App.css";
import { Background } from "./components/helper/background";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
    </div>
  );
}

export default App;
