var arrayPacientes = document.querySelectorAll(".paciente");

arrayPacientes.forEach(function(paciente){
    var peso = paciente.querySelector(".info-peso");
    var altura = paciente.querySelector(".info-altura");
    var imc = paciente.querySelector(".info-imc");

    if(!ValidaPeso(peso.textContent)){
        imc.textContent = "PESO INVÁLIDO";
    }
    if(!ValidaAltura(altura.textContent)){
        imc.textContent = "ALTURA INVÁLIDA";
    }
    if(ValidaAltura(altura.textContent) && ValidaPeso(peso.textContent)){
        imc.textContent = CalculaImc(peso.textContent, altura.textContent);
    }

    
})

