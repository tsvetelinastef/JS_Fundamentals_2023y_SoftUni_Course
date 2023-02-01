function evenOddSubtraction(array) {
    let even = 0;
    let odd = 0;
    let totalSum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    for (let number of array) {
        if (number % 2 === 0) {
            even += number;
        } else if (number % 2 !== 0) {
            odd += number;
        }

        totalSum = even - odd;

    }

    console.log(totalSum);

}

evenOddSubtraction([1, 2, 3, 4, 5, 6]); // 3
evenOddSubtraction([3, 5, 7, 9]);  // -24
evenOddSubtraction([2, 4, 6, 8, 10]);   // 30