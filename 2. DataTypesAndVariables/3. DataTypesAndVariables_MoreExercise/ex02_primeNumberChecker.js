function primeNumberChecker(number) {
    let isPrime = true; // only divisible by itself and one

    for(let i = 2; i < number; i++){  // 2, 3, 5, 7, 11, 13, 17, 19...
         if(number % i === 0){
            isPrime = false;
         }
    }

    if (isPrime) {
        console.log("true");
    } else {
        console.log("false");
    }
}

primeNumberChecker(7); // true
primeNumberChecker(8); // false
primeNumberChecker(81); // false