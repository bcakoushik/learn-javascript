// JavaScript has two main categories of data types: Primitive Types and Non-Primitive

//  1. Primitive Data Type: 

//    1.A -  Number (Integer and Float boths)

let number = 20
let price = 25.25

// 1.B - String (single and double quotes both are allowed for string)
let greet = "Hello"
let name = 'krishna'

// 1.C Boolean(true/false)

let isLoggedIn =true 

//1.D - Undefined (declare the variable but does not declare the value of this variables called undefined)

let age;

// 1.E - null(Represents no value or empty value)
let user = null

// 1.F - Symbol (Used to create unique identifiers (mostly used in advanced scenarios like object property keys))

let id = Symbol('id');

// we use typeof operator to find the data type of a variable

console.table([typeof(number), typeof(price), typeof(greet), typeof(name), typeof(isLoggedIn), typeof(age), typeof(user), typeof(id) ])

// 2. Non Primitive Data Type 

// 2.A - object

let person = {
  name: "Alice",
  age: 30
};
// 2.B - Array
let numbers = [1, 2, 3, 4, 5];
// 2.C - Function
function greets() {
  return "hello"
}
// 2.D - Date
let today = new Date();
// 2.E - RegExp
let regex = new RegExp('abc');
// 2.F - Map
let map = new Map();
// 2.G - Set
let set = new Set();
// 2.H - WeakMap
let weakMap = new WeakMap();

console.table(
  [typeof(person), typeof(numbers), typeof(greets), typeof(today), typeof(regex), typeof(map
    ), typeof(set), typeof(weakMap)]
)
