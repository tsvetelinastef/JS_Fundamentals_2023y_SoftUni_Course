function lowerUpper(char){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}

lowerUpper('L');
lowerUpper('f');

// Write a function that prints whether a given character is upper-case or lower-case?  
/*
var character = '5';
if (character == character.toUpperCase()) {
 alert ('upper case true');
}
if (character == character.toLowerCase()){
 alert ('lower case true');
}


var strings = 'this iS a TeSt 523 Now!';
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        alert('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        if (character == character.toLowerCase()){
            alert ('lower case true');
        }
    }
    i++;
}

//Source: https://stackoverflow.com/questions/1027224
*/
