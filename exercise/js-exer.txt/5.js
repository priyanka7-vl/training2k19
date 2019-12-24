5.Write a javascript program to computte the union of two arrays and write a javascript function to find the differnce of two arrays.

console.log("To find union of two arrays:");
function union(arr1, arr2) {
        if ((arr1 == null) || (arr2 == null)) 
        return 0;
        const obj = {};
        for (let i = arr1.length-1; i >= 0; -- i)
        obj[arr1[i]] = arr1[i];
        for (let i = arr2.length-1; i >= 0; -- i)
        obj[arr2[i]] = arr2[i];
        const res = [];
        for (const n in obj)
        {
        if (obj.hasOwnProperty(n)) 
            res.push(obj[n]);
        }
        return res;
  }
  console.log(union([7,10,4,3], [100, 2, 1, 10,7]));

  //////////////////////////////////

console.log(" ");
  console.log("To find differnce of two arrays:");
  function diff(array1, array2) {
        const temp = [];
        array1 = array1.toString().split(',').map(Number);
        array2 = array2.toString().split(',').map(Number);
        
        for (let i in array1) {
        if(!array2.includes(array1[i])) temp.push(array1[i]);
        }
        for(let i in array2) {
        if(!array1.includes(array2[i])) temp.push(array2[i]);
        }
        return temp.sort((a,b) => a-b);
  }   
    console.log(diff([7,1,0,29,10], [2, 1, 10]));
    console.log(diff([0,9,32],[50,87,9]));  
