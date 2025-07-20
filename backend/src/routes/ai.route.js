// Import Express router
import express from "express";
// Import the AI controller function (note: named export, so use destructuring)
import { getAIResponse } from "../controllers/ai.controller.js";
// Import the test function
import { testApiKey } from "../services/ai.services.js";

// Create Express router instance
const router = express.Router();

// // Test endpoint to verify API key
// router.get("/test", async (req, res) => {
//   try {
//     const isValid = await testApiKey();
//     res.json({
//       success: isValid,
//       message: isValid ? "API key is valid" : "API key is invalid",
//       timestamp: new Date().toISOString(),
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//       timestamp: new Date().toISOString(),
//     });
//   }
// });

// Define GET route for AI code review
// This endpoint accepts a 'prompt' query parameter and returns AI-generated response
// Example usage: GET /api/ai/get-review?prompt=Review this JavaScript code
router.get("/get-review", getAIResponse);

// Export the router to be used in app.js
export default router;
