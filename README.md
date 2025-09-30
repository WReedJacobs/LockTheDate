# Pokémon Birthday Party Invite

A private, Pokémon-themed online birthday invite for a 5-year-old's party.  
- Play two games to unlock the invite and RSVP form.
- RSVP data is saved to a Google Sheet.
- Python (FastAPI) backend, React frontend, deployable on Render.

## Structure

- `backend/` — FastAPI app, Google Sheets integration, API endpoints
- `frontend/` — React app, Pokémon theme, game pages, invite, RSVP form

## Setup

1. Deploy `backend/` as a Python web service on Render.
2. Deploy `frontend/` as a static site (or serve via backend).
3. Configure Google Sheets API credentials in `backend/`.

## Features

- Pokémon landing page
- Game 1: Pokémon Quiz (multiple choice)
- Game 2: Catch the Pikachu (simple click game)
- Invite page with RSVP form (name, number attending, dietary notes)
- RSVP POSTs to backend, which saves to Google Sheet
- Only users who pass both games can RSVP

## Private use only. All Pokémon assets are for personal, non-commercial use.