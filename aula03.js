// 	  ----------------------------------
//          Tipos de delcarações de 
//        variáveis e suas diferenças
//    ----------------------------------

"use strict"

/** 
 * Quanto mais variáveis são declaradas mais memória será utilizada
 * Quando sê declara com [ VAR ]  o Javascript eleva essa variável 
 * até o topo deixando ela acessível em todo scopo
 */

function ola() {
    var nome="Emerson"; 
    return nome; 
};
// nome = "Mandarino"; Mesmo com  [ var ] não pode ser acessada e ném modificada de fora do scopo da função ola
//console.log(nome); 


if (true) {
    var nome="Emerson";  
}
// Pode ser acessada e modificada fora do escopo da instrução [ if ] 
nome = 'Marins';
console.log(nome); 


function ola2() {
    let nome="Emerson"; 
    return nome; 
};

if (true) {
    let nome="Emerson";  
}

// nome = "Mandarino"; Com  [ Let ou Const ] não pode ser acessada e ném 
// modificada de fora do scopo da instrução [ if ]
// console.log(nome);


let testando_acesso = "acesso";

function acessando() {
    testando_acesso = "mudei";
    console.log(testando_acesso);
};
acessando();