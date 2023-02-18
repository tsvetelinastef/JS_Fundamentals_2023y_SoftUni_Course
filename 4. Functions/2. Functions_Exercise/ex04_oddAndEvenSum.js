function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    // Convert the number to a string to access each digit
    let strNum = number.toString();


    // Loop through each digit and add it to the corresponding sum
    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    return "Odd sum = " + oddSum + ", Even sum = " + evenSum;
}

console.log(oddAndEvenSum("1000435")); // Odd sum = 9, Even sum = 4
console.log(oddAndEvenSum("3495892137259234")); // Odd sum = 54, Even sum = 22