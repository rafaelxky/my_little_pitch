console.log("AiResponsesService");

export class AiResponsesService {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:8080/api/response'; // URL for the AI responses API
  }

  // List all responses
  async list() {
    console.log("api response list");
    try {
      const res = await fetch(this.baseUrl);
      if (!res.ok) throw new Error('Failed to fetch responses');
      let resJson = await res.json();
      console.log("res.json: ", resJson);
      return resJson;
    } catch (err) {
      console.error('List Response Error:', err);
      return [];
    }
  }

  // Get a specific response by ID
  async get(id) {
    console.log("api response get");
    try {
      const res = await fetch(`${this.baseUrl}/${id}`);
      if (!res.ok) throw new Error(`Response ${id} not found`);
      return await res.json();
    } catch (err) {
      console.error(`Get Response Error (${id}):`, err);
      return null;
    }
  }

  // Add a new response
  async add(response) {
    console.log("api response add");
    console.log("response api add: ", response);
    try {
      const res = await fetch(`${this.baseUrl}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      });

      if (!res.ok) throw new Error('Failed to add response');
      return await res.json();
    } catch (err) {
      console.error('Add Response Error:', err);
      return null;
    }
  }

  // Update an existing response
  async update(id, response) {
    console.log("updating from AiResponsesService: ", response);
    response.id = id;
    try {
      const res = await fetch(`${this.baseUrl}/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      });

      if (!res.ok) throw new Error('Failed to update response');
      return await res.json();
    } catch (err) {
      console.error('Update Response Error:', err);
      return null;
    }
  }

  // Get all responses for a specific user by user ID
  async getByUserId(userId) {
    console.log("api response getByUserId");
    try {
      const res = await fetch(`${this.baseUrl}/user/${userId}/response`);
      if (!res.ok) throw new Error(`Failed to fetch responses for user ${userId}`);
      return await res.json();
    } catch (err) {
      console.error(`Get Responses by User Error (${userId}):`, err);
      return [];
    }
  }

 
}
