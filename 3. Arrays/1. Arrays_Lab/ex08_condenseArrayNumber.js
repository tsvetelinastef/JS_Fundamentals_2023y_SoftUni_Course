function condenseArrayNumber(arrNumbers) {
    //  condenses them by summing adjacent couples of elements 
    //until a single number is obtained
    let arr = [];
    for (let n of arrNumbers) {
      arr.push(n);
    }
    while (arr.length > 1) {
      let condensedArr = [];
      for (let i = 0; i < arr.length - 1; i++) {
        condensedArr.push(arr[i] + arr[i + 1]);
      }
      arr = condensedArr;
    }
    console.log(arr.join());
}

condenseArrayNumber([2, 10, 3]);  // 25
condenseArrayNumber([5, 0, 4, 1, 2]);   // 35
condenseArrayNumber([1]);   // 1

/*
  let currArr = arrNumbers;
    let newArr = [];

    while (currArr.length > 1) {

        for (let i = 0; i < currArr.length - 1; i++) {
            let firstElement = currArr[i];
            let secondElement = currArr[i + 1];

            newArr.push(firstElement + secondElement);
        }
       currArr = newArr;
    }
    console.log(currArr);
*/