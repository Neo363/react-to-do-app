import React from "react";
import App from "./App";
import NavigationBar from "./NavigationBar";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Root() {
  return (
    <div className="todo-app-container">
      <Router>
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
