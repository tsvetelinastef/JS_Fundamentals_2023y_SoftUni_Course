function race(data) {
    let participants = {}
    let participantsInputArr = data.shift().split(", ");
    let patternName = /[A-Za-z]/g;
    let patternDistance = /[0-9]/g;  // copy from regex101 as I delete the "m"

    for (let participant of participantsInputArr) {
        participants[participant] = 0;  // initial value, in the begging distance is 0,for not having "undefined"
    }

    for (let line of data) {
        if (line === "end of race") {
            break;
        }

        let name = line.match(patternName).join("");
        let distance = line.match(patternDistance); // if I join this I will receive concatenated number, but I needed 
        let tempDistance = 0; 

        for (let el of distance) {
            tempDistance += Number(el);
        }

        // we check if there exists this competitor George, Peter, Tom
        if (participants.hasOwnProperty(name)) {
            participants[name] += tempDistance;
        }
    }

    // I sort them , matrix all elements double key value and because it's matrix we sort them 
        let sortArr = Object.entries(participants).sort((a, b) => b[1] - a[1]); // name of the competitor is on 0 => key... 1 is the distance
        // b and a => decreasing order.... distance in descending
        console.log(`1st place: ${sortArr[0][0]}`);
        console.log(`2nd place: ${sortArr[1][0]}`);
        console.log(`3rd place: ${sortArr[2][0]}`); // I need only the name that's why I use only 0 ... matrix 
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);

    
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
