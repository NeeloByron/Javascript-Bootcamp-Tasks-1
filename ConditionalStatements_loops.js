// Conditional Statements & Loops

//Exercise 1: Temperature check
//1. Write a code using if else statement to check the temperature and print a message based on the following conditions:
let temperature = 3;

//a. if the temperature is below 0, print "It's freezing!"
if (temperature < 0) {
    console.log("It's freezing!");}
//b. if the temperature is between 0 and 15, print "It's cold"
  else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold"); }
//c. if the temperature is between 16 and 25, print "It's mild."
  else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");}
//d. if the temperature is above 25, print "It's warm."
   else {
    console.log("It's warm.")
   }

//2. Re-write the code using switch statements.
let SwitchTemperature = -1;
//a. if the temperature is below 0, print "It's freezing!"
switch (true) { case (SwitchTemperature < 0):
        console.log("It's freezing!");
        break;
//b. if the temperature is between 0 and 15, print "It's cold"
    case (SwitchTemperature >= 0 && SwitchTemperature <= 15):
        console.log("It's cold.");
        break;
//c. if the temperature is between 16 and 25, print "It's mild."
    case (SwitchTemperature >= 16 && SwitchTemperature <= 25):
        console.log("It's mild.");
        default:
            console.log("It's warm.");
}

//Exercise 2: Divisibility Check
//1. Write a code using if else statement to check if a number is divisible by 2, 3 or both:
let number = 8;

//a. If the number is divisible both by 2 and 3, print 
//i. "Divisible by both."
if (number % 2 == 0 && number % 3 == 0) {
    console.log('Divisible by both.');
}
//b. *if the number is divisible by only 2, print"Divisible by 2."
else if (number % 2 == 0) {
    console.log('Divisible by 2');
}
//c. *if the number is divisible by only 3, print"Divisible by 3."
else if (number % 3 == 0) {
    console.log('Divisible by 3');
}
//d. *if the number is not divisible by either, print"Not divisible by 2 or 3."
else {
    console.log('Not divisible by 2 or 3');
}

//2. Re-write the code using switch statements
let SwitchNumber = 12;

//a. If the number is divisible both by 2 and 3, print 
//i. "Divisible by both."
switch (true) {
    case (SwitchNumber % 2 == 0 && SwitchNumber % 3 == 0):
        console.log('Divisible by both.');
        break;
//b. *if the number is divisible by only 2, print"Divisible by 2."
    case (SwitchNumber % 2 == 0):
        console.log('Divisible by 2.');
        break;
//c. *if the number is divisible by only 3, print"Divisible by 3."
    case (SwitchNumber % 3 == 0):
        console.log('Divisible by 3.');
        break;
//d. *if the number is not divisible by either, print"Not divisible by 2 or 3."
    default:
        console.log('Not divisible by 2 or 3.');
}

//Exercise 3: For loops
//1. Print numbers from 1 to 10
for (let x = 1; x <= 10; x++) {
    console.log(x);
}

//2. Print  all even numbers between 1 and 20
for (let x = 2;x <= 20; x += 2) {
    console.log(x);
}

//3. Calculate the sum of all numbers from 1 to 100 and print the result. "+="
let sum = 0;
for (let x = 1;x <= 100; x++) {
    sum += x;
}
console.log(sum);

//4. Const numbers = [1,2,3,4,5]. Given the array of numbers. print each element to console.
const numbers = [1,2,3,4,5];
for (let x = 0; x < numbers.length; x++){
    console.log(numbers[x]);
}

//5. Const numbers = [3,7,2,5,10,6]. Given the array of numbers. find and print the largest numbers number.
const Arraynumbers = [3,7,5,10,6];
let largest = Arraynumbers[0];
for (let x = 1;x < Arraynumbers.length; x++) {
    if (Arraynumbers[x] > largest) {
        largest = Arraynumbers[x];
    }
}
console.log(largest);

//Execerise 4: While loops
//1. Print numbers from 1 to 10.
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

//2. Print all the even numbers between 1 and 20.
let a = 1;
while (a <= 20){
    if (a % 2 == 0){
        console.log(a);
    }
    a++;
}

//3. Calculate the sum of all numbers from 1 to 100 and print the result.
let total = 0;
let y = 1;
while (y <= 100) {
    total += i;
    y++;
}
console.log(total);

//4. Print all multiple of 5 less than 50.
let z = 1;
while (z < 50) {
    if (z % 5 == 0) {
        console.log(z);
    }
    z++;
}
console.log(z);

//Execerise 5: Do While loops
//1. Print numbers from 1 to 1o.
let b = 1;
do {
    console.log(b);
    b++;
}while (b <= 10);

//2. Calculate the sum of all numbers from 1 to 100 and print the result.
let Add = 0;
let c = 1;
do {
    sum += c;
    c++;
}while (c <= 100);
console.log(Add);

//3. Prompt the user to enter a number greater than 10. keep asking until they enter a valid number.
let personNum;
const prompt = require('prompt-sync')({sigint: true });
do {
    personNum = parseInt(prompt("Enter a number greater than 10:"));
}while (isNaN(personNum) || personNum <= 10);
console.log(`Thank you! You entered ${personNum}`);

//4. Create a simple guessing game where the user guess a number between 1 and 10. The game continues until user guesses the correct number.
const readline = require("readline");
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

const secretNum = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

do {
    guess = parseInt(prompt("Guess the number (1-10):"));
    attempts++;
    if (guess === secretNum) {
        console.log(`Correct! You guess it in ${attempts} attempts.`);
    } else if (guess > secretNum) {
        console.log("Too high! Try again.");
        } else if (guess < secretNum) {
            console.log("Too low! Try again.");
        }
    } while (guess !== secretNum);
   