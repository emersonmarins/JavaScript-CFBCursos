//    --------------------------
//         BREAK e CONTINUE
//    --------------------------
let text = "Emerson";
let n = 0;
let n1 = 0;
let n2 = 0;


// Quando ele chega a satisfazer a condição ele se depara com o break que para a execução do loop
// Esse comando é importante quando se faz a interação de um array procurando por algum elemento específico
// Pois ao encontra-lo o programa não continuará executando o código desnessáriamente.
while (n < 1000) {
    if (n === 27) {
        console.log("Opa chegou no número: "+n);
        break
    }
    console.log(n);
    n++
};



while (n1 < 35) {
    n1++
    if (n1 === 12) {
        console.log("Esse número não é pra imprimir")
        continue
    }
    console.log(n1)
};

while (n2 < 100) {
    n2++
    if ((n2% 2) == 1) {
        continue
    }
    console.log("Seleção de números pares: "+n2);
}