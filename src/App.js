// App.js

import React from "react";
import "./App.css";

import Posts from "./component/Post";
import Navbar from "./component/BlogNav";

const App = () => {
	return (
		<div className="main-container" style={{backgroundColor: "#edf0f5"}}>
			<Navbar />
			<Posts />
		</div>
	);
};

export default App;
