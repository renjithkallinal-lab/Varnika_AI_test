import firebase_admin
from firebase_admin import credentials, storage
import os, json
from dotenv import load_dotenv
load_dotenv()

# Attempt to load service account JSON path from env or inline JSON
firebase_key_path = os.getenv('FIREBASE_SERVICE_ACCOUNT_PATH')  # preferable
firebase_bucket = os.getenv('FIREBASE_STORAGE_BUCKET')

if firebase_key_path and os.path.exists(firebase_key_path):
    cred = credentials.Certificate(firebase_key_path)
    firebase_admin.initialize_app(cred, {'storageBucket': firebase_bucket})
else:
    # Alternatively, expect GOOGLE_APPLICATION_CREDENTIALS to be set or ADC available
    firebase_admin.initialize_app()

def upload_to_firebase(local_path: str) -> str:
    bucket = storage.bucket()
    blob = bucket.blob(os.path.basename(local_path))
    blob.upload_from_filename(local_path)
    # For testing convenience make public; for prod use signed URLs
    blob.make_public()
    return blob.public_url
