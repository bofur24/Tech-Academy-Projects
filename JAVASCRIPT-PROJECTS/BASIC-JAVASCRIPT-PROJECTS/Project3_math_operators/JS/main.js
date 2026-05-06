// Math Operators JavaScript

// Addition Operator
function addition() {
    var add = 5 + 10;
    document.getElementById("Add").innerHTML = "5 + 10 = " + add;
}

// Subtraction Operator
function subtraction() {
    var sub = 10 - 5;
    document.getElementById("Sub").innerHTML = "10 - 5 = " + sub;
}

// Multiplication Operator
function multiplication() {
    var mult = 5 * 10;
    document.getElementById("Mult").innerHTML = "5 * 10 = " + mult;
}

// Division Operator
function division() {
    var div = 10 / 5;
    document.getElementById("Div").innerHTML = "10 / 5 = " + div;
}

// Multiple Math Operators
function MultipleMath() {
    var multiple = (5 + 10) * 2 / 5 - 3;
    document.getElementById("Multiple").innerHTML = "5 plus 10, multiplied by 2, divided by 5 and then subtracted by 3 equals " + multiple;
}

// Modulus Operator
function modulus() {
    var mod = 10 % 3;
    document.getElementById("Mod").innerHTML = "When you divide 10 by 3 you have a remainder of: " + mod;
}

// Negation Operator
function negation() {
    var x = 10;
    document.getElementById("Neg").innerHTML = "The negation of 10 is: " + -x;
}

// Increment Operator
function increment() {
    var x = 5;
    x++;
    document.getElementById("Inc").innerHTML = "The increment of 5 is: " + x;
}

// Decrement Operator
function decrement() {
    var x = 5;
    x--;
    document.getElementById("Dec").innerHTML = "The decrement of 5 is: " + x;
}

// Random Number Generator
function random() {
    var rand = Math.floor(Math.random() * 11);
    document.getElementById("Random").innerHTML = "Random number between 0 and 10: " + rand;
}
