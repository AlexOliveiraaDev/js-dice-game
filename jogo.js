let contaBancaria = 0;
let txtResultado = document.getElementById("resultado");

function GerarRand() {
    return Math.floor(Math.random() * 6) + 1
}

function jogarDado() {
    let randNum = GerarRand()

    txtResultado.textContent = "O numero tirado foi " + randNum
    
}

function calcPar(num) {
    return num % 2
}
