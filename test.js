// A simple calculator program
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculations
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}

// Function to start the calculator
function startCalculator() {
    rl.question('Enter the first number: ', (firstInput) => {
        const num1 = parseFloat(firstInput);

        if (isNaN(num1)) {
            console.log('Error: Invalid number');
            return rl.close();
        }

        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            rl.question('Enter the second number: ', (secondInput) => {
                const num2 = parseFloat(secondInput);

                if (isNaN(num2)) {
                    console.log('Error: Invalid number');
                    return rl.close();
                }

                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

// Start the calculator
console.log('Welcome to the Calculator!');
startCalculator();