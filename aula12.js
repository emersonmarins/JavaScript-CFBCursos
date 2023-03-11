//    ---------------------------
//         Operador Spread
//    ---------------------------

let n1=[11,20,30];
let n2=[11,22,33,44,55];
let n3=[...n1,...n2];

console.log("n1: " + n1);
console.log("n2: " + n1);
console.log("n3: " + n1);


// Nesse caso o operador Spread irá juntar as duas informações dos dois obj
// que são diferente.
const jogador1={nome:"Emerson",energia:100, vidas:"5", magia:150};
const jogador2={nome:"Bruce",energia:100, vidas:"2", velocidade:80};
const jogador3={...jogador1,...jogador2};

console.log(jogador3);
/*
emerson@emerson-C2SBC-Q:~/Documentos/GitHub-Estudos/JavaScript-CFBCursos$ 
{ nome: 'Bruce', energia: 100, vidas: '2', magia: 150, velocidade: 80 }
*/



// Pega os valores e espalha para os paremetros da função
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4,6,10]

console.log(soma(...valores))

// O Spread é muito util quando pega uma coleção de elementos no DOM 
// pois permiti usar vários métodos já que ao invés de ser um HTMLCollection(3) se torna um Array
// evitando o famoso erro quando se utiliza o método " foreach ";
const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    console.log(element.innerText);
    console.log("Cada elemento do array é uma: "+typeof(element.innerText)+". Correspondente ao valor: "+element.innerText);
    element.innerText = "Veja só o que podemos fazer!!!";
});
objs1.forEach(element => {
    console.log(element);
});

console.log(objs1);
console.log(objs2);