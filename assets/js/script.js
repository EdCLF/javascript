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
function muda(){
    for(i=0;i<3;i++){
        let paragrafos = document.getElementsByClassName("para");
        paragrafos[i].style.color='var(--verde-s)';
    }   
}