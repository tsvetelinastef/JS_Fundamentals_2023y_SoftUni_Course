function sumDigits(number){
    let numToString = number.toString(); // let numToString = number + ""; 
    let sum = 0;
    // console.log(number.length); - undefined
    for (let i = 0; i < numToString.length; i++) {
       // console.log(typeof (numToString[i])); -> string
       // sum += numToString[i];
        sum += Number(numToString[i]);
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);