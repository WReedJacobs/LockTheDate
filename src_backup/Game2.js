import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Game2() {
  const [caught, setCaught] = useState(false);
  const navigate = useNavigate();

  function handleCatch() {
    setCaught(true);
    setTimeout(() => navigate("/invite"), 1200);
  }

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2 style={{ color: "#3b4cca" }}>Game 2: Catch the Pikachu!</h2>
      <p>Click Pikachu to catch him and unlock your invite!</p>
      <div style={{ margin: 40 }}>
        {!caught ? (
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt="Pikachu"
            style={{ width: 120, cursor: "pointer", transition: "transform 0.2s" }}
            onClick={handleCatch}
          />
        ) : (
          <div>
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
              alt="Pikachu"
              style={{ width: 120, filter: "grayscale(80%)" }}
            />
            <div style={{ color: "#ffcb05", fontWeight: "bold", marginTop: 20 }}>
              You caught Pikachu! 🎉
            </div>
          </div>
        )}
      </div>
    </div>
  );
}