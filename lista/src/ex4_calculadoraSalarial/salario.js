let codigo = prompt('Digite o código do funcionário');
let horasTrabalhadas = prompt('Quantidade de horas trabalhadas');
let turno = prompt('Informe o turno (M/V/N)');
let categoria = prompt('Informe a categoria (F/G)');
let salarioMinimo = prompt('Informe o valor do salário mínimo');

let valorHora = 0;
let salarioInicial = 0;
let auxilioAlimentacao = 0;

if (categoria == 'F') {
    if (turno == 'M' || turno == 'V') {
        valorHora = salarioMinimo * 0.01;
    }
    else if (turno == 'N') {
        valorHora = salarioMinimo * 0.02;
    }
}
else if (categoria == 'G') {
    if (turno == 'M' || turno == 'V') {
        valorHora = salarioMinimo * 0.04;
    }
}
salarioInicial = valorHora * horasTrabalhadas;
if (salarioInicial < 800) {
    auxilioAlimentacao = salarioInicial * 0.25;
}
else if (salarioInicial < 1200) {
    auxilioAlimentacao = salarioInicial * 0.20;
}
else {
    auxilioAlimentacao = salarioInicial * 0.15;
}

document.body.innerHTML += `Código <strong>${codigo}</strong><br>`;
document.body.innerHTML += `Número de horas trabalhadas <strong>${horasTrabalhadas}</strong><br>`;
document.body.innerHTML += `Valor da hora trabalhada <strong>R$ ${valorHora.toFixed(2)}</strong><br>`;
document.body.innerHTML += `Salário inicial <strong>R$ ${salarioInicial.toFixed(2)}</strong><br>`;
document.body.innerHTML += `Auxílio alimentação <strong>R$ ${auxilioAlimentacao.toFixed(2)}</strong><br>`;
document.body.innerHTML += `Salário final <strong>R$ ${(salarioInicial + auxilioAlimentacao).toFixed(2)}</strong><br>`;

/**
 * Imprima como saída o código,
 * número de horas trabalhadas,
 * valor da hora trabalhada,
 * salário inicial,
 * auxílio alimentação e salário final (salário inicial + auxílio-alimentação).
 */