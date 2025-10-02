from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import datetime
import traceback
import os

from sheets_util import append_rsvp_to_sheet

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://lockthedate-skyeinvite.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print("CORS configured for: https://lockthedate-skyeinvite.onrender.com")

# Serve React build as static files
app.mount("/static", StaticFiles(directory="build/static"), name="static")

@app.get("/")
def serve_index():
    return FileResponse("build/index.html")

@app.get("/{full_path:path}")
def serve_react_app(full_path: str):
    # Serve index.html for any non-API route (for React Router)
    if not full_path.startswith("api/"):
        return FileResponse("build/index.html")
    raise HTTPException(status_code=404, detail="Not found")

class RSVP(BaseModel):
    attending: str
    childName: str = ""
    parentName: str = ""
    email: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/api/rsvp")
async def rsvp(rsvp: RSVP, request: Request):
    print("Received RSVP:", rsvp.dict())
    try:
        append_rsvp_to_sheet(rsvp)
    except Exception as e:
        print("Error appending to Google Sheet:", repr(e))
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Could not save RSVP to Google Sheet.")
    print("RSVP successfully saved to Google Sheet.")
    return {"success": True, "message": "RSVP received!"}