alert ("Boas vindas ao jogo do número secreto:");
// Para insirir texto no js usa-se aspas 
/* Ás aspas podem ser duplas ou não, 
 mas se começou com "" terminar com a mesma*/
let numeroSecreto = 29;

// let é uma variavel para armazenar algo na memória
// O nome da variavel tem que ser clor e literal com a informação dada
let chute = pompt ("escolha um número entre 1 e 30:");
// quando é número não precisa de aspas
// Em fases de testes testamos tudo que é possivel
// Coamndo pra dizer que um valor é igual a outro valor qque é o if 
// if = condição 

// Se o chute for certo:
if(chute == numeroSecreto) {
   aler ( `Isso ai! Você descobriu o número secreto ${numeroSecreto}` )
}
// Se o chute não dê certol:
else {
      alert("Você errou ")
} ;//Dentro dos () -> bota-se o que quer comparar
// Dentro do {} -> bota-se aquilo que caso for comparado de certo

// Não precisa usar aspas para usar variaveis