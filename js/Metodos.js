function CalculaImc(peso, altura){
    var imc = peso / (altura*altura);
    return imc;
}

function CriaClassePaciente(form){
    var Paciente = {
        nome: form.nome,
        peso: form.peso,
        altura: form.altura,
        gordura: form.gordura,
        imc: CalculaImc(form.peso.value, form.altura.value)
    };
}