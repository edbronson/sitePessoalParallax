
function voltar(){
    history.back();
}


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

document.addEventListener("scroll", () => { 
    if (window.scrollY > 2000) {
        [...document.getElementsByClassName ("skill__per")].map(i=>{
            i.classList.add("skill__animation")
        })
    }
})

function btnAbreMenu() {
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="block";

    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display = "none";
}


function btnFechaMenu() {
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="none";

    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display="block";
}