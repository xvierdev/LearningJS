let dataString = prompt('Digite uma data dd/mm/aaaa');
// let dataString = '30/02/2025';

const dados = dataString.split('/');

const dia = Number(dados[0]);
const mes = Number(dados[1]);
const ano = Number(dados[2]);

let mesText;

switch (mes) {
    case 1:
        mesText = 'janeiro';
        break;
    case 2:
        mesText = 'fevereiro';
        break;
    case 3:
        mesText = 'março';
        break;
    case 4:
        mesText = 'abril';
        break;
    case 5:
        mesText = 'maio';
        break;
    case 6:
        mesText = 'junho';
        break;
    case 7:
        mesText = 'julho';
        break;
    case 8:
        mesText = 'agosto';
        break;
    case 9:
        mesText = 'setembro';
        break;
    case 10:
        mesText = 'outubro';
        break;
    case 11:
        mesText = 'novembro';
        break;
    case 12:
        mesText = 'dezembro';
        break;
}

const datafinal = `${dia} de ${mesText} de ${ano}`;
alert(datafinal);
document.body.innerHTML = `<strong>${datafinal}</strong>`;
console.log(datafinal);
