function maxSequenceEqualElements(array){
    // finds the longest sequence of equal elements in an array of numbers
    // if several longest sequences exist, print the leftmost one.

    let arrayLength = array.length;
    let maxSequence = [];

    for (let i = 0; i < arrayLength; i++) {
        let sequence = [];
        for (let j = i; j < arrayLength; j++) {
            if(array[i] === array[j]){
                sequence.push(array[i]);
            } else {
                break;
            }
        }

        if(sequence.length > maxSequence.length){
            maxSequence = [];
            for (let element of sequence) {
                maxSequence.push(element);
            }
        }
    }

    console.log(maxSequence.join(" "));
}

maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // 2 2 2 
maxSequenceEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);  // 1 1 1
maxSequenceEqualElements([4, 4, 4, 4]);  //  4 4 4 4
maxSequenceEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]); //  1  1