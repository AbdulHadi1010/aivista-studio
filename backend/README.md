# FastAPI Backend

A simple FastAPI backend service that provides AI-like endpoints for the frontend application.

## Endpoints

### POST /api/text
- **Input**: `{ "message": "your text here" }`
- **Output**: `{ "response": "AI-generated response" }`
- **Description**: Returns a dummy text response based on the input message

### POST /api/image  
- **Input**: `{ "prompt": "your image prompt" }`
- **Output**: `{ "image_url": "https://..." }`
- **Description**: Returns a placeholder image URL based on the prompt

### GET /
- **Output**: `{ "message": "AI Backend API is running" }`
- **Description**: Health check endpoint

## Development

### Local Development
```bash
cd backend
pip install -r requirements.txt
python main.py
```

The server will start on http://localhost:3001

### Docker Development
```bash
# Build the image
docker build -t ai-backend .

# Run the container
docker run -p 3001:3001 ai-backend
```

### Docker Compose
The backend is configured to work with the frontend in docker-compose.yml:

```bash
# Start both frontend and backend
docker-compose up --build
```

## Features

- **FastAPI**: Modern, fast web framework for Python
- **CORS enabled**: Allows frontend to make requests
- **Pydantic models**: Type validation for requests/responses
- **Health checks**: Docker health monitoring
- **Dummy responses**: Realistic placeholder responses for development
- **Random image URLs**: Uses various placeholder image services

## Production Notes

- In production, replace placeholder responses with actual AI model integration
- Update CORS origins to specific domains instead of allowing all
- Add authentication and rate limiting as needed
- Consider adding logging and monitoring