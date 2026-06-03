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

// Slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
