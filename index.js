let quantidadeVitorias = 100;
let quantidadeDerrotas = 50;

//Realizando o calculo do saldo de vitorias
function calculoVitoria (quantidadeVitorias, quantidadeDerrotas){
   let resultado = quantidadeVitorias - quantidadeDerrotas
    return resultado
}

//Atribuindo o resultado do calculo feito na função calculoVitoria a uma variável
let saldoFinal = calculoVitoria (quantidadeVitorias, quantidadeDerrotas);
let nivel = ""

//Categorizando o Nivel do heroi
switch (true) {
    case (saldoFinal <= 10):
        nivel = "Ferro"
        break;
    case (saldoFinal <= 20):
        nivel = "Bronze"
        break;
    case (saldoFinal <= 50):
        nivel = "Prata"
        break;
    case (saldoFinal <= 80):
        nivel = "Ouro"
        break;
    case (saldoFinal <= 90):
        nivel = "Diamante"
        break;
    case (saldoFinal <= 100):
        nivel = "Lendário"
        break;
    default:
        nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + saldoFinal + " está no nível de " + nivel );