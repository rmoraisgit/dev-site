var botaoAdiciona = document.querySelector("#adicionar-paciente").addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var classPaciente = CriaClassePaciente(form);
    var trPaciente = CriaTr(classPaciente);
    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(trPaciente);

})