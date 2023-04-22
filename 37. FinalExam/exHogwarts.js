/*  First, you will receive a spell that needs to be deciphered. Next, you will be receiving commands split by a single space until you get the "Abracadabra" command. 
There are 5 possible commands:  "Abjuration" - Replace all letters with upper case and print the result ..... 
"Necromancy" - Replace all letters with lower case and print the result. ... "Illusion {index} {letter}"
- Replace the letter at the index with the given one and print "Done!" If the index is invalid, print: 
"The spell was too weak." ... "Divination {first substring} {second substring}" -  Replace the first substring(all matches) with the second and print the result.
If the substring does not exist, skip the command. .... "Alteration {substring}" - Remove the substring from the string and print the result. 
If the substring does not exist, skip the command. If the input command is not in the list, print "The spell did not work!"   
Input:  On the first line, you are going to receive the string ... On the next lines, until you receive "Abracadabra", you will be receiving commands. 
All commands are case - sensitive. ..... Output: Print the output of the commands in the format described above. */

    // 1000/ 100
    function spellDecipher(input) {
        let spell = input.shift();
        let command = input.shift();
    
        while (command !== "Abracadabra") {
            let tokens = command.split(" ");
    
            switch (tokens[0]) {
                case "Abjuration":
                    spell = spell.toUpperCase();
                    console.log(spell);
                    break;
                case "Necromancy":
                    spell = spell.toLowerCase();
                    console.log(spell);
                    break;
                case "Illusion":
                    let index = Number(tokens[1]);
                    let letter = tokens[2];
                    if (index >= 0 && index < spell.length) {
                        spell = spell.substring(0, index) + letter + spell.substring(index + 1);
                        console.log("Done!");
                    } else {
                        console.log("The spell was too weak.");
                    }
                    break;
                case "Divination":
                    let first = tokens[1];
                    let second = tokens[2];
                    if (spell.includes(first)) {
                        spell = spell.split(first).join(second);
                        console.log(spell);
                    }
                    break;
                case "Alteration":
                    let substring = tokens[1];
                    if (spell.includes(substring)) {
                        spell = spell.split(substring).join("");
                        console.log(spell);
                    }
                    break;
                default:
                    console.log("The spell did not work!");
                    break;
            }
    
            command = input.shift();
        }
    }

    
    spellDecipher((["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]));

    // Done!
    //Done!
    //ACCIO

    spellDecipher((["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"]));

    // tr1gg3r
    //The spell was too weak.
    //The spell was too weak.

spellDecipher((["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]));

// The spell did not work!
//SWORDMASTER
//swordmaster
//sword
