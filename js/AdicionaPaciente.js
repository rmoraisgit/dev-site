var botaoAdiciona = document.querySelector("#adicionar-paciente").addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var classPaciente = CriaClassePaciente(form);

    var ulErros = document.querySelector("#listaErros");
    ulErros.innerHTML = "";
    var testaErros = ValidaPaciente(classPaciente);
    if(testaErros.length>0){
        testaErros.forEach(function(erro){
            var liErro = document.createElement("li");
            liErro.textContent = erro;
            liErro.classList.add("msgErro")
            ulErros.appendChild(liErro);
        })
        return ;
    }

    var trPaciente = CriaTr(classPaciente);
    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(trPaciente);

})