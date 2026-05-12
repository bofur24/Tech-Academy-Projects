// Global variable
var number_1 = 10;

function myFunction() {
    // Local variable
    var number_2 = 20;
    console.log("Inside the function: " + number_1); // Accessing global variable
    console.log("Inside the function: " + number_2); // Accessing local variable
}