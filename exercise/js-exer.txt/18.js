18.Write a javascript function to print array of object in ascending order on age,descending order on name.

console.log("Sort by Age:");
let students = [];
students[0] = {name:"Sweety", age:22};
students[1] = {name:"Priyanka", age:16};
students[2] = {name:"Sravya", age:58};
students[3] = {name:"Radha", age:62};
students[4] = {name:"Kishore", age:24};
students[5] = {name:"lohita", age:70};
students[6] = {name:"Manju", age:16};
students[7] = {name:"Asin", age:40};
students[8] = {name:"Chitra", age:37};
students[9] = {name:"harshini", age:25};
let age_res = students.sort(function(a, b){
    return a.age-b.age;
});
console.log(age_res);
console.log("Sort by Names:");
let name_res = students.sort(function(a, b){
    let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB) 
        return -1;
    if (nameA > nameB)
        return 1;
    return 0;
});
console.log(name_res);
