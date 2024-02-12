let txtResultado = document.getElementById("resultado");
let txtDinheiro = document.getElementById("dinheiro");
let contaBancaria = 100.00;



function GerarRand() {
    return Math.floor(Math.random() * 6) + 1
}

function jogarDado(mult = 1) {

    let randNum = GerarRand()
    if (randNum) {
        txtResultado.textContent = "Win!"
    }

    else {
        txtResultado.textContent = "Lose"
    }

    contaBancaria = calcMoney(contaBancaria, randNum * mult)
    atualizarTxtValor()

}

function calcPar(num) {
    return num % 2
}


function calcMoney(dinheiro, valor) {
    if (calcPar(valor)) {
        return dinheiro -= (valor * 10)
    }
    else {
        return dinheiro += (valor * 10)
    }
}

function atualizarTxtValor() {
    txtDinheiro.textContent = "Saldo atual: R$" + contaBancaria;
}

function tentarOutraJogada() {
    jogarDado(2)
}