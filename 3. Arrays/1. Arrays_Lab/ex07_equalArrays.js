function equalArrays(arrOne, arrTwo) {
    let areEqual = true;
    let sumArr1 = 0;

    for (let i = 0; i < arrOne.length; i++) {
        arrOne[i] = Number(arrOne[i]);
    }

    for (let i = 0; i < arrTwo.length; i++) {
        arrTwo[i] = Number(arrTwo[i]);
    }


    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        sumArr1 += arrOne[i];
       // sumArr1 += arrTwo[i];
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sumArr1}`);
    } 

}

equalArrays(['10', '20', '30'], ['10', '20', '30']); // Arrays are identical. Sum: 60
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']); // Arrays are not identical. Found difference at 2 index
equalArrays(['1'], ['10']); // Arrays are not identical. Found difference at 0 index