import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<Home />
		</div>
	);
}

export default App;
