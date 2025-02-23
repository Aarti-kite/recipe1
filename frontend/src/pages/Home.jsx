
import React from "react";

import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate correctly

  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to Recipe Sharing</h1>
        <p>Discover and share the best recipes from around the world.</p>
        <button className="add-recipe-btn" onClick={() => navigate("/addrecipe")}>
          Add Recipe
        </button>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Recipe Sharing. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;