import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: "2.5rem", color: "#ffcb05", textShadow: "2px 2px #3b4cca" }}>
        🎉 Pokémon Party Adventure! 🎉
      </h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png" alt="Pokemon" style={{ width: 200, margin: 20 }} />
      <p style={{ fontSize: "1.2rem" }}>
        Welcome to the ultimate Pokémon birthday quest!<br />
        Complete two fun games to unlock your special invite to the party.
      </p>
      <button
        style={{ marginTop: 30, fontSize: "1.2rem", padding: "12px 32px", background: "#3b4cca", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
        onClick={() => navigate("/game1")}
      >
        Start Your Adventure!
      </button>
    </div>
  );
}