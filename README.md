# AgriPrecision AI - Deployment Guide

This project is a high-performance decision support system for sustainable agriculture, built with Vite, React, TypeScript, and Node.js.

## Local Development
1. Install dependencies: `npm install`
2. Start the backend: `node server/index.cjs`
3. Start the frontend: `npm run dev`

## Deployment Options

### 1. Docker Deployment (Recommended for Full Stack)
The project includes a `Dockerfile` that packages both the frontend and the backend into a single container.

```bash
# Build the image
docker build -t agriprecision-ai .

# Run the container
docker run -p 5001:5001 agriprecision-ai
```
The app will be available at `http://localhost:5001`.

### 2. Vercel / Netlify (Frontend Only)
To deploy the frontend to Vercel:
1. Connect your GitHub repository to Vercel.
2. Set the **Build Command** to `npm run build`.
3. Set the **Output Directory** to `dist`.
4. *Note: You will need to deploy the backend separately (e.g., on Render or Railway) and update the API URLs in the frontend.*

### 3. Manual Server Deployment
1. Build the project: `npm run build`
2. Install production dependencies: `npm install --only=production`
3. Start the server: `node server/index.cjs`

---
© 2026 AgriPrecision.ai - Engineered for global food security.
