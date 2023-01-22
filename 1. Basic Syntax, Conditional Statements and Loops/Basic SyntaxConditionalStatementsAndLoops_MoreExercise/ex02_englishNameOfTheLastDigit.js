function englishNameLastDigit(number){
    // const - constraint 
    // const -> I don't want to change the variable 
    // const -> I  want to change the variable 
    const data = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
      }
      
      // 1. makes number string 
// pop function - The pop() method removes the last element from 
//an array and returns that value to the caller. 
//If you call pop() on an empty array, it returns undefined .
// Array.prototype.shift() has similar behavior to pop() ,
// but applied to the first element in an array. 
//The pop() method is a mutating method.
/*
Методът pop() премахва последния елемент от масив и връща тази стойност
на извикващия. Ако извикате pop() на празен масив, той връща undefined.
Array.prototype.shift() има подобно поведение на pop(), 
но се прилага към първия елемент в масив. Методът pop() е мутиращ метод.
*/
      const lastNum = number.toString().split('').pop();
      
      console.log(data[lastNum]); // lastNum, 'in word form is',
}

englishNameLastDigit(512);
englishNameLastDigit(1);
englishNameLastDigit(1643);

// Source of the code: Stackoverflow
// ---------------info about const:------------------
// --- info from this website: ---------- 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
/*
The const declaration creates block-scoped constants, 
much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment 
(i.e. by using the assignment operator (=)), 
and it can't be redeclared (i.e. through a variable declaration).
 However, if a constant is an object or array its properties or
  items can be updated or removed. 



const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

on console: > TypeError: invalid assignment to const 'number'
            > 42

---------------------- Syntax ------------------------------------
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]]

const { bar } = foo; // where foo = { bar:10, baz:12 };
-- This creates a constant with the name 'bar', which has a value of 10 

*/