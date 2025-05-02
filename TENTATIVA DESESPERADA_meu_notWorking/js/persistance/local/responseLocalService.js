export class ResponseLocalService {
  constructor() {
    // Initialize responses in localStorage if they don't exist
    if (!localStorage.getItem('responsesInitialized')) {
      localStorage.setItem('responsesInitialized', 'true'); // Mark initialization
    }
  }

  // Add a new response
  add(response) {
    response.id = Date.now().toString(); // Generate a simple unique ID
    const responseKey = `response_${response.id}`;

    if (localStorage.getItem(responseKey)) {
      console.log(`Response with ID ${response.id} already exists.`);
      return false;
    }

    // Save the response as a JSON string
    localStorage.setItem(responseKey, JSON.stringify(response));

    // Update master ID list
    const allIds = localStorage.getItem('response_ids') ? localStorage.getItem('response_ids').split(',') : [];
    allIds.push(response.id);
    localStorage.setItem('response_ids', allIds.join(','));

    console.log(`Response with ID ${response.id} added successfully.`);
    return true;
  }

  // Get a response by ID
  get(id) {
    const responseKey = `response_${id}`;
    const response = localStorage.getItem(responseKey);  // Retrieve as a string

    // Convert the response from string back to JSON object
    if (response) {
      return JSON.parse(response);  // Now it's an object
    }

    console.log("Response not found.");
    return null;  // Return null if not found
  }

  // Update a response by ID
  update(id, updatedResponse) {
    updatedResponse.id = id;
    console.log("updating: ", updatedResponse)
    console.log("updating id: " + id);
    const responseKey = `response_${id}`;
    if (!localStorage.getItem(responseKey)) {
      console.log(`Response with ID ${id} does not exist.`);
      return false;
    }

    // Update response data as JSON
    localStorage.setItem(responseKey, JSON.stringify(updatedResponse));

    console.log(`Response with ID ${id} updated successfully.`);
    return true;
  }

  // Delete a response by ID
  delete(id) {
    const responseKey = `response_${id}`;
    if (!localStorage.getItem(responseKey)) {
      console.log(`Response with ID ${id} does not exist.`);
      return false;
    }

    // Remove response from localStorage
    localStorage.removeItem(responseKey);

    // Remove ID from the master list
    let allIds = localStorage.getItem('response_ids') ? localStorage.getItem('response_ids').split(',') : [];
    allIds = allIds.filter(responseId => responseId !== id);
    localStorage.setItem('response_ids', allIds.join(','));

    console.log(`Response with ID ${id} deleted successfully.`);
    return true;
  }

  // List all responses (based on localStorage keys)
  list() {
    console.log("Listing projects");
    let responses = [];

    // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Get the current key
      console.log("list id: " + i + " - data - " + key);

      if (key && key.startsWith("response_") && key !== "response_ids") {  // Check for response keys
        const response = localStorage.getItem(key);  // Get the response data as a string
        console.log("response: ", response)
        console.log("response key: ", key)
        responses.push(JSON.parse(response));  // Parse the string into an object and add to the list
      }
    }

    console.log("Returning responses: ", responses);
    return responses;  // Return array of objects
  }
}
