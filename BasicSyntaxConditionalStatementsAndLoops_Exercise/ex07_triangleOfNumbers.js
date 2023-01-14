function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {  // let row = 0; row < n; row++
      let buff = "";
      for (let col = 0; col < row; col++) {  // col < n
        buff += row + " ";
      }
      console.log(buff);
    }
}
//triangleOfNumbers(3);
triangleOfNumbers(5);
//triangleOfNumbers(6);

// function that receives a single number- n and prints a triangle from 1 - n?  
/*
for (let i = 1; i <= number; i++) {
        let eachLine = '';

        for (let j = 1; j <= i; j++) {
            eachLine += j + " ";
        }
        eachLine = eachLine.trim();
        console.log(eachLine);
    }

 */

