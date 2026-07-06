# Portfolio Backend

Backend REST API for Atharv Maske's personal portfolio built with Node.js, Express, MongoDB, and Mongoose.

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure `.env`:
   Ensure your `.env` file matches the required variables (PORT, MONGO_URI, JWT_SECRET, etc.).

4. Start the server (development mode):
   ```bash
   npm run dev
   ```

## Connecting with React Frontend

In your React app, you can use `fetch` or `axios` to connect to this API. Ensure your React app runs on the `CLIENT_URL` defined in `.env` (default is `http://localhost:5173`) so CORS allows the requests.

Example:
```javascript
const response = await fetch('http://localhost:5000/api/projects');
const data = await response.json();
console.log(data.data);
```

## Testing with Postman

1. Open Postman.
2. For public routes like GET `/api/projects`, send a request to `http://localhost:5000/api/projects`.
3. To access Admin routes, first POST to `/api/auth/register` to create an admin account, then POST to `/api/auth/login`. 
4. Copy the `token` from the login response.
5. In Postman, go to the **Authorization** tab, select **Bearer Token**, and paste the token to access protected routes (like POST, PUT, DELETE).
