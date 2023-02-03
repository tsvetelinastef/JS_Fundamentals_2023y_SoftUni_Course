function arrayRotation(arr, rotationCount) {
    let buffArr = []; // 1. step we take empty array
    for (let i = 0; i < rotationCount; i++) {
        let currentElement = arr[0];
        //2. this array - shte go obhojdam...
        // take elements every time and push it here/ behind
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]); // skip first element
        }
        buffArr.push(currentElement); // takes 51 and put it behind -> 47 32 61 21 51
        arr = buffArr; 
        buffArr = []; // because there is relation between arr and buffArr

    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);  //  32 61 21 51 47
arrayRotation([32, 21, 61, 1], 4);  // 32 21 61 1
arrayRotation([2, 4, 15, 31], 5);  // 4  15  31  2