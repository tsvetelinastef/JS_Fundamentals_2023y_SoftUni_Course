function calculator(number, operator, anotherNumber) {
    let total = 0;
    switch (operator) {
        case "+":
            total = number + anotherNumber;
            break;
        case "-":
            total = number - anotherNumber;
            break;
        case "/":
            total = number / anotherNumber;
            break;
        case "*":
            total = number * anotherNumber;
            break;
    }
    console.log(total.toFixed(2));
}

calculator(5, '+', 10); // 15.00
calculator(25.5, '-', 3);  // 22.50