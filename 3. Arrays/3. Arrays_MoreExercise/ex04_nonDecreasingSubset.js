function extractNonDecreasingSubset(numbers) {
    let result = [];
    let currentBiggest = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] >= currentBiggest) {
        result.push(currentBiggest);
        currentBiggest = numbers[i];
      }
    }
    
    result.push(currentBiggest);
    return result.join(' ');
  }

console.log(nonDecreasingSubject([ 1, 3, 8, 4, 10, 12, 3, 2, 24]));
//nonDecreasingSubject([ 1, 2, 3, 4]);
//nonDecreasingSubject([ 20, 3, 2, 15, 6, 1]);