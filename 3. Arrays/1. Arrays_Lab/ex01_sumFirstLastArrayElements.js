function sumFirstLastArrayElements(input){
    // function that receives - array of numbers
    // prints the sum of the first and last element in the array

    let first = input[0];   // first element
    let last = input[input.length - 1];  // last element 
    console.log(first + last);  // sum of them 

}

sumFirstLastArrayElements([20, 30, 40]);  // 60
sumFirstLastArrayElements([10, 17, 22, 33]);  // 43
sumFirstLastArrayElements([11, 58, 69]);  // 80

/*  2nd way:..... it's absolutely the same as the previous
    let firstElement = input[0];  
    let lastIndex = input.length - 1;
    let lastElement = input[lastIndex];
    console.log(firstElement + lastElement);
*/