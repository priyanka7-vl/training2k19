15.Write a pattern that matches e-mail addresses.

function validateEmail(email) 
{ 
 var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(email)){
 return true; 
}
 else{
 return false;
 } 
} 

console.log(validateEmail("priya@rapidops.com"));
console.log(validateEmail("1234567"));
console.log(validateEmail("priya"));
