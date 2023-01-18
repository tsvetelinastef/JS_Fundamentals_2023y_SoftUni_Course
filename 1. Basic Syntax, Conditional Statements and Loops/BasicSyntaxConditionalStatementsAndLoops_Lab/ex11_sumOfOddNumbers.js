function sumOfOddNumbers(number){
  let sum = 0;
  //let index = number;

  let i = 1;
  while (number > 0) {  // index > 0
    if (i % 2 !== 0) {
      sum += i;
      number--;
      console.log(i);
    }
    i++;
  }
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
//sumOfOddNumbers(3);