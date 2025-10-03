import React from "react";

function PokeballFrame({ children }) {
  return (
    <div style={{
      position: "relative",
      width: 520,
      height: 520,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <img
        src="/pokeball2.png"
        alt="Pokeball"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 520,
          height: 520,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none"
        }}
      />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 520,
        height: 520,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        pointerEvents: "auto"
      }}>
        {children}
      </div>
    </div>
  );
}

export default function InviteRSVP() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <PokeballFrame>
        <div style={{
          width: 340,
          minHeight: 260,
          background: "rgba(255,255,255,0.96)",
          borderRadius: 28,
          boxShadow: "0 2px 16px #2222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          padding: 32,
          textAlign: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)"
        }}>
          <div style={{
            fontSize: 36,
            color: "#ffcb05",
            fontWeight: "bold",
            marginBottom: 14,
            textShadow: "2px 2px 10px #3b4cca"
          }}>
            Congratulations!
          </div>
          <div style={{
            fontSize: 28,
            color: "#3b4cca",
            fontWeight: "bold",
            textShadow: "2px 2px 10px #fff"
          }}>
            You just caught a Pokémon birthday invite at the Bike Park!
          </div>
          <div style={{
            fontSize: 22,
            color: "#222",
            marginTop: 16,
            fontWeight: "bold",
            textShadow: "1px 1px 8px #fff"
          }}>
            <span style={{ color: "#3b4cca" }}>Pokémon Bike Park Party 🚲</span><br />
            <span style={{ color: "#ff1c1c" }}>For: <b>Skye</b></span><br />
            <span style={{ color: "#3b4cca" }}>When: <b>Wednesday, 3rd December, 12:00–2:00 PM</b></span><br />
            <span style={{ color: "#3b4cca" }}>Where: <b>Constantia Uitsig Bike Park</b></span><br />
            <span style={{ color: "#ffcb05" }}>Theme: <b>Pokémon & Bikes!</b></span>
          </div>
          <div style={{
            fontSize: 20,
            color: "#3b4cca",
            marginTop: 18,
            fontWeight: "bold"
          }}>
            Bring your bike, helmet, and your best Pokémon spirit for a day of riding, games, and adventure!
          </div>
          <a
            href="https://wa.me/27725455251?text=Hi%20Lindsay%2C%20I%20would%20like%20to%20RSVP%20for%20Skye%27s%20Pokemon%20Bike%20Park%20Party!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 32,
              padding: "16px 36px",
              background: "linear-gradient(90deg, #25D366 60%, #128C7E 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 16,
              fontWeight: "bold",
              fontSize: "1.3rem",
              fontFamily: "'Baloo 2', 'Comic Sans MS', 'Arial Rounded MT Bold', Arial, sans-serif",
              boxShadow: "0 2px 8px #128C7E33",
              cursor: "pointer",
              textDecoration: "none",
              transition: "transform 0.1s, box-shadow 0.1s"
            }}
          >
            RSVP via WhatsApp: Lindsay (+27 72 545 5251)
          </a>
        </div>
      </PokeballFrame>
      <div style={{ marginTop: 32, color: "#3b4cca", fontWeight: "bold", fontSize: 18 }}>
        Contact: Lindsay on <a href="tel:+27725455251" style={{ color: "#128C7E", textDecoration: "underline" }}>+27 72 545 5251</a>
      </div>
    </div>
  );
}