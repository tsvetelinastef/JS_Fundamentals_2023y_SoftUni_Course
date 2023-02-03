function mergeArrays(firstArr, secondArr){
    let result = [];
    
    for(let i = 0; i < firstArr.length; i++){
        let valueA = firstArr[i];
        let valueB = secondArr[i];
        if(i % 2 === 0){
            valueA = Number(valueA);
            valueB = Number(valueB);
        }
        let currentResult = valueA + valueB;
        result.push(currentResult);   // result[i] = currentResult;
    }
    console.log(result.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);    // 22 - 1522 - 110 - 5636 - 46
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);   // 35 - 12312333 - 10 - 77122 - 48