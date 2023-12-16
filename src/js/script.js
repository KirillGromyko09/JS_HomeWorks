'use strict'

let operand1 = prompt("Enter the first operand:");
let operand2 = prompt("Enter the second operand:");


operand1 = parseFloat(operand1);
operand2 = parseFloat(operand2);


if (Number.isNaN(operand1) || Number.isNaN(operand2)) {
    console.log("Please enter valid numbers.");
} else {
    // Perform operations and output the results to the console
    console.log(`Addition Result: ${operand1} + ${operand2} = ${operand1 + operand2}`);
    console.log(`Subtraction Result: ${operand1} - ${operand2} = ${operand1 - operand2}`);
    console.log(`Multiplication Result: ${operand1} * ${operand2} = ${operand1 * operand2}`);


    if (operand2 !== 0) {
        console.log(`Division Result: ${operand1} / ${operand2} = ${operand1 / operand2}`);
    } else {
        console.log("Division by 0 is not possible.");
    }
}



