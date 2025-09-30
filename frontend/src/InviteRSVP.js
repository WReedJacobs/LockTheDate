import React, { useState } from "react";

export default function InviteRSVP() {
  const [form, setForm] = useState({ name: "", email: "", guests: 1, dietary: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email) {
      setError("Name and email are required.");
      return;
    }
    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError(data.message || "Something went wrong.");
    } catch {
      setError("Could not submit RSVP. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h2 style={{ color: "#3b4cca" }}>RSVP Received!</h2>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu" style={{ width: 120 }} />
        <p style={{ fontSize: "1.2rem", marginTop: 20 }}>
          Thank you for RSVPing! We can't wait to see you at the party!
        </p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2 style={{ color: "#3b4cca" }}>You're Invited!</h2>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu" style={{ width: 120 }} />
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        <b>Pokémon Birthday Party</b><br />
        For: <b>Your Child's Name</b><br />
        When: <b>Saturday, 5 October 2025, 2:00 PM</b><br />
        Where: <b>123 Poké Lane, Cape Town</b><br />
        Theme: <b>Pokémon!</b>
      </p>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto", textAlign: "left" }}>
        <label>Name*<br />
          <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required style={{ width: "100%", marginBottom: 10 }} />
        </label>
        <label>Email*<br />
          <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required style={{ width: "100%", marginBottom: 10 }} />
        </label>
        <label>Number of guests (including you)<br />
          <input type="number" min={1} value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))} style={{ width: "100%", marginBottom: 10 }} />
        </label>
        <label>Dietary notes<br />
          <input value={form.dietary} onChange={e => setForm(f => ({ ...f, dietary: e.target.value }))} style={{ width: "100%", marginBottom: 10 }} />
        </label>
        <button type="submit" style={{ marginTop: 20, padding: "10px 30px", background: "#ffcb05", border: "none", borderRadius: 8, fontWeight: "bold" }}>
          RSVP
        </button>
        {error && <div style={{ color: "red", marginTop: 15 }}>{error}</div>}
      </form>
    </div>
  );
}