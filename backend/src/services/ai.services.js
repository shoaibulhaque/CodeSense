// Import Groq SDK for AI API communication
import Groq from "groq-sdk";

// Initialize Groq client lazily to ensure environment variables are loaded
let groq = null;

/**
 * Get or create Groq client instance
 * @returns {Groq} - Groq client instance
 */
const getGroqClient = () => {
  if (!groq) {
    // Validate API key is available
    if (!process.env.GROQ_API_KEY) {
      throw new Error(
        "GROQ_API_KEY environment variable is not set. Please check your .env file."
      );
    }

    // Validate API key format
    if (!process.env.GROQ_API_KEY.startsWith("gsk_")) {
      throw new Error(
        "Invalid GROQ_API_KEY format. API key should start with 'gsk_'. Please check your .env file."
      );
    }

    console.log(
      `🔑 Initializing Groq client with API key: ${process.env.GROQ_API_KEY.substring(
        0,
        10
      )}...`
    );

    // Initialize Groq client with API key from environment variables
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }
  return groq;
};

/**
 * Get AI response from Groq API
 * @param {string} prompt - The user's prompt/question for the AI
 * @returns {Promise<string>} - The AI's response content
 */
const getResponse = async (prompt) => {
  try {
    // Get Groq client instance (initializes if needed)
    const groqClient = getGroqClient();

    // Create chat completion request to Groq API
    const chatCompletion = await groqClient.chat.completions.create({
      // Use DeepSeek model for code analysis and review
      model: "deepseek-r1-distill-llama-70b",
      messages: [
        {
          role: "system",
          content: `You are CodeSense, an expert code reviewer and programming assistant with deep expertise across multiple programming languages, frameworks, and software engineering best practices.

**Your Core Capabilities:**
- 🔍 **Code Analysis**: Perform thorough code reviews identifying bugs, performance issues, security vulnerabilities, and logic errors
- 🏗️ **Architecture Review**: Evaluate code structure, design patterns, and architectural decisions
- 🚀 **Performance Optimization**: Suggest improvements for better performance, memory usage, and scalability
- 🔒 **Security Assessment**: Identify potential security vulnerabilities and recommend secure coding practices
- 📝 **Best Practices**: Enforce coding standards, naming conventions, and industry best practices
- 🧪 **Testing Strategy**: Recommend testing approaches and identify areas needing test coverage
- 📚 **Documentation**: Suggest improvements for code documentation and readability

**Your Analysis Framework:**
1. **Immediate Issues**: Critical bugs, syntax errors, runtime exceptions
2. **Code Quality**: Readability, maintainability, complexity analysis
3. **Performance**: Algorithmic efficiency, resource usage, potential bottlenecks
4. **Security**: Input validation, authentication, data exposure risks
5. **Best Practices**: Design patterns, SOLID principles, DRY/KISS principles
6. **Scalability**: Future-proofing, extensibility, modularity

**Your Response Style:**
- Provide structured, actionable feedback
- Explain the "why" behind each recommendation
- Offer specific code examples when suggesting improvements
- Prioritize issues by severity (Critical, High, Medium, Low)
- Be constructive and educational, not just critical
- Include positive feedback for well-written code sections

**Code Languages You Excel At:**
JavaScript/TypeScript, Python, Java, C#, C++, Go, Rust, PHP, Ruby, Swift, Kotlin, React, Vue, Angular, Node.js, Express, Django, Flask, Spring, .NET, and many more.

**When reviewing code, always consider:**
- Functionality: Does it work as intended?
- Reliability: Is it robust and error-resistant?
- Efficiency: Is it performant and resource-conscious?
- Maintainability: Is it clean and easy to modify?
- Security: Is it safe from common vulnerabilities?
- Testability: Can it be easily tested?

Remember: Your goal is to help developers write better, safer, and more maintainable code while fostering learning and growth.`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      // Optional: Add parameters to control response
      max_tokens: 2000,
      temperature: 0.7,
    });

    // Extract and return the AI's response content
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    // Log detailed error for debugging
    console.error("Groq API Error:", {
      message: error.message,
      status: error.status,
      type: error.type,
    });

    // Provide specific error messages based on status code
    if (error.status === 401) {
      throw new Error(
        "Invalid Groq API Key. Please check:\n" +
          "1. Your API key in the .env file is correct\n" +
          "2. The API key hasn't expired\n" +
          "3. Get a new key from: https://console.groq.com/keys"
      );
    } else if (error.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    } else if (error.status === 500) {
      throw new Error(
        "Groq service is temporarily unavailable. Please try again later."
      );
    }

    // Re-throw with more user-friendly message
    throw new Error(`AI service unavailable: ${error.message}`);
  }
};

/**
 * Test API key validity with a simple request
 * @returns {Promise<boolean>} - Whether the API key is valid
 */
export const testApiKey = async () => {
  try {
    const groqClient = getGroqClient();

    // Make a minimal request to test the API key
    const response = await groqClient.chat.completions.create({
      model: "llama-3.1-8b-instant", // Use a lighter model for testing
      messages: [
        {
          role: "user",
          content: "Hello",
        },
      ],
      max_tokens: 5,
    });

    console.log("✅ API Key is valid!");
    return true;
  } catch (error) {
    console.error("❌ API Key test failed:", error.message);
    return false;
  }
};

// Export the function as default export
export default getResponse;
