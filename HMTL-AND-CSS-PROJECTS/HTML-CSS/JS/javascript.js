window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
})

//Form Validation
function validateForm() {
  let x = document.forms["telephoneForm"]["Telephone"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// POPUP FORM

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
