const readline = require('readline-sync');

// Function to convert string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// Function to convert string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Main function
function main1() {
    const userInput = readline.question('Enter a string: ');

    const choice = readline.keyInSelect(['Lowercase', 'Uppercase'], 'Convert to:');

    let result;
    switch (choice) {
        case 0:
            result = toLowerCase(userInput);
            break;
        case 1:
            result = toUpperCase(userInput);
            break;
        default:
            console.log('Exiting...');
            return;
    }

    console.log('Converted string:', result);
}

// Run the program
main();
