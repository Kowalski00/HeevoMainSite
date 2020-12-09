// Get the modal
var modalFAQ = document.getElementById("ModalFAQ");

// Get the button that opens the modal
var btnFAQ = document.getElementById("btnFAQ");

// Get the <span> element that closes the modal
var spanFAQ = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnFAQ.onclick = function() {
  modalFAQ.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFAQ.onclick = function() {
  modalFAQ.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFAQ) {
    modalFAQ.style.display = "none";
  }
}


