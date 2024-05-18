function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  const numbers = [5, 6, 7, 8, 9];
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers); // Output will be [15, 36, 21, 64, 27]

  function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
      if (numbers[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  const stringArray = ['the ', 'best country ', 'in the world'];
  const numberArray = [3, 6, 9]; // Assuming this is the output from processArray
  const formattedArray = formatArrayStrings(stringArray, numberArray);
  console.log(formattedArray); // Output: ['the ', 'BEST COUNTRY ', 'in the world']
