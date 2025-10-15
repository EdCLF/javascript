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
            i=0
    }
}