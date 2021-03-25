//exames options
const exames = document.querySelector("#exames");
    let arrOpt4 = ["exames1","exames2","exames3","exames4"]
    for (let i = 0; i < arrOpt4.length; i++) {
        let optionE = document.createElement("option");
        optionE.appendChild(document.createTextNode(arrOpt4[i]))
        exames.appendChild(optionE);
    }

    //exames options
const presets = document.querySelector("#presets");
let arrOpt5 = ["preset1","preset2","preset3","preset4"]
for (let i = 0; i < arrOpt5.length; i++) {
    let optionP = document.createElement("option");
    optionP.appendChild(document.createTextNode(arrOpt5[i]))
    presets.appendChild(optionP);
}