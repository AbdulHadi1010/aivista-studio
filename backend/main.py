from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI(title="AI Backend API", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    message: str

class TextResponse(BaseModel):
    response: str

class ImageRequest(BaseModel):
    prompt: str

class ImageResponse(BaseModel):
    image_url: str

@app.get("/")
async def root():
    return {"message": "AI Backend API is running"}

@app.post("/api/text", response_model=TextResponse)
async def generate_text(request: TextRequest):
    """Generate dummy text response based on the input message."""
    
    # Simple dummy responses based on message content
    responses = [
        f"That's an interesting point about '{request.message}'. Let me elaborate on that concept.",
        f"I understand you're asking about '{request.message}'. Here's my perspective on this topic.",
        f"Regarding '{request.message}', I think there are several important aspects to consider.",
        f"Your message about '{request.message}' reminds me of similar concepts in AI and technology.",
        f"Thank you for sharing '{request.message}'. This is a fascinating area to explore further."
    ]
    
    # Select a random response
    dummy_response = random.choice(responses)
    
    return TextResponse(response=dummy_response)

@app.post("/api/image", response_model=ImageResponse)
async def generate_image(request: ImageRequest):
    """Generate a placeholder image URL based on the prompt."""
    
    # Generate a random placeholder image with dimensions and colors
    width = random.choice([512, 768, 1024])
    height = random.choice([512, 768, 1024])
    
    # Use picsum for random nature/landscape images or placeholder service
    image_services = [
        f"https://picsum.photos/{width}/{height}?random={random.randint(1, 1000)}",
        f"https://via.placeholder.com/{width}x{height}/4338ca/ffffff?text=AI+Generated+Image",
        f"https://dummyimage.com/{width}x{height}/6366f1/ffffff.png&text={request.prompt[:20].replace(' ', '+')}"
    ]
    
    image_url = random.choice(image_services)
    
    return ImageResponse(image_url=image_url)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)