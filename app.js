alert ("Boas vindas ao jogo do número secreto:");
let numeroSecreto = 5;
console.log (numeroSecreto)
let chute;
let tentativas = 1;

// qquando o chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
     chute = prompt("Escolha um número de 1 a 10 ");
}
// Se o chute for certo:
    if (chute == numeroSecreto) {
   alert( `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numeroSecreto > chute)
    alert (`O número secreto é menor que ${chute}`);
         else { 
    alert (`O número é maior que ${chute}`);
         }
         tentativas++;

}

//Dentro dos () -> bota-se o que quer comparar
// Dentro do {} -> bota-se aquilo que caso for comparado de certo

// Não precisa usar aspas para usar 

// ! quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.
// Para insirir texto no js usa-se aspas 
/* Ás aspas podem ser duplas ou não, 
 mas se começou com "" terminar com a mesma*/
// let é uma variavel para armazenar algo na memória
// O nome da variavel tem que ser clor e literal com a informação dada
// quando é número não precisa de aspas
// Em fases de testes testamos tudo que é possivel
// Coamndo pra dizer que um valor é igual a outro valor qque é o if 
// if = condição 
// !
