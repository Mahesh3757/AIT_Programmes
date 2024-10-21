// datetime.js

// Function to get current date and time
function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toISOString(); // Convert to ISO string format
  }
  
  // Export the function to make it accessible to other modules
  module.exports = getCurrentDateTime;
  