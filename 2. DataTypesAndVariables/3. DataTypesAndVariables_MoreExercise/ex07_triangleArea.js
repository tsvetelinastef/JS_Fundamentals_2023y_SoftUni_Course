function triangleArea(firstNumber, secondNumber, thirdNumber) {
    let halfPerimeter = (firstNumber + secondNumber + thirdNumber)/2;
    // √[s(s – a)(s – b)(s – c)],
    let notSquared = halfPerimeter * ((halfPerimeter - firstNumber) * (halfPerimeter - secondNumber)* (halfPerimeter - thirdNumber));
    let area = Math.sqrt(notSquared);
    console.log(area);
}

triangleArea(2, 3.5, 4); // 3. 4994419197923547
triangleArea(3, 5.5, 4); // 5.854685623498498