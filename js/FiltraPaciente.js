var campoTexto = document.querySelector("#filtro");

campoTexto.addEventListener("input", function(event){
    event.preventDefault();

    var listaPacientes = document.querySelector("#tabela-pacientes");
    var pacientes = listaPacientes.querySelectorAll(".paciente");

    if(campoTexto.value.length > 0)
    {
           for(var i=0; i<pacientes.length; i++)
           {
            var testaExp = new RegExp(campoTexto.value, "i");
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");

            if(!testaExp.test(tdNome.textContent))
            {
                paciente.classList.add("sumir");
            }
            else
            {
                paciente.classList.remove("sumir");
            }
        }
    }

    if(campoTexto.value.length == 0)
    {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("sumir");
        })
    }
})