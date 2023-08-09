// App.js

import React from "react";
import "./App.css";

import Posts from "./component/Post";
import Navbar from "./component/BlogNav";
import Footer from "./component/Footer";



function App() {
  return (
    <div className="main-container" style={{ backgroundColor: "#edf0f5" }}>
      <Navbar />
      <Posts />

      <Footer />
    </div>
  );
}

export default App;
