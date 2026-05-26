//Data Types & Operators

//Exercise 1: Numbers
//1. Declare a number variable and assign an integer to it. Declare a variable and assign it a floating number
let integer = 12;
let floatingNumber = 3;
//2. Perform addition, substraction, multiplication, division, modulus and exponentiation with a number variable and another number.
let addition = integer + floatingNumber;
let substraction = integer - floatingNumber;
let multiplication = integer * floatingNumber;
let division = integer / floatingNumber;
let modulus = integer % floatingNumber;
let exponentiation = integer ** floatingNumber;
//3. Print all your variables.
console.log('Addition', addition)
console.log('Substraction:',substraction);
console.log('Multiplication:', multiplication);
console.log('Division:', division)
console.log('Modulus:', modulus);
console.log('Exponentiation', exponentiation);

//Exercise 2: Boolean and Operators
//1. Use comparison operators to compare two numbers and store the results in boolean variables.
let a = 10;
let b = 5;

let isGreater = a > b;
let isEqual = a == b;
let isLess = a < b;
console.log(isGreater, isEqual, isLess)

//2. Declare two variables x and y with the value 8 and 12 
let x = 8
let y = 12;

//b. is x greater than y?
let xGreaterThanY = x > y;
console.log(`Is x greater than y?   ${xGreaterThanY}`);

//c. is x less than or equal to y?
let xLessOrEqualy = x <= y;
console.log(`Is x less than or equal y?  ${xLessOrEqualy}`);

//d. is x equal to y?
let xEqualToY = x === y;
console.log(`Is x equal to y?  ${xEqualToY}`);

//e. is x not equal to y?
let xNotEqualToY = x !== y;
console.log(`Is x not equal to y?   ${xNotEqualToY}`);

//3. Declare the variable a and b with true and false, determine and print the result of the following logic operations:
a = true;
b = false;

//a. AND operator (&&) 
let ANDResult = a && b;
console.log(`a and b:  ${ANDResult}`);

//b. OR operator (||)
let ORResult = a || b;
console.log(`a OR b: ${ORResult}`);

//C. NOT operator (!)
let NOTResult = !a;
console.log(`Not a: ${NOTResult}`);

//4. Declare variable p and assign it a value of 10. Use the following operators to modify the value of p with any number and print the result eact time:
let p = 10;
//a. +=
p += 5;
console.log(`After p += 5: ${p}`);

//b. -=
p -= 5;
console.log(`After p -= 5: ${p}`);

//c. *=
p *= 5;
console.log(`After p *= 5: ${p}`);

//d. /=
p /= 5;
console.log(`After p /= 5: ${p}`);

//e. %=
p %= 5;
console.log(`After p %= 5: ${p}` );