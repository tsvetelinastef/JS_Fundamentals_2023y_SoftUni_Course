function amazingNumbers(number){
    let numberToStr = String(number);
    let sum = 0;

    for(let i = 0; i < numberToStr.length; i++){
        let currentNumber = Number(numberToStr[i]);
        sum += currentNumber;
    }

    console.log(sum % 10 === 9 ? `${numberToStr} Amazing? True` : 
    `${numberToStr} Amazing? False`);
}

amazingNumbers(1233); // 1233 Amazing? True
amazingNumbers(999);  // 999 Amazing? False

/* 
function solve(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Numer(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
*/