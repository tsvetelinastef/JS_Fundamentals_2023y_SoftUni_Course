function rotateArray(array){
    let tempArray = array.slice();
    let rotations = tempArray.pop();

    for (let i = 0; i < rotations; i++) {
        let tempElement = tempArray.pop();
        tempArray.unshift(tempElement);
    }
    console.log(tempArray.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);  // 3 4 1 2 
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);  // Orange Coconut Apple Banana