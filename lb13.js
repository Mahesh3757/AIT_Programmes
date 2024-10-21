const readline = require('readline-sync');

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Cannot divide by zero';
    }
    return num1 / num2;
}

// Main function
function main() {
    console.log('Welcome to the Node.js Calculator!');
    const num1 = parseFloat(readline.question('Enter the first number: '));
    const num2 = parseFloat(readline.question('Enter the second number: '));

    console.log('Select operation:');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');

    const choice = parseInt(readline.question('Enter your choice: '));

    let result;
    switch (choice) {
        case 1:
            result = add(num1, num2);
            break;
        case 2:
            result = subtract(num1, num2);
            break;
        case 3:
            result = multiply(num1, num2);
            break;
        case 4:
            result = divide(num1, num2);
            break;
        default:
            console.log('Invalid choice');
            return;
    }

    console.log(`Result: ${result}`);
}

// Run the program
main();
