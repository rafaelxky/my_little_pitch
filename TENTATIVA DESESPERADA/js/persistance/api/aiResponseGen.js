export class AiResponsesGenerateService {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:8080/api/ai';
  }

  /**
   * Generates an AI response for a given RFP ID by calling the backend API.
   * Assumes the API returns a plain text string.
   *
   * @param {number|string} id - The ID of the RFP to generate a response for.
   * @returns {Promise<string|null>} The generated AI response string or null on error.
   */
  async generateResponseByRfpId(id) {
    console.log("Generating AI response for RFP ID:", id);

    try {
      const res = await fetch(`${this.baseUrl}/rfp/${id}/generateResponse2`, {
        method: "POST"
      });

      if (!res.ok) {
        throw new Error(`Failed to generate response for RFP ${id}`);
      }

      const responseText = await res.text(); // Expect plain string from server
      console.log("AI Response String:", responseText);
      return responseText;

    } catch (err) {
      console.error(`Generate Response Error (RFP ID: ${id}):`, err);
      return null;
    }
  }
}
