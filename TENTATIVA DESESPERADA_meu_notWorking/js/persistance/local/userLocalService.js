console.log("userLocalService");



export class UserLocalService {
  constructor() {
    // Initialize users in localStorage if they don't exist
    if (!localStorage.getItem('usersInitialized')) {
      localStorage.setItem('usersInitialized', 'true'); // Mark initialization
    }
  }

  // Add a new user
  add(user) {
    const userKey = `user_${user.id}`;  // Use user ID as the key
    if (localStorage.getItem(userKey)) {
      console.log(`User with ID ${user.id} already exists.`);
      return false; // User already exists
    }
    // Store user data as a string (no parsing involved)
    localStorage.setItem(userKey, `Name: ${user.name}, Email: ${user.email}, Cargo: ${user.cargo}`);
    console.log(`User with ID ${user.id} added successfully.`);
    return true;
  }

  // Get a user by ID
  get(id) {
    const userKey = `user_${id}`;
    const user = localStorage.getItem(userKey);  // Retrieve as a string
    return user ? user : null;  // Return user details or null if not found
  }

  // Update a user by ID
  update(id, updatedUser) {
    const userKey = `user_${id}`;
    if (!localStorage.getItem(userKey)) {
      console.log(`User with ID ${id} does not exist.`);
      return false;
    }
    // Update user data as a string (no parsing involved)
    localStorage.setItem(userKey, `Name: ${updatedUser.name}, Email: ${updatedUser.email}, Cargo: ${updatedUser.cargo}`);
    console.log(`User with ID ${id} updated successfully.`);
    return true;
  }

  // Delete a user by ID
  delete(id) {
    const userKey = `user_${id}`;
    if (!localStorage.getItem(userKey)) {
      console.log(`User with ID ${id} does not exist.`);
      return false;
    }
    // Remove user from localStorage
    localStorage.removeItem(userKey);
    console.log(`User with ID ${id} deleted successfully.`);
    return true;
  }

  // List all users (based on localStorage keys)
  list() {
    let users = [];
    // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("user_")) { // Check for user keys
        users.push(localStorage.getItem(key));  // Store user data as strings
      }
    }
    return users;  // Return array of user details as strings
  }
}

/*
// Example usage:
console.log("Starting tests");
const userService = new UserLocalService();

// Add a user
console.log("Add user");
const user = { id: '1', name: 'John Doe', email: 'john@example.com', cargo: 'Developer' };
userService.add(user);

// Get the list of users
console.log("Get list of users");
const usersList = userService.list();
console.log("User list: ", usersList);

// Get a specific user by ID
console.log("Get user by ID");
const specificUser = userService.get('1');
console.log("User with ID 1: ", specificUser);

// Update the user
console.log("Update user");
const updatedUser = { id: '1', name: 'John Doe', email: 'john.doe@example.com', cargo: 'Senior Developer' };
userService.update('1', updatedUser);

// Delete the user
console.log("Delete user");
userService.delete('1');
*/