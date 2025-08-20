/*
Atividade prática em laboratório = 2
Prova do semestre = 5
Trabalho teórico = 3
média = ((peso1 * nota1) + (peso2 * nota2) + (peso3*nota3)) / soma_dos_pesos
*/

let atvPraticaLab = parseFloat(prompt('Nota da Atividade Prática em Laboratório'));
let provaSemestre = parseFloat(prompt('Nota da Prova do Semestre'));
let trabalhoTeorico = parseFloat(prompt('Nota do Trabalho Teórico'));

const media = ((atvPraticaLab * 2) + (provaSemestre * 5) + (trabalhoTeorico * 3)) / 10;

document.body.innerHTML = `Média = ${media}<br>`;
let ranking = null;

if (media >= 9) ranking = 'A';
else if (media >= 8) ranking = 'B';
else if (media >= 7) ranking = 'C';
else if (media >= 6) ranking = 'D';
else if (media >= 5) ranking = 'E';
else ranking = 'F';

result = `A média do aluno é ${media.toFixed(2)} e sua classificação é ${ranking}`;
document.body.innerHTML += result + '<br>';
alert(result);