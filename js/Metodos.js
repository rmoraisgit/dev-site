function CalculaImc(peso, altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function CriaClassePaciente(form){
    var Paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: CalculaImc(form.peso.value, form.altura.value)
    };
    return Paciente;
}


function CriaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add = classe;
    return td;
}


function CriaTr(ObjetoPaciente){
    var trObjetoPaciente = document.createElement("tr");

    var tdNome = CriaTd(ObjetoPaciente.nome, "info-nome");
    var tdPeso = CriaTd(ObjetoPaciente.peso, "info-peso");
    var tdAltura = CriaTd(ObjetoPaciente.altura, "info-altura");
    var tdGordura = CriaTd(ObjetoPaciente.gordura, "info-gordura");
    var tdImc = CriaTd(ObjetoPaciente.imc, "info-imc");

    trObjetoPaciente.appendChild(tdNome);
    trObjetoPaciente.appendChild(tdPeso);
    trObjetoPaciente.appendChild(tdAltura);
    trObjetoPaciente.appendChild(tdGordura);
    trObjetoPaciente.appendChild(tdImc);

    return trObjetoPaciente;
}
