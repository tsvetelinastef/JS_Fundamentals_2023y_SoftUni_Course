function equalSums(arr) {
    let arrLength = arr.length;
    let isExists = false;
    let index = 'no';

    for (let i = 0; i < arrLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = arrLength - 1; k > i; k--) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            isExists = true;
            index = i;
            break;
        }
    }
    console.log(index);
}

equalSums([1, 2, 3, 3]);  // 2
equalSums([1, 2]);  // no
equalSums([1]);  // 0
equalSums([1, 2, 3]);   //  no
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);  // 3