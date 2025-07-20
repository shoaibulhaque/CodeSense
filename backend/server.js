// Import the Express app configuration from app.js
import app from "./src/app.js";
// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";

// Load environment variables from .env file into process.env
dotenv.config();

// Define the port number - use environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(
    `📡 AI API endpoint available at http://localhost:${PORT}/api/ai/get-review`
  );
});
