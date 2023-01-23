function reverseString(text){
    let currentChar = "";
    for (let i = text.length - 1; i >= 0; i--) {
        currentChar += text[i];
    }
    console.log(currentChar);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");