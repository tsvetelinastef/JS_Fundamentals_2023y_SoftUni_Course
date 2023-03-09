function printAndSum(numberOne, numberTwo){
    let printLine = "";
    let sum = 0;
    for (let i = numberOne; i <= numberTwo; i++) {
       // console.log(i);
       printLine += i + " ";
        sum += i;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
//printAndSum(0, 26);
//printAndSum(50, 60);

// how to print numbers from one for loop in one line?  
// var s = "";
// for(var i = 1; i < 11; i += 1) {
//  s += i + " ";
//}
//console.log(s);

