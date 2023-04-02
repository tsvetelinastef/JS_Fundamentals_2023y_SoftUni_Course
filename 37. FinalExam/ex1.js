function findEggs(str) {
    const regex = /([@#]+[a-z]{3,}@*[^A-Za-z\d]*\d+@*[\/]{2}\d+\/)/g;
    const eggs = str.match(regex);
    if (!eggs) {
      console.log("No eggs found :(");
      return;
    }
    for (let egg of eggs) {
      const colorRegex = /[@#]+([a-z]{3,})@*/;
      const amountRegex = /[\/]{2}(\d+)/;
      const colorMatch = egg.match(colorRegex);
      const amountMatch = egg.match(amountRegex);
      if (!colorMatch || !amountMatch) {
        continue;
      }
      const color = colorMatch[1];
      const amount = amountMatch[1];
      console.log(`You found ${amount} ${color} eggs!`);
    }
  }
  

//================================================================
function findEggs(str) {
    const regex = /[@#]+[a-z]{3,}[^a-z\d]*\/(\d+)\/[^a-z\d]*[@#]+/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
      const color = match[0].match(/[a-z]+/)[0];
      const amount = match[1];
      console.log(`You found ${amount} ${color} eggs!`);
    }
  }
  

  //==============================================================

  function findEggs(str) {
    const regex = /[@#][a-z]{3,}@.*?\/\d+\//g;
    const matches = str.match(regex);
    if (!matches) {
      console.log("No eggs found");
      return;
    }
    for (const match of matches) {
      const color = match.match(/[@#][a-z]{3,}@/)[0].replace(/[@#]/g, "");
      const amount = match.match(/\/\d+\//)[0].replace(/\D/g, "");
      console.log(`You found ${amount} ${color} eggs!`);
    }
  }
  //=================================================================

  function processFacebookCommands(input) {
    let followers = {};
  
    const commands = {
      "New follower": (username) => {
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: 0, comments: 0 };
        }
      },
      Like: (username, count) => {
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: count, comments: 0 };
        } else {
          followers[username].likes += parseInt(count);
        }
      },
      Comment: (username) => {
        if (!followers.hasOwnProperty(username)) {
          followers[username] = { likes: 0, comments: 1 };
        } else {
          followers[username].comments += 1;
        }
      },
      Blocked: (username) => {
        if (!followers.hasOwnProperty(username)) {
          console.log(`${username} doesn't exist.`);
        } else {
          delete followers[username];
        }
      },
    };
  
    input.forEach((line) => {
      const [command, username, count] = line.split(": ").map((x) => x.trim());
  
      if (command !== "Log out") {
        commands[command](username, count);
      }
    });
  
    const sortedFollowers = Object.keys(followers).sort((a, b) => {
      const aTotal = followers[a].likes + followers[a].comments;
      const bTotal = followers[b].likes + followers[b].comments;
      return bTotal - aTotal || a.localeCompare(b);
    });
  
    console.log(`${sortedFollowers.length} followers`);
  
    sortedFollowers.forEach((follower) => {
      const { likes, comments } = followers[follower];
      console.log(`${follower}: ${likes + comments}`);
    });
  }
  // ============================================================

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
//================================================================
function findEggs(str) {
    const regex = /([@#]+[a-z]{3,}@*[^A-Za-z\d]*\d+@*[\/]{2}\d+\/)/g;
    const eggs = str.match(regex);
    if (!eggs) {
      console.log("No eggs found :(");
      return;
    }
    for (let egg of eggs) {
      const colorRegex = /[@#]+([a-z]{3,})@*/;
      const amountRegex = /[\/]{2}(\d+)/;
      const colorMatch = egg.match(colorRegex);
      const amountMatch = egg.match(amountRegex);
      if (!colorMatch || !amountMatch) {
        continue;
      }
      const color = colorMatch[1];
      const amount = amountMatch[1];
      console.log(`You found ${amount} ${color} eggs!`);
    }
  }
  
  findEggs('@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/');
//=================================================
function EasterEggs(input){
    let text = input[0];
    let pattern = /(@{1,}|#{1,})(?<color>[a-z]{3,}+)(@{1,}|#{1,}).*?(?<amount>\d+)(@{1,}|#{1,})/g;
    let match = pattern.exec(text);
    
    while(match){
    let color = match.groups['color'];
    let amount = Number(match.groups['amount']);
    console.log(`You found ${amount} ${color} eggs!`);
    match = pattern.exec(text)
    }
}

EasterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
