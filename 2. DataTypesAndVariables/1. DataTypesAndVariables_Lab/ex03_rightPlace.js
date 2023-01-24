function rightPlace(wordWithMissingChar, char, string) {
    // 1.  first - word with a missing char replaced with an underscore '_'
    // 2. You have to replace the missing character (underscore) of 
    //the first string with the character passed as the second 
    //parameter and compare the result with the second string

    // If they are equals, you should print "Matched",
    // otherwise print "Not Matched"

    let result = wordWithMissingChar.replace('_', char);
    let output = result === string ? "Matched" : "Not Matched";
    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong'); // Not Matched
rightPlace('Str_ng', 'i', 'String'); //  Matched

/*
function rightPlace(str, char, result) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "_") {
      res += char;
    } else {
      res += currentChar;
    }
  }
  if (res === result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
  // str = str.replace("_", char);

  // if (str === result) {
  //   console.log("Matched");
  // } else {
  //   console.log("Not Matched");
  // }
}
*/