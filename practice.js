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

function runCode() {
    let input = readInput("Please enter a string to capitalize");
    document.getElementById("inputValues").innerHTML = input;
    // Code here
    //let output = reverseString(input);
    //let output = capitalize(input);
    //let output = compressString(input);
    //document.getElementById("outputValues").innerHTML = output;

    let boolResult = palindrome(input);
    if (boolResult) {
        document.getElementById("outputValues").innerHTML = "True Value";
    } else {
        document.getElementById("outputValues").innerHTML = "False Value";
    }
}

function readInput(promptMessage) {
    return prompt(promptMessage);
}
