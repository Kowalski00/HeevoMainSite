// Get the modal
var modalMail = document.getElementById("ModalMail");

// Get the button that opens the modal
var btnMail = document.getElementById("btnMail");

// Get the <span> element that closes the modal
var span = document.getElementById("closeMail")[0];

// When the user clicks on the button, open the modal
btnMail.onclick = function() {
  modalMail.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalMail.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalMail) {
    modalMail.style.display = "none";
  }
}