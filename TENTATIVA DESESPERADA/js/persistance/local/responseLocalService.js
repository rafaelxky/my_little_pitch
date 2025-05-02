console.log("responseLocalService");

 export class ResponseLocalService {
  constructor() {
    // Initialize responses in localStorage if they don't exist
    if (!localStorage.getItem('responsesInitialized')) {
      localStorage.setItem('responsesInitialized', 'true'); // Mark initialization
    }
  }

  // Add a new response
  add(response) {
    const responseKey = `response_${response.id}`;  // Use response ID as the key
    if (localStorage.getItem(responseKey)) {
      console.log(`Response with ID ${response.id} already exists.`);
      return false; // Response already exists
    }
    // Store response data as a string (no parsing involved)
    localStorage.setItem(responseKey, `UserID: ${response.userId}, RFPID: ${response.rfpId}, Answer: ${response.answer}`);
    console.log(`Response with ID ${response.id} added successfully.`);
    return true;
  }

  // Get a response by ID
  get(id) {
    const responseKey = `response_${id}`;
    const response = localStorage.getItem(responseKey);  // Retrieve as a string
    return response ? response : null;  // Return response details or null if not found
  }

  // Update a response by ID
  update(id, updatedResponse) {
    const responseKey = `response_${id}`;
    if (!localStorage.getItem(responseKey)) {
      console.log(`Response with ID ${id} does not exist.`);
      return false;
    }
    // Update response data as a string (no parsing involved)
    localStorage.setItem(responseKey, `UserID: ${updatedResponse.userId}, RFPID: ${updatedResponse.rfpId}, Answer: ${updatedResponse.answer}`);
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
    console.log(`Response with ID ${id} deleted successfully.`);
    return true;
  }

  // List all responses (based on localStorage keys)
  list() {
    let responses = [];
    // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("response_")) { // Check for response keys
        responses.push(localStorage.getItem(key));  // Store response data as strings
      }
    }
    return responses;  // Return array of response details as strings
  }
}

// Example usage:
console.log("Starting tests");
const responseServiceInstance = new ResponseLocalService();

// Add a response
console.log("Add response");
const response = { id: '1', userId: '1', rfpId: '1', answer: 'This is my response to the RFP.' };
responseServiceInstance.add(response);

// Get the list of responses
console.log("Get list of responses");
const responsesList = responseServiceInstance.list();
console.log("Response list: ", responsesList);

// Get a specific response by ID
console.log("Get response by ID");
const specificResponse = responseServiceInstance.get('1');
console.log("Response with ID 1: ", specificResponse);

// Update the response
console.log("Update response");
const updatedResponse = { id: '1', userId: '1', rfpId: '1', answer: 'This is my updated response to the RFP.' };
responseServiceInstance.update('1', updatedResponse);

// Delete the response
console.log("Delete response");
responseServiceInstance.delete('1');
