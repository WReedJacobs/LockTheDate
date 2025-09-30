import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    q: "Which Pokémon is known as the Electric Mouse?",
    options: ["Charmander", "Bulbasaur", "Pikachu", "Squirtle"],
    answer: "Pikachu"
  }
];

export default function Game1() {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (selected === questions[0].answer) {
      navigate("/game2");
    } else {
      setError("Oops! Try again.");
    }
  }

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2 style={{ color: "#3b4cca" }}>Game 1: Pokémon Quiz</h2>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu" style={{ width: 120 }} />
      <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
        <div style={{ fontSize: "1.2rem", marginBottom: 20 }}>{questions[0].q}</div>
        {questions[0].options.map(opt => (
          <div key={opt} style={{ margin: 8 }}>
            <label>
              <input
                type="radio"
                name="poke"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
              />{" "}
              {opt}
            </label>
          </div>
        ))}
        <button type="submit" style={{ marginTop: 20, padding: "10px 30px", background: "#ffcb05", border: "none", borderRadius: 8, fontWeight: "bold" }}>
          Submit
        </button>
        {error && <div style={{ color: "red", marginTop: 15 }}>{error}</div>}
      </form>
    </div>
  );
}