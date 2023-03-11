//    -------------------
//         REST
//    ------------------


// Parametros REST é quando se usa o Spread no parâmetro da função permitindo que se se passe
// quantos parâmetros forém necessários.
let res = 0;
function somar(...valores) {
    for (const key in valores) {
            res += valores[key];
    }
    return res;    
}

console.log(somar(10,2, 20, 32))

function multiplicar(...valores) {
    res = 1;
    console.log(res)
    for (const key in valores) {
            res *= valores[key];
    }
    return res;    
}

console.log(multiplicar(10,2, 20, 32))