// Task1. Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.

const arr = [1, 26, 1, 0, 32];
function largestAdjacentElementsProduct(arr) {
  let product = 0;
  let bigproduct = 0;

  for (let i = 0; i < arr.length; i++) {
    product = arr[i] * arr[i + 1];
    if (product > bigproduct) {
      bigproduct = product;
    }
  }
  return bigproduct;
}
console.log(largestAdjacentElementsProduct(arr));

// Task2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.

const arr = [1, 2, 5, 9];
function countOfMissingNumbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let allNumbers = max - min + 1;

  return allNumbers - arr.length;
}
console.log(countOfMissingNumbers(arr));

// Task 3. Implement built in array sort method using bubble sort algorithm.

Array.prototype.mySort = function(f) {
  let swapped = true;
  let temp = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return this;
}
let asd = [6,8,4,2,9];
asd.mySort()
console.log(asd)

// Task 4. Insert a n positive number. Print the n-st prime number.

function findNthPrimeNumber(number) {
  let numberCount = 2;
  let countPrime = 0;

  while (countPrime < number) {
    if (isPrime(numberCount)) {
      countPrime++;
    }
    numberCount++;
  }

  return numberCount - 1;
}

function isPrime(anyNumber) {
  if (anyNumber < 2) {
    return false;
  }
  if (anyNumber === 2) {
    return true;
  }
  if (anyNumber % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(anyNumber); i += 2) {
    if (anyNumber % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(findNthPrimeNumber(4));
