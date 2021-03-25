"use strict";


function reverseString(original) {
    let result = "";
    for(let i = original.length - 1; i > -1; i -= 1) {
        result += original[i];
    }
    return result
}

function capitalize(original) {
    let result = "";
    for (let i = 0; i < original.length; i += 1) {
        if (i == 0 || original[i - 1] == " ") {
            result += original[i].toUpperCase();
        } else {
            result += original[i];
        }
    }
    return result;
}

function compressString(original) {
    if (!original) {
        return "";
    }

    let result = "";
    let prev = original[0];
    let prevIndex = 0;
    for (let i = 0; i < original.length; i++) {
        if (original[i] != prev) {
            result += (i - prevIndex) + prev;
            prev = original[i];
            prevIndex = i;
        }
    }
    result += (original.length - prevIndex) + prev;
    return result;
}

function palindrome(original) {
    if (original.length == 1) {
        return true;
    }
    for (let i = 0; i < Math.floor(original.length / 2); i++) {
        if (original[i] !== original[original.length - i -1]) {
            return false;
        }
    }

    return true;
}
function digitsSquareSum(number) {
    let result = 0;
    let lastDigit = 0;
    while (number > 0) {
        lastDigit = number % 10;
        result += lastDigit * lastDigit;
        number = Math.floor(number / 10);
    }
    return result;
}
function happyNumbers(number) {
    if (number == 1) {
        return true;
    }
    let numSet = new Set();
    numSet.add(number);
    let nextNum = number;
    while (true) {
        nextNum = digitsSquareSum(nextNum);
        if (nextNum == 1) {
            return true;
        } else if (numSet.has(nextNum)) {
            return false;
        } else {
            numSet.add(nextNum);
        }
    }
}

function runCode() {
    let input = readInput("Please enter a string to capitalize");
    document.getElementById("inputValues").innerHTML = input;
    // Code here
    //let output = reverseString(input);
    //let output = capitalize(input);
    //let output = compressString(input);
    input = parseInt(input);
    if (isNaN(input)) {
        document.getElementById("outputValues").innerHTML = "Invalid input. Not a number";
    } else {
        let output = happyNumbers(input);
        document.getElementById("outputValues").innerHTML = output;
    }
    //document.getElementById("outputValues").innerHTML = output;

    let boolResult = palindrome(input);
    //if (boolResult) {
    //    document.getElementById("outputValues").innerHTML = "True Value";
    //} else {
    //    document.getElementById("outputValues").innerHTML = "False Value";
    //}
}

function readInput(promptMessage) {
    return prompt(promptMessage);
}

runCode();
