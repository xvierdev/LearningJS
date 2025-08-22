/* 
Crie uma aplicação capaz de identificar a faixa etária com base na idade
informada pelo usuário. Considere os seguintes critérios:
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
*/

let idade = parseInt(prompt('Digite a sua idade'));
let result;
if (idade > 0 && idade < 15) {
    result = 'Criança';
    alert(result);
}
else if (idade < 30) {
    result = 'Jovem';
    alert(result);
}
else if (idade < 60) {
    result = 'Adulto';
    alert(result);
}
else {
    result = 'Idoso';
    alert(result);
}

document.body.innerHTML += `A idade <strong>${idade}</strong> está na faixa etária <strong>${result}</strong>.`;