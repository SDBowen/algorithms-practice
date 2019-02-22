// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  let countOfPositives = 0;
  let sumOfNegatives = 0;

  input.forEach(num => {
    if (num > 0) {
      countOfPositives += 1;
    } else {
      sumOfNegatives += num;
    }
  });

  return [countOfPositives, sumOfNegatives];
}
