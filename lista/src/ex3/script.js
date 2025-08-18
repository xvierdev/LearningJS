const CUSTO_COMBUSTIVEL = 5;

let distancia = 10;
let qtdPecas = 2000;
let regiao = 1;
let rastreamento = 'n';

function custoRegiao(regiao) {
    switch (regiao) {
        case 1: return 1.0; // custo da região 1
        case 2: return 1.2; // custo da região 2
        case 3: return 1.3; // custo da região 3
        default: return null;
    }
}

function calculaDesconto(qtdPecas, regiao) {
    if (qtdPecas < 1000) {
        return 0;
    }
    else {
        let excedente = qtdPecas - 1000;
        if (regiao == 1) {
            return excedente * 0.10; // desconto da região 1
        }
        else if (regiao == 2) {
            return excedente * 0.12; // desconto da região 2
        }
        else if (regiao == 3) {
            return excedente * 0.13; // desconto da região 3
        }
    }
}

function custoCombustivel(distancia) {
    return distancia * CUSTO_COMBUSTIVEL;
}

function custoRastreamento(opcao) {
    if (opcao.charAt(0).toLowerCase() == 's') {
        return 200;
    }
    else {
        return 0;
    }
}

let combustivel = custoCombustivel(distancia);
let desconto = calculaDesconto(qtdPecas, regiao);
let custoBruto = custoRegiao(regiao) * qtdPecas;
let valorRastreamento = custoRastreamento(rastreamento)
let total = custoBruto + valorRastreamento + combustivel - desconto

console.log(`Quantidade de peças: ${qtdPecas}`);
console.log(`Distância: ${distancia} km`);
console.log(`Região: ${regiao}`);
console.log(`Optou por rastreamento "${rastreamento}"`)
console.log(`Custo de combustível R$ ${combustivel.toFixed(2)}`);
console.log(`Desconto a ser aplicado R$ ${desconto.toFixed(2)}`);
console.log(`Preço final R$ ${total.toFixed(2)}`)