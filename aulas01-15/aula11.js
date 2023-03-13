//    --------------------------------
//         Operador typeof (Unário)
//    --------------------------------

let dados = {
    nome:"Emerson",
    idade: 31,
    email: "emersonmarinscoutinho@gmail.com"
};

console.log(typeof dados);
dados = JSON.stringify(dados);

console.log(typeof dados);

dados = JSON.parse(dados);

console.log(typeof dados);

