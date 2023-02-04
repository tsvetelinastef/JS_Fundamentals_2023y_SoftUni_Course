function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let isOver = false;
    let roomCounter = 0;
    let coins = 0;

    for (let room of rooms) {
        roomCounter++;
        // console.log(room);
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);

        switch (command) {
            case "potion":
                if (value + health > 100) {
                    // health = 90  value = 30
                    value = value - (value + health - 100);
                    // 30 - (30 + 90 - 100)... 30 - (120 - 100) = 10
                }
                health += value;
                //health = health + value > 100 ? 100 : health + value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;

            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    isOver = true;
                    console.log(`Best room: ${roomCounter}`);
                }
                break;
        }
        if (isOver) {
            break;
        }
    }
    if (!isOver) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
/*
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6
*/
console.log("-------------------------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
/*
You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 coins.
You slayed snake.
You found 110 coins.
You've made it!
Coins: 120
Health: 65
*/