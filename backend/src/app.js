// Import Express framework
import express from "express";
// Import the AI routes
import aiRoutes from "./routes/ai.route.js";
import cors from "cors";

// Create Express application instance
const app = express();

// Mount AI routes under /api/ai path
// This creates endpoints like: /api/ai/get-review
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use("/api/ai", aiRoutes);

// Export the app instance for use in server.js
export default app;
