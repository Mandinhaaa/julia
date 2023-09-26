let elemento = document.getElementById("figura")
let troca = document.getElementById("imagem")
let texto = document.getElementById("msg")

function mensagem(){
    texto.innerHTML = "Aprendendo sobre eventos!!" ;
    alert ("Aprendendo sobre eventos!!");
    elemento.style.backgroundColor = "#000";
    elemento.style.color = "#00f";
}

function mostrarimg1(){
    troca.setAttribute("scr","imagens/download.jpeg");
    texto.innerHTML = "imagem 1"
}

function mostrarimg2(){
    troca.setAttribute("scr","imagens/download.jpeg");
    texto.innerHTML = "imagem 2"
}

elemento.addEventListener("click", mensagem);
troca.addEventListener("mouseover", mostrarimg1);
troca.addEventListener("mouseout", mostrarimg2);

document.addEventListener("keydown", function(event)){
    let 
}
