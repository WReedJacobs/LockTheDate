import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PIKA_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png";

export default function Game2() {
  const [caught, setCaught] = useState(false);
  const [pos, setPos] = useState({ top: 100, left: 100 });
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  // Container and image size
  const boxW = 400, boxH = 320, imgW = 120, imgH = 120;

  // Move Pikachu every 0.5–1.2 seconds
  useEffect(() => {
    if (!caught) {
      function movePikachu() {
        const top = Math.random() * (boxH - imgH - 10) + 10;
        const left = Math.random() * (boxW - imgW - 10) + 10;
        setPos({ top, left });
      }
      movePikachu();
      intervalRef.current = setInterval(movePikachu, Math.random() * 700 + 500);
      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
      setTimeout(() => navigate("/invite"), 1200);
    }
  }, [caught, navigate]);

  function handleCatch() {
    setCaught(true);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #30a7d7 0%, #fff 100%)",
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
        boxShadow: "0 8px 32px #30a7d755",
        padding: "36px 24px 32px 24px",
        maxWidth: 520,
        width: "95%",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <img
          src={PIKA_IMG}
          alt="Pikachu"
          style={{ width: 90, marginBottom: 10, filter: "drop-shadow(0 4px 12px #ffcb05aa)" }}
        />
        <h2 style={{
          color: "#3b4cca",
          fontWeight: "bold",
          fontSize: "2.2rem",
          fontFamily: "'Baloo 2', 'Comic Sans MS', 'Arial Rounded MT Bold', Arial, sans-serif"
        }}>
          Game 2: <span style={{ color: "#ffcb05" }}>Catch the Pikachu!</span>
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#222", fontWeight: "bold" }}>Click Pikachu as he moves!</p>
        <div
          style={{
            position: "relative",
            width: boxW,
            height: boxH,
            margin: "0 auto",
            background: "#f7f7f7",
            borderRadius: 20,
            border: "2px solid #eee",
            overflow: "hidden",
            marginTop: 24
          }}
        >
          {!caught ? (
            <img
              src={PIKA_IMG}
              alt="Pikachu"
              style={{
                width: imgW,
                height: imgH,
                position: "absolute",
                top: pos.top,
                left: pos.left,
                cursor: "pointer",
                transition: "top 0.2s, left 0.2s"
              }}
              onClick={handleCatch}
            />
          ) : (
            <div style={{ position: "absolute", top: boxH / 2 - imgH / 2, left: boxW / 2 - imgW / 2 }}>
              <img src={PIKA_IMG} alt="Pikachu" style={{ width: imgW, filter: "grayscale(80%)" }} />
              <div style={{ color: "#ffcb05", fontWeight: "bold", marginTop: 20, fontSize: 22 }}>
                You caught Pikachu! 🎉
              </div>
            </div>
          )}
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