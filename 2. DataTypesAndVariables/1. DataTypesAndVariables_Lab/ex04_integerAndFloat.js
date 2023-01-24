function integerFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;

    if (sum % 1 === 0) {
        sum += ' - Integer';
    } else {
        sum += ' - Float';
    }

    console.log(`${sum}`);

    // insted of if It also can like:  
    // sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float'; 
    // console.log(sum);

}

integerFloat(9, 100, 1.1); // 110.1 - Float
integerFloat(100, 200, 303); // 603 - Integer

 // how to check on number if it's Float or Integer?  
/* 
function isInt(n) {
   return n % 1 === 0;
}
function isInt(n){
    return Number(n) === n && n % 1 === 0;
}
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

//Source: https://stackoverflow.com/questions/3885817
*/