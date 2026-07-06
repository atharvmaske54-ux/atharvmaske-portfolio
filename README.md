# Atharv Maske - Portfolio

This repository contains the complete source code for Atharv Maske's personal portfolio. 
The project is split into two main parts: the interactive frontend website and a robust REST API backend.

## Project Structure

- **`/frontend`**: Contains the HTML, CSS, and vanilla JS for the portfolio website. Features glassmorphism UI, interactive scroll animations, and dynamic project pages.
- **`/backend`**: Contains the Node.js/Express backend that manages contact form submissions, projects, skills, experience, and education, securely connected to MongoDB Atlas.

## Getting Started

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` variables (MongoDB URI, JWT secret, etc.).
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Open `index.html` in your browser, or run a local server:
   ```bash
   npx serve -p 5173
   ```
