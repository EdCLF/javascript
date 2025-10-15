var mensagem = 10;

function mostrar_global(){
    document.getElementById("saida").innerHTML = "valor Atual: "+ mensagem;
}
function alterar(){
    mensagem = 50;
    document.getElementById("saida").innerHTML = "Valor alterado:" + mensagem;
    mensagem=10;
}
function test_let(){
    let frase ="Olá, sou uma variavel LET";
    document.getElementById("saida2").innerHTML = frase;
}
function limpa(){
    let limpa = " ";
    document.getElementById("saida2").innerHTML =limpa;
}
function limpavar(){
    let limpa = " ";
    document.getElementById("saida").innerHTML =limpa;
}
let i=0
function muda(){
        let paragrafos = document.getElementsByClassName("para");
        paragrafos[i].style.color='var(--verde-s)';
        i++
}

function reset(){
    for(j=0;j<=2;j++){
        let paragrafos = document.getElementsByClassName("para");
            paragrafos[j].style.color='var(--amarelo)';
            i= 0
    }
}
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let tempinho;

function mostrarSlides(){
    //esconder todas as imagens
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    //Mostrar slide atual
    slides[slideIndex].style.display = "block";
}

function proximoSlide(){
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex=0;
    }
    mostrarSlides();
}

function slideAnterior(){
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = slides.length-1;
    }
    mostrarSlides();
}

function slideAutomatico(){
    tempinho = setInterval(proximoSlide,2000);
}

function iniciarSlidesshowAutomatico(){
    tempinho = setInterval(proximoSlide,2000);
}

function resetaIntervalo(){
    clearInterval(tempinho);
    iniciarSlidesshowAutomatico();
}

prev.addEventListener("click", () =>{
    slideAnterior();
    resetaIntervalo();
});

next.addEventListener("click", () =>{
    proximoSlide();
    resetaIntervalo();
});

window.onload = () => {
    mostrarSlides();
    iniciarSlidesshowAutomatico();
}