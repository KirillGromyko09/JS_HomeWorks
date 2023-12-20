'use strict'

const input_str1 = prompt("Enter the first string:");
const input_str2 = prompt("Enter the second string:");
const input_str3 = prompt("Enter the third string:");


const concatenated_str = input_str1 + input_str2 + input_str3;
console.log("Strings in arbitrary order:", concatenated_str);


const five_digit_number = prompt("Enter a five-digit number:");
const digits_list = five_digit_number.split("").map(Number);
console.log("Digits of the five-digit number separated by space:", digits_list.join(" "));
