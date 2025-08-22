let nome;
let altura;
let peso;

while (true) {
    nome = prompt('Digite o seu nome.');
    altura = prompt('Digite a sua altura em centímetros.');
    peso = prompt('Digite o seu peso em quilos.');

    let nomeNotNull = nome != '';
    let alturaNotNull = altura != '';
    let pesoNotNull = peso != '';
    if (nomeNotNull && alturaNotNull && pesoNotNull) {
        break;
    }
    alert('Dados incorretos ou faltando, preencha todos os campos.');

}

const valorAltura = parseFloat(altura) / 100;
const valorPeso = parseFloat(peso);
const imc = valorPeso / (valorAltura ** 2);
let classificado;

if (imc < 16) {
    classificado = 'Baixo peso muito grave!';
}
else if (imc < 17) {
    classificado  = 'Baixo peso grave!';
}
else if (imc < 18.5) {
    classificado  = 'Baixo peso!';
}
else if (imc < 25) {
    classificado  = 'Peso normal!';
}
else if (imc < 30) {
    classificado  = 'Sobrepeso!';
}
else if (imc < 35) {
    classificado  = 'Obesidade grau I!';
}
else if (imc < 40) {
    classificado  = 'Obesidade grau II!';
}
else {
    classificado  = 'Obesidade grau III';
}

document.body.innerHTML += `<strong>${nome}</strong> `;
document.body.innerHTML += `possui índice de massa corporal igual a <strong>${imc.toFixed(2)}</strong> `;
document.body.innerHTML += `sendo classificado como: <strong>${classificado}</strong>.`;