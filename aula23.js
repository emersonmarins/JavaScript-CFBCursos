//    ---------------------------------------
//         FUNÇÕES ANÔNIMAS E CONTRUTORAS
//    ---------------------------------------

let res = 0;

//Funções anônimas não ocupam espaço na memória são criadas quando chamadas
const somar = function (...valores) {
    for (const key in valores) {
            res += valores[key];
    }
    return res;    
}

console.log(somar(10,2, 20, 32))

// Função CONSTRUTOR deve ser criada com [ new Function ] function com o F maiúsculo
// e passado os valores e o corpo da função como argumento.
const s = new Function ("v1","v2","return v1 * v2");
console.log(s(10,35));