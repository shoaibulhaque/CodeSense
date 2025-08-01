import getResponse from "../services/ai.services.js";

// Controller function to handle AI response requests
export const getAIResponse = async (req, res) => {
  // Extract the prompt from query parameters
  const prompt = req.query.prompt;

  // Validate that prompt is provided
  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required",
      message: "Please provide a 'prompt' query parameter with your request",
    });
  }

  try {
    // Call the AI service to get response from Groq
    const response = await getResponse(prompt);

    // Send successful response with AI-generated content
    res.status(200).json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // Log error for debugging
    console.error("AI Controller Error:", error);

    // Determine status code based on error type
    let statusCode = 500;
    if (
      error.message.includes("Invalid API Key") ||
      error.message.includes("Invalid Groq API Key")
    ) {
      statusCode = 503; // Service Unavailable due to configuration issue
    } else if (error.message.includes("Rate limit")) {
      statusCode = 429; // Too Many Requests
    }

    // Send error response
    res.status(statusCode).json({
      error: "AI service error",
      message: error.message,
      timestamp: new Date().toISOString(),
      ...(process.env.NODE_ENV === "development" && {
        details: "Check server logs for more information",
      }),
    });
  }
};
