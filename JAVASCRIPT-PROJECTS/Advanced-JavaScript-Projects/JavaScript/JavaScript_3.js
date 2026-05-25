// Function to get Gundam Data by click on the pilots name
function displayType(gundam) {
    var gundamData = gundam.getAttribute("data-gundam-type");
    alert(gundamData + " is the moblie suit " + gundam.innerHTML + " pilots");
}
