// 83/ 100 
/*
give me JS code starting with function for this task: You will be given a text string. To find the hidden eggs and their amount,
read them and mark the ones that are valid, considering the following rules:   Eggs' color: Surrounded by one
or more "@" or "#" (they don't have to be the same). It is written with lower case alphabetical letters only.
Each color should be minimum 3 letters long. ..... Amount: Always positioned after the color. Between the color
and the amount there could or could not be any other characters. If there are, they must NOT be alphabetical 
letters or digits. Otherwise, the color-amount combination is invalid. Surrounded by one or more "/". 
Contains only digits. If the color or the amount is not valid, we consider that the color-amount combination is invalid. 
Examples of valid eggs:  //   #green##//2//     .... Examples of invalid eggs:  ##@InvalidColor##/54/  , @notc010r@*23*  , @invalid_color@/notnumber/   
Next, you will have to print all the valid eggs like following:  "You found {amount} {color} eggs!" for every color-amount combination.   
Examples:  You will receive a string. Print the operator output messages in the proper cases as described in the problem description. 
*/
//Output:  You found 10 green eggs!
//You found 8 red eggs!
//You found 6 red eggs!
//You found 5 purple eggs

function EasterEggs(input){

  let text = input[0];
  let pattern = /[@#]+(?<color>[a-z]{3,})[^a-z\d]*\/(?<amount>[1-9]\d*)\/+/gi;

  let matches = text.matchAll(pattern);

  for (const match of matches) {
      let color = match.groups['color'];
      let amount = match.groups['amount'];
      console.log(`You found ${amount} ${color} eggs!`);
  }

}

EasterEggs((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']));
// You found 10 green eggs!
//You found 8 red eggs!
//You found 6 red eggs!
//You found 5 purple eggs!



///================================================================
// tryings and tryings............. to make this 100 / 100
//function EasterEggs(input){

  //  let text = input[0];
    //let pattern = /[@#]+(?<color>[a-z]{3,})[^A-Za-z\d]*?\/+(?<amount>[1-9]\d*)\/+/g;
    
    //let match = pattern.exec(text);
    
    //while(match){
    //let color = match.groups['color'];
    //let amount = match.groups['amount'];
    //console.log(`You found ${amount} ${color} eggs!`);
    //match = pattern.exec(text);
    //}
    
//}

//EasterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
//===================================================
//function EasterEggs(input) {
  //  let text = input[0];
  //  let pattern = /(@|#)+([a-zA-Z]{3,})[^a-zA-Z\d]*(\d+)[^a-zA-Z\d]*\//g;
  //  let matches = text.matchAll(pattern);
    
  ///  for (let match of matches) {
    //  let color = match[2];
    //  let count = Number(match[3]);
    //  console.log(`You found ${count} ${color} eggs!`);
   // }
  //}

//EasterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);

//============================================================
//function EasterEggs(input) {
   // let text = input[0];
   // let pattern = /(@|#)(?<color>[a-zA-Z]{3,})\1.*?(\d+)\b/g;
    
    //let matches = text.matchAll(pattern);
    
    //for (let match of matches) {
     // let color = match.groups['color'];
    //  let amount = match[3];
    //  console.log(`You found ${amount} ${color} eggs!`);
   // }
 // }

 //=====================================================================
 /*
 function EasterEggs(input){

    let text = input[0];
    let pattern = /[@#]+(?<color>[a-z]{3,})[^a-z\d]*\/(?<amount>\d+)\/+/g;

    let match = pattern.exec(text);

    while(match){
        let color = match.groups['color'];
        let amount = match.groups['amount'];
        console.log(`You found ${amount} ${color} eggs!`);
        match = pattern.exec(text);
    }
 
}
==============================================================================================

  function EasterEggs(input) {
    const pattern = /(@|#)+([a-zA-Z]{3,})[^a-zA-Z\d]*?\/([1-9][0-9]*)\//g;
    const text = input[0];
    
    let match = pattern.exec(text);
    while (match) {
      const color = match[2];
      const amount = match[3];
      console.log(`You found ${amount} ${color} eggs!`);
      match = pattern.exec(text);
    }
  }
  
  */