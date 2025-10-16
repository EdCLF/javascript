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
// limpa e limpaVar deixa a div saida com uma string limpa
function limpa(){
    let limpa = " ";
    document.getElementById("saida2").innerHTML =limpa;
}
function limpaVar(){
    let limpa = " ";
    document.getElementById("saida").innerHTML =limpa;
}
// let fora da função para poder guardar o valor de i
let i=0
function muda(){
        let paragrafos = document.getElementsByClassName("para");
        paragrafos[i].style.color='var(--verde-s)';
        i++
}
// function reset tem i=0 para que a function muda continue funcionando
function reset(){
    for(j=0;j<=2;j++){
        let paragrafos = document.getElementsByClassName("para");
            paragrafos[j].style.color='var(--amarelo)';
            i= 0
    }
}

// ----------------------Carrossel-----------------------------
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
// para que o slide passe automaticamente
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
// inicia o carrossel no carregar da pagina
window.onload = () => {
    mostrarSlides();
    iniciarSlidesshowAutomatico();
}
// --------------------Tema Claro e escuro---------------------
const mudaTema = document.getElementById('trocaTema');
mudaTema.addEventListener('click', () =>{
    document.body.classList.toggle('dMod');
    //verificação da escolha do usuario
    if(document.body.classList.contains('dMod')){
        localStorage.setItem('tema','escuro');
    }
    else{
        localStorage.setItem('tema','claro');
    }
});

// quando a pagina for carregada, permaneça a cor esperada
window.addEventListener('DOMContentLoaded', ()=>{
    const temaSalvo = localStorage.getItem('tema');
    if(temaSalvo === 'escuro'){
        document.body.classList.add('dMod');
    }
    else{
        document.body.classList.remove('dMod');
    }
});