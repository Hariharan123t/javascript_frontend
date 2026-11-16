// Write a function addNumbers(a, b) that accepts two numbers and returns their sum.

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Write a function checkEvenOdd(num) that checks whether a given number is even or odd.

function EvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(EvenOdd(10));
console.log(EvenOdd(7));



// Write a function findLargest(a, b, c) that accepts three numbers and returns the largest number.

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(10, 25, 15));

// Write a function factorial(num) that calculates the factorial of a given number.

function factorial(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "Invalid number";
    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(5));

// Write a function that reverses a given string.

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

// Write a function countVowels(str) that counts the number of vowels in a given string.

function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (
            ch === "a" ||
            ch === "e" ||
            ch === "i" ||
            ch === "o" ||
            ch === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));