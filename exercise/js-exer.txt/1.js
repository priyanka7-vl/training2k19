1.Write a Javascript function to get the first and last element of an array.Passing a parameter 'n' will return the first 'n' elements of array and last 'n' elements of array.

let arr = ["java","c","python","php","javascript"];
let firstele = arr[0];
let lastele = arr[arr.length-1];
console.log("First Element is:" + firstele);
console.log("Last Element is:" + lastele);

///////////////////

console.log(" ");
console.log("To display first 'n' elements:");
let first =  (array, n) => {
    if (array == null) 
      return 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
      return array.slice(0, n);
};
console.log(first([1, 3, 7, 0, -5]));
console.log(first([],2));
console.log(first([1, 3, 7, 0, -5],4));
console.log(first([1, 3, 7, 0, -5],8));
console.log(first([1, 3, 7, 0, -5],-2));

////////////////////

console.log("  ");
console.log("To display last 'n' elements:");
let last = (array, n) => {
    if (array == null) 
      return 0;
    if (n == null) 
      return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
  };
console.log(last([1, 3, 7, 0, -5]));
console.log(last([1, 3, 7, 0, -5], 3));
console.log(last([1, 3, 7, 0, -5], 6));
console.log(last([],2));
