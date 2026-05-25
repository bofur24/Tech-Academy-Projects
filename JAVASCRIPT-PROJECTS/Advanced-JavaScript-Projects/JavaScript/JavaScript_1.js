
// switch statement function
function checkColor() {
    var color_Output;
    var colors = document.getElementById("colorInput").value.toUpperCase();
    var color_String = " is a great color!";
    switch (colors) {
        case "RED":
            color_Output = "Red" + color_String;
            break;
        case "YELLOW":
            color_Output = "Yellow" + color_String;
            break;
        case "GREEN":
            color_Output = "Green" + color_String;
            break;
        case "BLUE":
            color_Output = "Blue" + color_String;
            break;
        case "PINK":
            color_Output = "Pink" + color_String;
            break;
        case "PURPLE":
            color_Output = "Purple" + color_String;
            break;
        default:
            color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("result").innerHTML = color_Output;
}

// getElementByClassName function
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas draw a circle
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(100,50,300,150);

var c = document.getElementById("myCanvas");
var cx = c.getContext("2d");
cx.beginPath();
cx.arc(250,150,100,0,3*Math.PI);
cx.stroke();

const my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "white");
my_gradient.addColorStop(1, "black");
// Fill with gradient
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 100, 250);
