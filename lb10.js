// Import the built-in querystring module
const querystring = require('querystring');

// Example query string
const queryString = 'name=John&age=30&city=New+York';

// Parse the query string into an object
const parsedQuery = querystring.parse(queryString);

// Display the parsed query object
console.log('Parsed Query:', parsedQuery);
