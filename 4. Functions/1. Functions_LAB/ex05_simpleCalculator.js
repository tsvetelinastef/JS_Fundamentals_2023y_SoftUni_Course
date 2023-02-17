function simpleCalculator(nunOne, numTwo, operator){
    let res;

    switch(operator){
        case "multiply":
            res = (x, y) => nunOne * numTwo;
            break;
        case "divide":
            res = (x, y) => nunOne / numTwo;
            break;
        case "add":
            res = (x, y) => nunOne + numTwo;
            break;
        case "subtract":
            res = (x, y) => nunOne - numTwo;
            break; 
    }
    console.log(res());
}

simpleCalculator(5, 5, "multiply");   // 25
simpleCalculator(40, 8, "divide");  // 5
simpleCalculator(12, 19, "add");    //  31
simpleCalculator(50, 13, "subtract");  //  37