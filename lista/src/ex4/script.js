let codigo = prompt('Digite o código do funcionário')
let horasTrabalhadas = prompt('Quantidade de horas trabalhadas')
let turno = prompt('Informe o turno (M/V/N)')
let categoria = prompt('Informe a categoria (F/G)')
let salarioMinimo = prompt('Informe o valor do salário mínimo')

let valorHora = 0

if (categoria == 'F'){
    if (turno == 'M' || turno == 'V'){
        valorHora = salarioMinimo * 0.01
    }
    else if (turno == 'N'){
        valorHora = salarioMinimo * 0.02
    }
}
else if (categoria == 'G'){
    if (turno == 'M' || turno == 'V'){
        valorHora = salarioMinimo * 0.04;
    }
}''