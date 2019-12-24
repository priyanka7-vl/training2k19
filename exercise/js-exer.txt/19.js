19.Write a javascript function to delete particular object from array and add new object at particular position.

console.log("To delete particular object from array:");
const users = [
    { 
        id: 7, name: 'priyanka' 
    },
    { 
        id: 29, name: 'saranya' 
    },
    { 
        id: 300, name: 'kishore' 
    }
];
  
const rmid = 29;
const  filterusers = users.filter((item) => item.id !== rmid);
console.log(filterusers);

////////////////////

console.log(" ");
console.log("To add an element at particular position:");
console.log(" ");
let arr = [];
arr[0] = "Vamsi";
arr[1] = "Sushanth";
arr[2] = "Rithvik";
arr[3] = "Nancy";
arr[4] = "Mahanth";
console.log(arr.join());
arr.splice(2, 0, "vimala");
console.log(arr.join());
