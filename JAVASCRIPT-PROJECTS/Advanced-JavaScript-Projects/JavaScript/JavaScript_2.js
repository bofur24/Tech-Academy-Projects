// Form Validation
function validateForm() {
    let x = document.forms["contactForm"]["firstName"].value;
    if (x == "") {
        alert("First Name required");
        return false;   
    }
}