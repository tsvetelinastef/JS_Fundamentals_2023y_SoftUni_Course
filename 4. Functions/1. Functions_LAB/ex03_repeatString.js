function repeatString(str, repeatNum){
   let result = copyRepeatString(str, repeatNum);
   return result;

   function copyRepeatString(str, repeatNum){
        return str.repeat(repeatNum);
   }
}

console.log(repeatString('abc', 3));
console.log(repeatString("String", 2 ));

/*
------------- Напълно ок  --------------------
function repeatString(str, repeatString){
    let result = copyRepeatString(str, repeatNum);
    return result;

    return str.repeat(repeatNum);
}

function copyRepeatString(str, repeatNum){
    return str.repeat(repeatNum);
}

console.log(repeatString("String", 2));
*/
