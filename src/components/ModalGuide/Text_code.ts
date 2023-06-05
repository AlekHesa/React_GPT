export const textCode = `
// Simple Calculator in ReactJS

// Function to add two numbers
const add = (x, y) => {
    return x + y;
};

// Function to subtract two numbers
const subtract = (x, y) => {
    return x - y;
};

// Function to multiply two numbers
const multiply = (x, y) => {
    return x * y;
};

// Function to divide two numbers
const divide = (x, y) => {
    return x / y;
};

console.log("Select operation.");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

// Take input from the user
const choice = prompt("Enter choice (1/2/3/4): ");
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

if (choice === '1') {
    console.log(num1, "+", num2, "=", add(num1, num2));
} else if (choice === '2') {
    console.log(num1, "-", num2, "=", subtract(num1, num2));
} else if (choice === '3') {
    console.log(num1, "*", num2, "=", multiply(num1, num2));
} else if (choice === '4') {
    console.log(num1, "/", num2, "=", divide(num1, num2));
} else {
    console.log("Invalid input");
}
`;
