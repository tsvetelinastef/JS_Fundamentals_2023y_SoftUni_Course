function ladybugs(input) {
    let size = Number(input[0]);
    let field = new Array(size).fill(0);  // fill the array with the first elements
    // console.log(fied);

    // for (let i = 0; i < size; i++) {
    //  fied[i] = 0;
    // }
    let indexOfLadybugs = input[1].split(" ");

    for (let i = 0; i < indexOfLadybugs.length; i++) {
        let index = indexOfLadybugs[i];
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }
    // field[index] = 1;
    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let indexLadybug = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);


        if (indexLadybug >= field.length || indexLadybug < 0 || field[indexLadybug] === 0) {
            continue;
        }

        field[indexLadybug] = 0;
        let isFly = true;

        // logic for the flying
        while (isFly) {
            let currentIndex = direction === "right" ? indexLadybug + flyLength : indexLadybug - flyLength;
            if (field[currentIndex] === 0) {
                field[currentIndex] = 1;
                isFly = false;
            } else if (field[currentIndex] === 1) {
                flyLength += flyLength;
            } else {
                isFly = false;
            }
        }
    }

    console.log(field.join(" "));

}

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);
// 0 1 0
ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);

// 0 0 0

/*
 if (direction === "right") {
        while (isFly) {
            if (field[indexLadybug + flyLength] === 0) {
                field[indexLadybug + flyLength] = 1;
                isFly = false;
            } else if (field[indexLadybug + flyLength] === 1) {
                flyLength += flyLength;
            } else {
                isFly = false;
            }

            //  let currentIndex = direction === "right" ? indexOfLadybugs + flyLength : indexOfLadybugs - flyLength;
            //  if (field[currentIndex] === 0) {
            //      field[currentIndex] = 1;
            //      isFly = false;
            //  } else if (field[currentIndex] === 1) {
            //      flyLength += flyLength;
            //  } else {
            //      isFly;
            //   }
        }
    } else {
        while (isFly) {
            if (field[indexLadybug - flyLength] === 0) {
                field[indexLadybug - flyLength] = 1;
                isFly = false;
            } else if (field[flyLength] === 1) {
                flyLength += flyLength;
            } else {
                isFly = false;
            }
        }

*/