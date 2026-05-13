// Global variable
var number_1 = 10;

function myFunction() {
    // Local variable
    var number_2 = 20;
    console.log("Inside the function: " + number_1); // Accessing global variable
    console.log("Inside the function: " + number_2); // Accessing local variable
}

// This Function demonstrates conditional statement
function myCondition() {
    if(new Date().getHours() < 18) {
        document.getElementById("condition").innerHTML = "Good day!";
    }
}

// This Function demonstrates the use of prompt and if-else statement
function AgeCheck() {
    var age = prompt("Please enter your age:");
    if (age >= 18) {
        document.getElementById("ageResult").innerHTML = "You are over 18.";
    } else {
        document.getElementById("ageResult").innerHTML = "You are not over 18.";
    }
} 

// This Function demonstrates the use of if-else statement to check height
function checkHeight() {
    var height = document.getElementById("height").value;
    if (height >= 54) {
        document.getElementById("heightMessage").innerHTML = "You are tall enough.";
    } else {
        document.getElementById("heightMessage").innerHTML = "You are not tall enough.";
    }
} 

// This Function demonstrates the use of if-else statement to determine time of day
function Time_function() {
    var time = new Date().getHours();
    var reply;
        if (time < 12 == time > 0) {
            reply = "It is morning time!";  
        }
        else if (time >= 12 == time < 18) {
            reply = "It is afternoon.";
        }
        else {
            reply = "It is evening time.";
        }   
    document.getElementById("timeOfDay").innerHTML = reply;
}


