from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uuid, os
from.modelscope_generate import generate_text_to_video
from.utils import upload_to_firebase

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

class Payload(BaseModel):
    prompt: str
    style: str = 'cinematic'
    duration: int = 3

@app.post('/generate')
async def generate(p: Payload):
    out_file = f"outputs/{uuid.uuid4()}.mp4"
    os.makedirs('outputs', exist_ok=True)
    # Blocking call for simplicity; in production move generation to background worker
    generate_text_to_video(p.prompt, out_file, duration=p.duration, style=p.style)
    public_url = upload_to_firebase(out_file)
    return {"video_url": public_url}
