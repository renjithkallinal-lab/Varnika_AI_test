from fastapi import FastAPI
from pydantic import BaseModel
from diffusers import StableDiffusionPipeline
import torch
from io import BytesIO
import base64

app = FastAPI()

print("🔄 Loading lightweight Stable Diffusion model...")
pipe = StableDiffusionPipeline.from_pretrained(
    "lambdalabs/sd-mini",
    torch_dtype=torch.float32
).to("cpu")
print("✅ Model loaded successfully (using CPU)")

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def home():
    return {"message": "Varnika AI backend running (light test model)"}

@app.post("/generate")
def generate(req: PromptRequest):
    image = pipe(req.prompt).images[0]
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    img_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return {"image_base64": img_base64}
