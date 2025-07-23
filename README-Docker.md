# DevAI Tools - Docker Deployment

A lightweight, developer-focused frontend web application for AI text and image generation.

## Features

- **Text Chat**: Interactive chat interface for AI-powered text generation
- **Image Generation**: Create AI images from text prompts
- **Lightweight**: No heavy UI frameworks, custom CSS only
- **Responsive**: Mobile-friendly design
- **Docker Ready**: Optimized for containerized deployment

## Quick Start

### Using Docker

```bash
# Build and start the application
docker-compose up --build

# Access the app at http://localhost
```

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access the app at http://localhost:8080
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## API Integration

The app is configured to work with these placeholder endpoints that you can replace with your actual AI service URLs:

### Text Generation
```bash
# Replace https://api.example.com/text with your actual endpoint
POST https://api.example.com/text
Content-Type: application/json
{
  "message": "Your text prompt here"
}

Response:
{
  "response": "Generated text response"
}
```

### Image Generation
```bash
# Replace https://api.example.com/image with your actual endpoint
POST https://api.example.com/image
Content-Type: application/json
{
  "prompt": "Your image prompt here"
}

Response:
{
  "image_url": "https://your-generated-image-url.com/image.jpg"
}
```

## Customization

### Update API URLs

Replace the placeholder URLs in these files with your actual API endpoints:

- **Text API**: `src/pages/TextChatPage.tsx` (line 33)
- **Image API**: `src/pages/ImageGenPage.tsx` (line 21)

### Example API Services

You can integrate with services like:
- OpenAI GPT API for text generation
- DALL-E, Midjourney, or Stable Diffusion for images
- Your own custom AI backends

## Architecture

```
┌─────────────────┐
│   Frontend      │
│   (React/TS)    │
│   Port 80       │
└─────────────────┘
         │
         ▼
┌─────────────────┐
│   NGINX         │
│   Static Files  │
└─────────────────┘
```

## Production Optimizations

- **Multi-stage build**: Reduces final image size
- **NGINX**: Efficient static file serving
- **Gzip compression**: Reduces bandwidth usage
- **Caching headers**: Improves performance
- **Security headers**: Basic security hardening

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Routing**: React Router v6
- **Styling**: Custom CSS (no frameworks)
- **Build**: Vite (fast builds)
- **Server**: NGINX (production)
- **Container**: Alpine Linux (lightweight)

## File Structure

```
src/
├── components/
│   └── Navigation.tsx      # App navigation
├── pages/
│   ├── Index.tsx          # Landing page
│   ├── TextChatPage.tsx   # Text chat interface
│   ├── ImageGenPage.tsx   # Image generation
│   └── NotFound.tsx       # 404 page
├── index.css              # Custom CSS styles
└── App.tsx                # Main app component

Docker files:
├── Dockerfile             # Multi-stage build
├── docker-compose.yml     # Frontend only setup
├── nginx.conf            # NGINX configuration
└── .dockerignore         # Build optimization
```

## Deployment

### Production Deployment

1. Configure your API URLs in the frontend code
2. Build and deploy the Docker container
3. Configure your AI backend services separately

### Cloud Deployment Examples

**Docker Hub + VPS:**
```bash
docker build -t username/devai-tools .
docker push username/devai-tools
# Deploy on your VPS
```

**Cloud Platforms:**
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

## License

MIT License - feel free to use and modify as needed.