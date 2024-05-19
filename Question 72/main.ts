// Question 72:* Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// *Explain & TIP:* Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.

// Demonstrating block scope.

//This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}

// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); 