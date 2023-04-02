/*
The result of: 
let a = 10 
let b = 20 
let c = a > b ? a : b; 
console.log(c);

The result of the code you provided would be:

20

Here's how the code works:
    First, the variable a is declared and initialized to 10.
    Then, the variable b is declared and initialized to 20.
    Next, the ternary operator is used to compare a and b. Since a is not greater than b, 
    the condition is false, and the value of b is assigned to the variable c.
    Finally, the value of c is printed to the console, which is 20.

//========================================================================================================================================
Result of: let greet = "Hello World"; console.log(great.substring(3,5));

There is a typo in your code. greet is misspelled as great. Assuming you meant greet, 
the output of the code would be lo. This is because .substring(3,5) returns a substring 
starting from the 3rd character and ending at the 5th character 
(excluding the character at index 5). In this case, the 3rd character is l 
and the 5th character is o, so the substring is lo.

//========================================================================================================================================
Result of: let greet = "Hello World"; console.log(greet.substring(3,5));
The result of the code will be:

lo

The substring() method extracts a portion of a string and returns the extracted part as 
a new string. In this case, the starting index is 3 and the ending index is 5, so the method
 extracts the characters between the 3rd and 5th positions (exclusive), which are "lo".
//========================================================================================================================================
The pattern \W matches? 

The pattern \W matches any character that is not a word character. A word character is 
any letter, digit, or underscore character. So, \W will match any character that is not a
 letter, digit, or underscore, including spaces, punctuation, and special characters.
tsvetelina2001@gmail.com
Which answer: a) only the symbol W b) any white space character  
c) any non- word character d) any non-decimal character 

The answer is (c) any non-word character. The regular expression pattern \W matches 
any character that is not a word character, which includes any character that is not
 a letter, digit, or underscore.
//========================================================================================================================================
Which of the following array operations won't  mutate the original array?
 a) Slice() b) Splice() c) Pop() d) Shift() 

The Slice() operation won't mutate the original array. It returns a new array 
that contains a copy of the selected elements from the original array without
 modifying the original array.

On the other hand, Splice(), Pop(), and Shift() operations modify the original
 array by adding or removing elements from it.

//========================================================================================================================================
What will appear on the console when executing this code? 
let name = "George"; console.log(name.charAt(2));
The code will output the character at index 2 of the string 
"George", which is "o". Therefore, the output of the code will be:
o

//========================================================================================================================================
What are reference types stored?
A) Stack B) Hard disk C) Heap D) RAM 

Reference types are stored in the Heap.
//========================================================================================================================================
What will the following code print on the console?
 for(let I = 10; I > 3; I-=2){ console.log(I); }

The following code will print the following on the console:
10
8
6
4

It starts with I having a value of 10, and then in each iteration
 of the loop, it decreases by 2 until it reaches 4.
//========================================================================================================================================
Which of the following lines contains a floating point number?
 a) -1111 b) 4 c) 2.0 d) 0 

The line containing a floating point number is option (c) - 2.0.
//========================================================================================================================================
Which of the following is NOT an object method? 
a) .keys() b) .entries() c) .values() d) .filter()

The correct answer is d) .filter().
.filter() is not an object method, but rather an array method that returns a
 new array with all elements that pass a certain condition.

.keys(), .entries(), and .values() are all object methods that return an
 array of the keys, key-value pairs, and values of an object, respectively.
//========================================================================================================================================
What will be the result from Number("string")?
 a) 1 b) -1 c) 0 d) NaN

The result from Number("string") will be NaN.
tsvetelina2001@gmail.com
Classes can have functions that are called: a) Values b) Methods c) Instances d) Properties 
Classes can have functions that are called methods.
//========================================================================================================================================
What will the following code print on the console?
function printText(text){ console.log("I love" + text); } printText('JavaScript'); 

The code will print I love JavaScript on the console.
//========================================================================================================================================
What will appear on the console when executing this code?
 let arr = ['z', 's', 'a', 'd']; 
 arr.sort((a,b) => b.localeCompare(a)); 

The code will sort the arr array in reverse alphabetical order using the localeCompare() method,
and then return the sorted array. Therefore, the following array will be logged on the console:
['z', 's', 'd', 'a']
//========================================================================================================================================
Which of the following is NOT an assignment operator in JavaScript?
 a) /= b) *= c) += d) //  

The correct answer is d) //. // is not an assignment operator in JavaScript.
 It is a single-line comment that is used to add comments to code that is ignored by the interpreter.
//========================================================================================================================================
Which of the following is a reference type in JavaScript? 
a) Boolean b) Function c) String d) Null 

The answer is b) Function. In JavaScript, functions are objects and therefore
 reference types. The other options (a) Boolean, c) String, and d) Null) are all primitive types.
//========================================================================================================================================
Which of the following is a value type in JavaScript? 
a) String b) Function c) Object d) Array 

In JavaScript, primitive types like strings, numbers, booleans, and symbols
 are considered value types. So, the answer is a) String.
//==========================================================================================================================================
Which of the following statement is true? 
a) Functions make your program run faster 
b) A function is a piece of code that performs a specific task 
c) Functions are used to create objects in JavaScript
d) all answers are correct  

The correct answer is b) A function is a piece of code that performs a specific task.

*/