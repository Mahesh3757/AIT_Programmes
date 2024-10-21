// main.js

// Import the user-defined module
const getCurrentDateTime = require('./datetime');

// Get the current date and time using the imported function
const currentDateTime = getCurrentDateTime();

// Display the current date and time
console.log('Current Date and Time:', currentDateTime);
