var API_URL; // Cache the API URL for the Gemini API.

/**
 * Retrieves the API URL for the Gemini API.
 *
 * @return {string} - The API URL for the Gemini API.
 */
function getApiUrl() {
  return API_URL || (API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-001:generateContent?key=" + GEMINI.getApiKey());
} 