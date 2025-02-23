import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe"; // ✅ Correct Import
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addrecipe" element={<AddRecipe />} /> {/* ✅ Corrected */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
