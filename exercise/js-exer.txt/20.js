let input = [
    {
        id: 1, 
        name: "priya", 
        age: 23, 
        hobbies:["dancing","cooking"]
    }, 
    {
        id: 2, 
        name: "kumar", 
        age: 40, 
        hobbies:["singing","cooking"]
    },
    {
        id: 3, 
        name: "virat", 
        age: 37, 
        hobbies:["reading"]
    },
    {
        id: 4, 
        name: "lucky", 
        age: 62, 
        hobbies:["painting","reading"]
    },
    {
        id: 5, 
        name: "kunal", 
        age: 50, 
        hobbies:["dancing"]
    },
];

let hobbies = [];
let result = {};
input.forEach(person => {
    hobbies = [...hobbies,...person.hobbies];
    hobbies = [...new Set(hobbies)];
});
for(let hobby of hobbies) {
    let hobbieHolderNames = input.filter(val => val.hobbies.includes(hobby)).map((match_name => match_name.name));
    result[hobby] = hobbieHolderNames;
}
console.log(result);
