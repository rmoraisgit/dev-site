var arrayPacientes = document.querySelectorAll(".paciente");

arrayPacientes.forEach(function(paciente){
    var peso = paciente.querySelector(".info-peso");
    var altura = paciente.querySelector(".info-altura");
    var imc = paciente.querySelector(".info-imc");
    imc.textContent = peso.textContent / (altura.textContent * altura.textContent);
})

