function smallestOfThreeNumbers(numOne, numTwo, numThree){
    if (numOne <= numTwo && numOne <= numThree) {
        console.log(numOne);
      } else if (numTwo <= numOne && numTwo <= numThree) {
        console.log(numTwo);
      } else {
        console.log(numThree);
      }
}

smallestOfThreeNumbers(2, 5, 3 );   // 2
smallestOfThreeNumbers(600, 342, 123); // 123
smallestOfThreeNumbers(25, 21, 4); // 4
smallestOfThreeNumbers(2, 2, 2);  // 2