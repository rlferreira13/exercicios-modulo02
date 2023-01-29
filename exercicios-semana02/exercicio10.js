/*Pensando em um sistema de notas online, crie um código que irá capturar o nome do aluno e a nota de 4 unidades usando o prompt dentro de uma laço while, a ideia é que a cada valor digitado seja puxado para um array com o método push. Após isso, crie um laço “for” que irá calcular a soma de todos os itens do array para ser calculada sua média.
Ao final de tudo, deverá ser apresentado em tela o nome do aluno, sua média e se o aluno foi aprovado ou não, para esse último tópico considere a média para aprovação maior ou igual a 7.*/
let nomeAluno;
let arrayGeral = [];
let arrNotas = [];
let i = 1;
let somadasNotas = 0;

while (i <= 4) {
  if (!nomeAluno) {
    nomeAluno = window.prompt("Informe o nome do aluno:");
    arrayGeral.push(nomeAluno);
  }
  let nota = parseInt(window.prompt(`Informe a nota do ${i}° bimestre: `));
  arrayGeral.push(nota);
  i++;
}
for (const notas of arrayGeral) {
  if (Number.isInteger(notas)) {
    arrNotas.push(notas);
  }
}

for (let j = 0; j < arrNotas.length; j++) {
  somadasNotas += arrNotas[j];
}

document.write(`O aluno ${nomeAluno} teve a nota final: ${somadasNotas / 4}.<br>`);
let passouDeAno = somadasNotas / 4 < 7 ? document.write("Ele foi reprovado.") : document.write("Ele foi aprovado");
