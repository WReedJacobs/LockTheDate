from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import datetime
import traceback

from sheets_util import append_rsvp_to_sheet

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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