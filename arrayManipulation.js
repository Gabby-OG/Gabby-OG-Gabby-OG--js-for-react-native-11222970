function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  const numbers = [5, 6, 7, 8, 9];
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers); // Output will be [15, 36, 21, 64, 27]