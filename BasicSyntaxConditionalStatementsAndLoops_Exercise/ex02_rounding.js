function rounding(numberOne, numberTwo) {  // input - two numbers 
    
    // If the passed precision is more than 15.... 
    //it should automatically be reduced to 15
    if (numberTwo > 15) {
        numberTwo = 15;
      }

      // the second is the precision ---> toFixed 
      // addition to:  console.log(parseFloat(numberOne));
     console.log(parseFloat(numberOne.toFixed(numberTwo)));
    
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5, 3);