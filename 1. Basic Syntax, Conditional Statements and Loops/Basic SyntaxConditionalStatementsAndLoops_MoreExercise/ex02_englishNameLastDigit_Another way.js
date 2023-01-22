function englishNameOfTheLastDigit(num) {
    // Write a function that returns the English name of the last digit of a given number. Write a program that receives a 
    // number and prints the returned value from this function
    // Input Output
    // 512     two
    // 1       one
    // 1643   three


    num = String(num);      // making the number string..... , because they want us to input number , but output - string 
    let totalDigits = Number(num.length);       // again making the string - number, as we take the lenght of the number
    let currentDigit = num.charAt(totalDigits - 1);   // number - lenght... to take last number 
    let name = "";
  
    switch (currentDigit) {
      case "0":
        name = "zero";
        break;
      case "1":
        name = "one";
        break;
      case "2":
        name = "two";
        break;
      case "3":
        name = "three";
        break;
      case "4":
        name = "four";
        break;
      case "5":
        name = "five";
        break;
      case "6":
        name = "six";
        break;
      case "7":
        name = "seven";
        break;
      case "8":
        name = "eight";
        break;
      case "9":
        name = "nine";
    }
    console.log(name);
  }

  englishNameOfTheLastDigit(512);
  englishNameOfTheLastDigit(1);
  englishNameOfTheLastDigit(1643);
  