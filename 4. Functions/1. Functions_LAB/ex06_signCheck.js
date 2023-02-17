function signCheck(numOne, numTwo, numThree) {
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        // if any of the numbers is 0, product is 0 and result is positive
        console.log("Positive");

    } else if ((numOne < 0 && numTwo < 0 && numThree < 0) ||
        (numOne > 0 && numTwo > 0 && numThree < 0) ||
        (numOne > 0 && numTwo < 0 && numThree > 0) ||
        (numOne < 0 && numTwo > 0 && numThree > 0)) {
        console.log("Negative");
        // if two or all three numbers are negative, the product is negative
    } else {
        console.log("Positive");
        // otherwise, product is positive
    }
}

signCheck(5, 12, -15);  // Negative
signCheck(-6, -12, 14);  // Positive
signCheck(-1, -2, -3);  // Negative
signCheck(-5, 1, 1);  // Negative