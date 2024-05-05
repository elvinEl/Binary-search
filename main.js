function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let arr = [];
for (let i = 0; i <= 100; i++) {
  arr.push(i);
}
let target = 3; 
let result = binarySearch(arr, target);

if (result !== -1) {
  console.log("Target value found index:", result);
} else {
  console.log("Target value not found.");
}
