# 🛡️ Classificador de Nível do Herói

Este projeto em **JavaScript** calcula o **saldo de vitórias** de um herói e classifica o seu **nível** com base nesse saldo.

---

## 📜 Descrição

O código:
1. Recebe a quantidade de **vitórias** e **derrotas**.
2. Calcula o **saldo de vitórias**:  
   ```saldo = vitórias - derrotas```
3. Classifica o herói em um nível de acordo com a tabela:

| Saldo de Vitórias | Nível      |
|-------------------|-----------|
| 0 a 10            | 🪨 Ferro  |
| 11 a 20           | 🥉 Bronze |
| 21 a 50           | 🥈 Prata  |
| 51 a 80           | 🥇 Ouro   |
| 81 a 90           | 💎 Diamante |
| 91 a 100          | 🏆 Lendário |
| > 100             | 🐉 Imortal |

---

## 📂 Código

```javascript
let quantidadeVitorias = 100;
let quantidadeDerrotas = 50;

function calculoVitoria(quantidadeVitorias, quantidadeDerrotas) {
    let resultado = quantidadeVitorias - quantidadeDerrotas;
    return resultado;
}

let saldoFinal = calculoVitoria(quantidadeVitorias, quantidadeDerrotas);
let nivel = "";

switch (true) {
    case (saldoFinal <= 10):
        nivel = "Ferro";
        break;
    case (saldoFinal <= 20):
        nivel = "Bronze";
        break;
    case (saldoFinal <= 50):
        nivel = "Prata";
        break;
    case (saldoFinal <= 80):
        nivel = "Ouro";
        break;
    case (saldoFinal <= 90):
        nivel = "Diamante";
        break;
    case (saldoFinal <= 100):
        nivel = "Lendário";
        break;
    default:
        nivel = "Imortal";
}

console.log("O Herói tem saldo de" + saldoFinal + "e está no nível de" + nivel");
```
---

## 🚀 Como Executar
1. Tenha o Node.js instalado no seu computador.

2. Salve o código em um arquivo, por exemplo: index.js.

3. Abra o terminal e execute:

        node index.js

---

## 📌 Exemplo de Saída

        O Herói tem saldo de 50 e está no nível de Prata

---


