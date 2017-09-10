var tabela = document.querySelector("#tabelamain").addEventListener("dblclick", function(event){
    
    var trRemovida = event.target.parentNode;
    trRemovida.classList.remove("paciente");
    trRemovida.classList.add("removetr");
    console.log(trRemovida);

    setTimeout(function(event) {
        trRemovida.remove();
    }, 500);

    
    
})