import gspread
from google.oauth2.service_account import Credentials

# Spreadsheet ID and range
SPREADSHEET_ID = "1P7DZe2MwC-tKonsT7__R6mKUpAQ9o7mkzRkUG9TZL_A"
SHEET_NAME = "Sheet1"  # Change if your sheet/tab is named differently

def get_gspread_client():
    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"
    ]
    creds = Credentials.from_service_account_file("service-account.json", scopes=scopes)
    return gspread.authorize(creds)

def append_rsvp_to_sheet(rsvp):
    gc = get_gspread_client()
    sh = gc.open_by_key(SPREADSHEET_ID)
    worksheet = sh.worksheet(SHEET_NAME)
    # Prepare row: [Timestamp, Attending, Child Name, Parent Name, Email]
    import datetime
    row = [
        datetime.datetime.now().isoformat(),
        "Yes" if rsvp.attending == "yes" else "No",
        rsvp.childName,
        rsvp.parentName,
        rsvp.email
    ]
    worksheet.append_row(row)