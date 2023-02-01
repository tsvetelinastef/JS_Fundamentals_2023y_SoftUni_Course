function reverseArrayNumbers(number, array){
    // create a new array with n numbers from the original array
    // reverse it and print it's elements on a single line, space - separated
    let newArr = [];
    for(let i = number - 1; i >= 0; i--){  // if number = 3; i= 2, i = 1, i = 0
        const element = array[i];  // i = 2 = 30,... i = 1 = 20, ... i = 0 = 10
        newArr.push(element);  // add 30 to the new array... than 20, the last 10
    }
    console.log(newArr.join(' '));  

}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);   // 30 20 10 
//reverseArrayNumbers(4, [-1, 20, 99, 5]);     // 5 99 20 -1
//reverseArrayNumbers(2, [66, 43, 75, 89, 47]);    // 43 66

/*
let newArr = [];
    for(let i = 0; i < number; i++){
        const element = array[i];   // starts from 0 = 10 , ... 20, 30, 
        newArr.push(element);     // adds 10 to the new array ...than 20, than 30,   
    }
    console.log(newArr.join(' '));  // here prints all the new array - 10, 20, 30 with a separation

    This outputs:   10 20 30 ... -1 20 99  5 ... 
*/