# DevAI Tools - Docker Deployment

A lightweight, developer-focused frontend web application for AI text and image generation.

## Features

- **Text Chat**: Interactive chat interface for AI-powered text generation
- **Image Generation**: Create AI images from text prompts
- **Lightweight**: No heavy UI frameworks, custom CSS only
- **Responsive**: Mobile-friendly design
- **Docker Ready**: Optimized for containerized deployment

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up --build

# Access the app at http://localhost
```

### Using Docker Only

```bash
# Build the image
docker build -t devai-tools .

# Run the container
docker run -p 80:80 devai-tools

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

## Backend Integration

The app expects backend endpoints at:

- `POST /api/text` - Text generation
  ```json
  Request: { "message": "string" }
  Response: { "response": "string" }
  ```

- `POST /api/image` - Image generation
  ```json
  Request: { "prompt": "string" }
  Response: { "image_url": "string" }
  ```

### Configuring Backend

1. Update `nginx.conf` proxy_pass URL to point to your backend
2. Modify `docker-compose.yml` backend service configuration
3. Ensure backend serves on the expected endpoints

## Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React/TS)    │────│   (Your API)    │
│   Port 80       │    │   Port 3001     │
└─────────────────┘    └─────────────────┘
        │
        ▼
┌─────────────────┐
│   NGINX         │
│   Static Files  │
│   Proxy /api/*  │
└─────────────────┘
```

## Production Optimizations

- **Multi-stage build**: Reduces final image size
- **NGINX**: Efficient static file serving
- **Gzip compression**: Reduces bandwidth usage
- **Caching headers**: Improves performance
- **Security headers**: Basic security hardening
- **Health checks**: Container monitoring support

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
├── docker-compose.yml     # Full stack setup
├── nginx.conf            # NGINX configuration
└── .dockerignore         # Build optimization
```

## Customization

### Styling
All styles are in `src/index.css` using CSS custom properties for easy theming.

### Adding Features
- Add new pages in `src/pages/`
- Update routing in `src/App.tsx`
- Add navigation links in `src/components/Navigation.tsx`

### Backend Integration
- Modify API endpoints in page components
- Update proxy configuration in `nginx.conf`
- Configure CORS if needed

## Deployment

### Production Deployment

1. Configure your backend URLs
2. Build and push Docker image
3. Deploy using your preferred container orchestration

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