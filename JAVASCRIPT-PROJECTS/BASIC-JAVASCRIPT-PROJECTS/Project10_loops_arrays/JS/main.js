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
