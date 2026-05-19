
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