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
function printList(numArray) {
    let result = "[";
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i]) {
            result += (result == "[" ? "" : ", ") + (i + 1);
        }
    }
    return result + "]";
}

function hundredPrimes() {
    let firstHundred = [];
    for (let i = 0; i < 100; i++) {
        firstHundred.push(true);
    }
    firstHundred[0] = false;
    for (let i = 2; i <= firstHundred.length; i ++) {
        if (firstHundred[i - 1]) {
            for (let j = 1; i + i * j <= firstHundred.length; j++) {
                firstHundred[i + i * j - 1] = false;
            }
        }
    } 
    return firstHundred;

}

function fibonacci(start, number) {
    let result = [start];
    if (number <= 1) {
        return result;
    }
    result.push(start);
    if (number == 2) {
        return result;
    }
    for (let i = 0; i < number - 2; i++) {
        result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result;
}

function runCode() {
    //let input = readInput("Please enter a string to capitalize");
    //document.getElementById("inputValues").innerHTML = input;
    // Code here
    //let output = reverseString(input);
    //let output = capitalize(input);
    //let output = compressString(input);
    //input = parseInt(input);
    //if (isNaN(input)) {
    //    document.getElementById("outputValues").innerHTML = "Invalid input. Not a number";
    //} else {
    //    let output = happyNumbers(input);
    //    document.getElementById("outputValues").innerHTML = output;
    //}
    //document.getElementById("outputValues").innerHTML = output;

    //let boolResult = palindrome(input);
    //if (boolResult) {
    //    document.getElementById("outputValues").innerHTML = "True Value";
    //} else {
    //    document.getElementById("outputValues").innerHTML = "False Value";
    //}
    //let output = hundredPrimes();
    //document.getElementById("inputValues").innerHTML = "First hundred primes";
    //document.getElementById("outputValues").innerHTML = printList(output);
    let startNum = readInput("Please enter a starting number");
    startNum = parseInt(startNum);
    let numEntries = readInput("Please enter how many numbers in sequence");
    numEntries = parseInt(numEntries);
    
    document.getElementById("inputValues").innerHTML = "Fibonacci sequence starting at " + startNum + ", with " + numEntries + " entries"; 

    let output = fibonacci(startNum, numEntries);
    document.getElementById("outputValues").innerHTML = output;
}

function readInput(promptMessage) {
    return prompt(promptMessage);
}

runCode();
