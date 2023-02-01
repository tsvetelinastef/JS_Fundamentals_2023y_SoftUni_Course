function sumEvenNumbers(array) {
    // parse them into numbers, and sum only the even numbers
    let sum = 0;

    // 1. parse each string to number
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    // Iterate through all elements in the array wit for-of loop
    // and check if the numbers are even

    for (let number of array) {
        if (number % 2 === 0) {
            sum += number;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);  // 12
sumEvenNumbers(['3', '5', '7', '9']);  // 0
sumEvenNumbers(['2', '4', '6', '8', '10']);  // 30