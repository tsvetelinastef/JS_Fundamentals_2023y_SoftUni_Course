function tseamAccount(array){ 
    // function called tseamAccount which takes an array as an argument
    // array is expected to contain a list of commands related to an online gaming account

    let workingArray = array.slice(); // creates a copy of the original array using slice() method 
        // and stores it in a variable called `workingArray` 
    let account = workingArray.shift().split(" ");
        // initializes an array called account by taking the first element
        // of workingArray, splitting it into an array using the 
        //split() method with a space as the delimiter,
        // and storing it in the account variable.
    let command = workingArray.shift();
    //It then takes the next element of `workingArray` 
    //and stores it in a variable called `command`.
  
    while (command !== "Play!") {
        //It then enters a loop that continues until the command variable
        // is equal to the string "Play!"
      let tempCommand = command.split(" ");
        //Within the loop, it splits the `command` variable into an array 
        //called `tempCommand` using a space as the delimiter.
      switch (tempCommand[0]) {
        // It then uses a switch statement to check the first element of 
        //`tempCommand` and executes a specific case depending on its value.
        case "Install":
          if (!account.includes(tempCommand[1])) {
            account.push(tempCommand[1]);
          }
          break;
          //If the first element of tempCommand is "Install", it checks 
          //whether the second element of tempCommand is already in the 
          //account array using the includes() method. If not, it adds 
          //the second element to the account array using the push() method.


        case "Uninstall":
          if (account.includes(tempCommand[1])) {
            let index = account.indexOf(tempCommand[1]);
            account.splice(index, 1);
          }
          break;
          //If the first element of tempCommand is "Uninstall", it checks
          // whether the second element of tempCommand is in the account 
          //array using the includes() method. If it is, it finds the 
          //index of the element using the indexOf() method, and removes 
          //it from the account array using the splice() method.


        case "Update":
          if (account.includes(tempCommand[1])) {
            let index = account.indexOf(tempCommand[1]);
            account.splice(index, 1);
            account.push(tempCommand[1]);
          }
          break;
          //If the first element of tempCommand is "Update", it checks 
          //whether the second element of tempCommand is in the account 
          //array using the includes() method. If it is, it finds the 
          //index of the element using the indexOf() method, removes it
          // from the account array using the splice() method, and then 
          //adds it back to the array using the push() method. This 
          //effectively moves the element to the end of the array.


        case "Expansion":
          let game = tempCommand[1].split("-");
          let gameName = game[0];
          if (account.includes(gameName)) {
            account.splice(account.indexOf(game[0]) + 1, 0, game.join(":"));
          }
          break;
          // If the first element of tempCommand is "Expansion", it splits 
          //the second element of tempCommand into an array called game 
          //using a hyphen as the delimiter, and then takes the first 
          //element of game and stores it in a variable called gameName.
          // If gameName is in the account array, it finds its index using
          // the indexOf() method, adds 1 to the index, and then inserts
          // the entire game array into the account array at that index 
          //using the splice() method.
      }
      command = workingArray.shift();
      //After each iteration of the loop, it takes the next element of
      // workingArray and stores it in the command variable.
    }
    console.log(account.join(" "));
    //Once the loop is finished, it uses the join() method to convert 
    //the account array to a string with a space as the separator, 
    //and then logs the result to the console using console.log().
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
