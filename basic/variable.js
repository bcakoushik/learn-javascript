// // What is Variable?
// A variable is like a container or a box that stores data.
// It holds values (like numbers, strings, booleans, etc.) so you can reuse or manipulate them later in your code.
const studentId = 123456  // Declared with const — cannot be reassigned later.

 // var can be redeclared and reassigned, even in the same scope.
 //var is function-scoped, and not block-scoped, which can lead to issues.

var studentName = "Koushik Saha" 

// let is block-scoped and cannot be redeclared in the same scope.
// It can be reassigned
let studentEmail = "koushik@gmail.com"

// No keyword = implicitly declared in the global scope.
// Bad practice — always use let, const, or var
studentMobile = "1234567890"
var studentAddress;

studentid = 1254556
studentName = "Deep"
studentEmail = "abc@gmail.com"
console.table([studentId, studentName, studentEmail, studentMobile, studentAddress]);
// console.log(studentEmail)