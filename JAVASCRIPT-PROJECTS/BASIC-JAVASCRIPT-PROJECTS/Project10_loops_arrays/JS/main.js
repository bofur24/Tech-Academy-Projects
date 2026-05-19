// While Loop
function Call_Loop() {
    var i = 0;
    while (i < 10) {
        document.getElementById("Loop").innerHTML += "The number is " + i + "<br>";
        i++;
    }
}

// String Length
function Str_Length() {
    var str = "Hello World!";
    document.getElementById("String").innerHTML = str;
    var n = str.length;
    document.getElementById("Length").innerHTML = "The length of the string is: " + n;
}

// For Loop
var Instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for(Y =0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array
function array_Function() {
    var Gundam_Pilots = [];
    Gundam_Pilots[0] = "Amuro Ray";
    Gundam_Pilots[1] = "Char Aznable";
    Gundam_Pilots[2] = "Kamille Bidan";
    Gundam_Pilots[3] = "Judau Ashta";
    document.getElementById("Array").innerHTML = "One of the most famous Gundam pilots is: " + Gundam_Pilots[1];
}

// Constant
function constant_Function() {
    const Musical_Instrument = {type:"Gutar", brand:"Fender", color:"Red"};
    Musical_Instrument.color = "Blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


// Let and var scope
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Return statement
document.getElementById("Return").innerHTML = myFunction("John");

function myFunction(name) {
    return "Hello " + name;
}

// Object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    description: function() {
        return "The car is a " + this.year + " " + this.make + " " + this.model;        
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

// Break statement
function break_loop() {
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        document.getElementById("Break_Result").innerHTML += "The number is " + i + "<br>";
    }
}

// Continue statement
function continue_loop() {
    for (var i = 0; i < 10; i++) {
        if (i == 5) {
            continue;
        }
        document.getElementById("Continue_Result").innerHTML += "The number is " + i + "<br>";
    }
}
