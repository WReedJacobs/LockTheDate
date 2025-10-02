import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 20 Pokémon (first gen, iconic, and colorful)
const allPokemons = [
  { name: "Bulbasaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
  { name: "Ivysaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" },
  { name: "Venusaur", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
  { name: "Charmander", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
  { name: "Charmeleon", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" },
  { name: "Charizard", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
  { name: "Squirtle", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
  { name: "Wartortle", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" },
  { name: "Blastoise", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
  { name: "Pikachu", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { name: "Jigglypuff", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" },
  { name: "Meowth", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png" },
  { name: "Psyduck", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png" },
  { name: "Machop", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png" },
  { name: "Magnemite", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png" },
  { name: "Eevee", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
  { name: "Snorlax", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" },
  { name: "Lapras", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" },
  { name: "Gengar", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
  { name: "Mew", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" }
];

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

function pickTargets(pokemons, n) {
  // Always include Pikachu, then pick n-1 others (not Pikachu)
  const pikachu = pokemons.find(p => p.name === "Pikachu");
  const others = pokemons.filter(p => p.name !== "Pikachu");
  return [pikachu, ...shuffle(others).slice(0, n - 1)];
}

export default function Game1() {
  const [shuffled] = useState(shuffle(allPokemons));
  const [targets] = useState(pickTargets(allPokemons, 3));
  const [found, setFound] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleClick(poke) {
    if (targets.some(t => t.name === poke.name) && !found.includes(poke.name)) {
      const newFound = [...found, poke.name];
      setFound(newFound);
      if (newFound.length === targets.length) {
        setTimeout(() => navigate("/game2"), 800);
      }
    } else {
      setError("Try again! Find the Pokémon shown below.");
      setTimeout(() => setError(""), 1200);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #7ac74c 0%, #fff 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 0,
      position: "relative"
    }}>
      <div style={{
        marginTop: 60,
        background: "#fff",
        borderRadius: 32,
        boxShadow: "0 8px 32px #7ac74c55",
        padding: "36px 24px 32px 24px",
        maxWidth: 520,
        width: "95%",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
          alt="Pikachu"
          style={{ width: 90, marginBottom: 10, filter: "drop-shadow(0 4px 12px #ffcb05aa)" }}
        />
        <h2 style={{
          color: "#3b4cca",
          fontWeight: "bold",
          fontSize: "2.2rem",
          fontFamily: "'Baloo 2', 'Comic Sans MS', 'Arial Rounded MT Bold', Arial, sans-serif"
        }}>
          Game 1: <span style={{ color: "#ffcb05" }}>Find These Pokémon!</span>
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 30, margin: "20px 0" }}>
          {targets.map(t => (
            <div key={t.name} style={{ opacity: found.includes(t.name) ? 0.3 : 1 }}>
              <img src={t.img} alt={t.name} style={{ width: 100, border: found.includes(t.name) ? "4px solid #3b4cca" : "4px solid #eee", borderRadius: 10 }} />
              <div style={{ fontWeight: "bold", fontSize: 18, color: "#3b4cca" }}>{t.name}</div>
              {found.includes(t.name) && <div style={{ color: "#3b4cca", fontWeight: "bold", fontSize: 20 }}>✓</div>}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "8px",
            justifyContent: "center",
            margin: "30px auto",
            maxWidth: 650
          }}
        >
          {shuffled.map(poke => (
            <img
              key={poke.name}
              src={poke.img}
              alt={poke.name}
              style={{
                width: 120,
                height: 120,
                objectFit: "contain",
                cursor: found.includes(poke.name) ? "not-allowed" : "pointer",
                opacity: found.includes(poke.name) ? 0.3 : 1,
                border: found.includes(poke.name) ? "4px solid #3b4cca" : "4px solid #eee",
                borderRadius: 14,
                background: "#fff",
                boxShadow: "0 2px 8px #eee",
                transition: "transform 0.1s",
              }}
              onClick={() => handleClick(poke)}
              onMouseOver={e => { if (!found.includes(poke.name)) e.currentTarget.style.transform = "scale(1.08)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          ))}
        </div>
        {error && <div style={{ color: "red", marginTop: 15, fontWeight: "bold", fontSize: 18 }}>{error}</div>}
        <div style={{ marginTop: 20, fontSize: 22, color: "#3b4cca", fontWeight: "bold" }}>
          {found.length === targets.length
            ? "Great job! Moving to the next game..."
            : `Found ${found.length} of ${targets.length}`}
        </div>
        <button
          style={{
            marginTop: 24,
            fontSize: "1rem",
            padding: "8px 22px",
            background: "linear-gradient(90deg, #ffcb05 60%, #3b4cca 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontWeight: "bold",
            fontFamily: "'Baloo 2', 'Comic Sans MS', 'Arial Rounded MT Bold', Arial, sans-serif",
            boxShadow: "0 2px 8px #3b4cca33",
            cursor: "pointer",
            transition: "transform 0.1s, box-shadow 0.1s"
          }}
          onClick={() => navigate("/invite")}
        >
          Skip
        </button>
      </div>
    </div>
  );
}