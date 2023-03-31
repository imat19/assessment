function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0]; 
  const left = []; 
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot){
        left.push(arr[i]) 
    }else{
        right.push(arr[i]);
    } 
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

const unsorted = [10, 9, 8, 7, 6, 5];
const sorted = quicksort(unsorted);

console.log(sorted);
