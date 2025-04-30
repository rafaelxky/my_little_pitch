console.log("rfpLocalService");

export class RfpLocalService {
  constructor() {
    // Initialize rfps in localStorage if they don't exist
    if (!localStorage.getItem('rfpsInitialized')) {
      localStorage.setItem('rfpsInitialized', 'true'); // Mark initialization
    }
  }

  // Add a new RFP
  add(rfp) {
    const rfpKey = `rfp_${rfp.id}`;  // Use RFP ID as the key
    if (localStorage.getItem(rfpKey)) {
      console.log(`RFP with ID ${rfp.id} already exists.`);
      return false; // RFP already exists
    }
    // Store RFP data as a string (no parsing involved)
    localStorage.setItem(rfpKey, `Title: ${rfp.title}, Description: ${rfp.description}, Date: ${rfp.date}`);
    console.log(`RFP with ID ${rfp.id} added successfully.`);
    return true;
  }

  // Get an RFP by ID
  get(id) {
    const rfpKey = `rfp_${id}`;
    const rfp = localStorage.getItem(rfpKey);  // Retrieve as a string
    return rfp ? rfp : null;  // Return RFP details or null if not found
  }

  // Update an RFP by ID
  update(id, updatedRfp) {
    const rfpKey = `rfp_${id}`;
    if (!localStorage.getItem(rfpKey)) {
      console.log(`RFP with ID ${id} does not exist.`);
      return false;
    }
    // Update RFP data as a string (no parsing involved)
    localStorage.setItem(rfpKey, `Title: ${updatedRfp.title}, Description: ${updatedRfp.description}, Date: ${updatedRfp.date}`);
    console.log(`RFP with ID ${id} updated successfully.`);
    return true;
  }

  // Delete an RFP by ID
  delete(id) {
    const rfpKey = `rfp_${id}`;
    if (!localStorage.getItem(rfpKey)) {
      console.log(`RFP with ID ${id} does not exist.`);
      return false;
    }
    // Remove RFP from localStorage
    localStorage.removeItem(rfpKey);
    console.log(`RFP with ID ${id} deleted successfully.`);
    return true;
  }

  // List all RFPs (based on localStorage keys)
  list() {
    let rfps = [];
    // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("rfp_")) { // Check for RFP keys
        rfps.push(localStorage.getItem(key));  // Store RFP data as strings
      }
    }
    return rfps;  // Return array of RFP details as strings
  }
}

// Example usage:
console.log("Starting tests");
const rfpServiceInstance = new RfpLocalService();

// Add an RFP
console.log("Add RFP");
const rfp = { id: '1', title: 'New Project', description: 'Description of the new project', date: '2025-04-30' };
rfpServiceInstance.add(rfp);

// Get the list of RFPs
console.log("Get list of RFPs");
const rfpsList = rfpServiceInstance.list();
console.log("RFP list: ", rfpsList);

// Get a specific RFP by ID
console.log("Get RFP by ID");
const specificRfp = rfpServiceInstance.get('1');
console.log("RFP with ID 1: ", specificRfp);

// Update the RFP
console.log("Update RFP");
const updatedRfp = { id: '1', title: 'Updated Project', description: 'Updated description of the project', date: '2025-05-01' };
rfpServiceInstance.update('1', updatedRfp);

// Delete the RFP
console.log("Delete RFP");
rfpServiceInstance.delete('1');
