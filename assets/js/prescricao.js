//Active
const active = document.querySelector(".active")
if(active.classList.contains("active")) {
    active.style.backgroundColor = "#042a49"
}

//Medicamentos options
const medicamentos = document.querySelector("#medicamentos");
let arrOpt1 = ["Dipirona","Estomazil","Benegripe","tandrilax"]
    for (let i = 0; i < arrOpt1.length; i++) {
        let optionM = document.createElement("option");
        optionM.appendChild(document.createTextNode(arrOpt1[i]));
        medicamentos.appendChild(optionM);
    }

//conce options
const conce = document.querySelector("#conce");
    let arrOpt2 = ["Conce1","Conce2","Conce3","Conce4"]
    for (let i = 0; i < arrOpt2.length; i++) {
        let optionC = document.createElement("option");
        optionC.appendChild(document.createTextNode(arrOpt2[i]))
        conce.appendChild(optionC);
    }

  
//unidadesoptions
const unidades = document.querySelector("#unidades");
    let arrOpt3 = [1,2,3,5,67,7,8]
    for (let i = 0; i < arrOpt3.length; i++) {
        let optionU = document.createElement("option");
        optionU.appendChild(document.createTextNode(arrOpt3[i]))
        unidades.appendChild(optionU);
    }




