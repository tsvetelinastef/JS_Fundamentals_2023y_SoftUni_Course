function reversePlace(arr) {
    // to reverse the array without creating a new array.

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

        const element = arr[i];

    }
    console.log(arr.join(' '));
}

reversePlace(['a', 'b', 'c', 'd', 'e']); // e d c b a
reversePlace(['abc', 'def', 'hig', 'klm', 'nop']);  // nop klm hig def abc
reversePlace(['33', '123', '0', 'dd']); // dd 0 123 33

/*
let arr = [1, 2, 3];
for(){
    console,log(element);
}

for(let index = 0; index < array.length; index++){
    const element = aray[index];
}
------------------------------------------------------------------
for(let i = 0; i < arr.length / 2; i++){
       // swapElements(arr, i, arr.length - 1 - i);
       let firstElement = arr[i];
        let lastElement = arr[arr.length - 1 - i];
        arr[i] = lastElement;
        arr[arr.length - 1 - i] = firstElement;
    }
    arr[arr.length - 1 - i] = firstElement;
}
console.log(arr);

reverseInPlace([10, 20, 30, 40]);

------------------------------------------------------------------

// console.log(arr.join(' '));
// function swapElements(arr, i, j){
//.......
//}

*/