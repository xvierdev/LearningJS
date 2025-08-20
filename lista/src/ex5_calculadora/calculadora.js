let numero1;
let numero2;
let operacao;

numero1 = prompt('Digite o primeiro número');
operacao = prompt('Operação (soma ou subtração)');
numero2 = prompt('Digite o segundo número');

result = calculo(Number(numero1), Number(numero2), operacao);

alert(`O resultado é: ${result}`);

if (operacao == 'soma') {
    document.body.innerHTML += `soma (${numero1}, ${numero2}) = ${result}`;
}
else if (operacao == 'subtração') {
    document.body.innerHTML += `subtração (${numero1}, ${numero2}) = ${result}`;
}


function calculo(num1, num2, operacao) {
    if (operacao == 'soma') {
        return num1 + num2;
    }
    else if (operacao == 'subtração') {
        return num1 - num2;
    }
    else {
        return 'Operação inválida, tente novamente.';
    }
}