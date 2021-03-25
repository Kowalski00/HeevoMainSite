//DOM
const btnSubmit = document.querySelector(".btn");
const checkbox = document.querySelector("#check")

checkbox.addEventListener("click", validateBtn)

function validateBtn() {
    let checked = checkbox.checked;
    if(checked) {
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }
}
