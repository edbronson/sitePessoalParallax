
function voltar(){
    history.back();
}

    document.form.action="resposta.html";
    document.form.submit();


function  mostrarmensagemErro(msgE, nomeCampo){
    document.getElementById(nomeCampo).focus();
    //alert(msgE + " " + nomeCampo + "!");
    var campoMSG = document.getElementById("mensagemErro");
    campoMSG.style.display = "block";
    campoMSG.innerHTML = msgE + " " + nomeCampo + "!";
}

function mudarCor(valor){

    var campoFormulario = document.getElementsByClassName("formulario")[0]

    if(valor == 1){
        campoFormulario.style.backgroundColor = "#29313e"
    }

    if(valor == 2){
        campoFormulario.style.backgroundColor = "#edda24"
    }

    if(valor == 3){
        campoFormulario.style.backgroundColor = "#25f76e"
    }

    
}