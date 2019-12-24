js::

js is a scripting language used to make webpages alive and to be interactive with the web user.
 Javascript was introduced by Brendan Eich a Netscape employee. 
Javascript at its development phase was called Mocha and was first shipped with Netscape Navigator 2.0 as LiveScript. 
Finally, when Netscape Navigator 2.0 Beta 3 was released it was given the name Javascript. 
ES::
In 1996,a standard organization called ECMA (European Computer Manufacturers Association) International carved out standard specification called ECMAScript (ES) which all browser vendors could implement. 
Javascript is the most well-known implementations of ES.
          Others like ActionScript (from Macromedia/Adobe Systems) and JScript (from Microsoft) are also implementations of ES.
List of Version from ES:
---Till date, ES has published nine versions and the latest one (9th version) was published in the year 2018.
ES1 1997
ES2 1998
ES3 1999
ES4 Abandoned
ES5 2009
ES6 2015
ES7 2016
ES8 2017
ES9 2018
ECMA Script's first three versions- ES1, ES2, ES3 were yearly updates whereas, ES4 was never released and later ES5 is released.

ES5::

1.'use strict' directive:
 Earlier versions of js allowed to use undeclared variables but in ES5 by using 'use strict' it reports an error.
Ex::
`use strict`
  x = 25; //leads to error as x is not defined
2.isArray():
This method checks if the object is an array or not and returns the result in true or false.
Ex::
let arr = [7,3,9];
let a = 1;
console.log(Array.isArray(arr));  //returns true
console.log(Array.isArray(a));  //returns false
3.forEach:
It executes the function for every element found in the array.
Ex::
let arr = [3,7,5,1];
arr.forEach(function(ele) {
       console.log(ele);                 //print all elements in an array
});
 
4.map():
The map() method creates a new array by mapping every element of the array (on which the map is used.
Ex::
let arr = [8,9,0];
let newArr = arr.map(function(ele) {
          return ele*ele;
}
console.log(newArr);   //prints arr of squares
 
5.filter():
It creates a new array that contains elements which got filtered by making array elements pass some condition.
Ex::
let arr = ["violet","green","yellow","pink"];
const result = arr.filter(arr => arr.length > 5);
console.log(result);    // ["violet","yellow"]
6.reduce():
It applies a function to each element in an array and reduces the array to a single element.
Ex::
const arr = [9,10,5,4];
const result = arr.reduce((total,currentValue) {
console.log(currentValue);   // 10,5,4,9
return total+currentValue;
});
console.log(result);  // 28
7.every():
This method checks a condition with every element of an array and if every element satisfies then returns true if at least one element doesn’t satisfy the condition then returns false.
Ex:
const arr = [5,10,15,20,25];
let ret = arr.every(val => {
          return val > 100;
});
console.log(ret); // false

8.some(): 
It is same as every() method wherein some() checks for at least one element that gets satisfied with the condition and if found returns true and if none satisfies then false.

Ex:
cons arr = [5,10,1,20,25];
let ret = arr.some(val => {
         return val > 24
 });
console.log(ret);  // true 

9.indexOf(): 
Returns the index of the first match in an array. If not found then returns -1.
Ex:
var arr = ["sweety","lucky","priya"];
console.log(arr.indexOf("lucky"));  // 1

10.lastIndexOf(): 
Same as indexOf but checks and returns from the other end of an array.
Ex:
var arr = ["cadberry","kitkat","perk"];
console.log(arr.lastIndexOf("cadberry"));   // 2
 JSON SUPPORT:
11.parse(): 
It parses a JSON string that is like an object.
Ex: 
let jsonString = '{"a": 1, "b": 2}';
let obj = JSON.parse(jsonString);
console.log(obj.a);  // 1

12.stringify(): 
This method converts an object to a JSON string.
Ex:
console.log(JSON.stringfy({ x: 5, y: 6}));   // "{"x":5,"y":6}"
NEW METHODS IN A DATE
13.now(): 
method returns the number of milliseconds elapsed since 01-Jan-1970 UTC.
Ex: 
var date = Date.now();
console.log(date);

14.valueOf(): 
It returns the primitive value of a date object.
Ex: 
var date -= new Date();
var d = date.valueOf();
15. GETTERS AND SETTERS:
The get method returns the value of a variable, and the set method sets the value of the variable.
16. PROPERTY METHODS
Object.defineProperty(): 
This method lets the user define the property of an object and/or change its value.

ES6::

 ---ECMAScript, or ES6, was published in June 2015. It was subsequently renamed to ECMAScript 2015. 
1.LET & CONST:
Till ES5, JS has only function scope and global scope with the introduction of let keyword in ES6, JS can now have block scope.
***let value can be updated but not re-declared
let a = 12;
 a = 15;
console.log(a);   // 15
const a = 5;
console.log(a);   // 5
2.for...of :
an alternative for both for...in and forEach() and loops iterable data structures like Arrays, Maps, Sets, and strings.
Ex:
 const arr = ['one','two','three'];
for(const a for arr) {
console.log(a);
}

3.DEFAULT PARAMETERS:
Provides default values to function parameters if no value or undefined is passed.
Ex:
 function fun(a,b,c=0) {
   console.log('a: ');
   console.log('b: ');
   console.log('c: ');
}
fun(2,3);      // a:2 b:3 c:0
fun(1,2,3);  // a:1 b:2 c:3

4.REST OPERATOR:
Rest Operator is used to handle function parameters. It uses three dots as its syntax (i.e …).
Ex:
 function fun(a,...b) {
        console.log('a: ' + a + 'b: ' + b);   // a:1 b: 2,3,4
}
fun(1,2,3,4);

5.SPREAD OPERATOR:
Spread Operator is used with arrays and its syntax is exactly the same as that of Rest Operator (ie …). It is used to split the contents of an array.
Ex: 
       let arr1 = [1,2,3];
       let arr2 = [4,5];
       let newArr = [...arr1,...arr2];
       console.log(newArr); //  [1,2,3,4,5]

6.DESTRUCTURING:
Destructuring helps in unpacking values from an array or an object.
Ex:
      const arr = [1,2];
      const [x,y] = arr;
      console.log('x: ' + x + 'y: ' + y);
       
7.TEMPLATE LITERALS/STRINGS:
It allows embedded expressions, which makes print statements easy.
Ex: 
let a = 1;
let b = 2;
let c = 3;
console.log('a: ' + a + 'b: ' + b + 'c: ' + c);    // a: 1 b: 2 c: 3
console.log(`a: ${a} b: ${b} c: ${c}`);    // a: 1 b: 2 c: 3

8.ARROW FUNCTIONS:
Arrow Functions use => as its token and so are also called as Fat Arrow Functions. They are one line functions and are much like Lambda functions in programming languages like Java 8 and Python. Prior to =>, JS has a function keyword.
Ex: const val = (x,y) => {
      return x*y;
}
console.log(val(2,4));    // 8

9.PROMISES:
Promises are introduced in ES6 to handle Asynchronous Programming in a more elegant way. Before Promises, async calls were handled by Callbacks. Promises resolved the Call Back Hell.
Ex: 
let myPromise = new Promise((resolve,reject) => {
    let theDecider = true;
      if(theDecider) {
            resolve("success");
}
     else {
             reject("failure");
}
});
myPromise.then(res => {
     console.log('res: ',res);            // res: success
});
myPromise.catch(err => {
      console.log('err: ',err);
});  
                               
10.CLASSES:
The Objects in Javascript are based on Prototypes and follows Prototypal Inheritance. But in ES6 the keyword class is introduced that makes the approach very easy.
Ex:
    class Demo {
      constructor(message) {
      this.message = message;
    }
    demoMethod() {
    console.log(this.message);
    }
 }
let user = new Demo("ES6 Classes");
user.demoMethod();
Other features in ES6 include:
Set, WeakSet, Map, WeakMap
Generators
Symbols
Unicode
Modules
Proxies
Built-Ins
Binary and Octal
Reflect
Tail Call Optimization

ES7:

ES7 or ECMAScript 2016 was released in the year 2016. This version gives suitable alternatives to already used functionalities.
1.EXPONENTIATION OPERATOR (**):
ES7 added an exponentiation operator (**) to already JavaScript supported arithmetic operations like +,-,*. This operator raises the first operand to the power second operand. 
Ex:
   console.log(3**2);  // 3 to the power of 2,dispalys 9
2.INCLUDES(): 
Returns true if an array includes a value, if not returns false.
Ex:
    let animals = ["cat","lion","donkey"];
    console.log(animals.includes("donkey");  // returns true

