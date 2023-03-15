//    -------------------
//        Interadores
//    -------------------


/**
 * Funções como find() e map() que trabalhão com interator, precisão percorrer o array portanto o done indica
 * se já chegou o final do array e o value mostra o valor do elemento que ele está interando 
 */
const valores = [10,25,36,48,78,84];
const text_string = "EmersonMarinsCoutinho";

const it_valores=valores[Symbol.iterator]();
const it_text_string=text_string[Symbol.iterator]()

// console.log(it_valores.next().value);
// console.log(it_valores.next().value);
// console.log(it_valores.next().value);
// console.log(it_valores.next().value);
// console.log(it_valores.next().value);
// console.log(it_valores.next().value);
// console.log(it_valores.next().value);


// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);
// console.log(it_text_string.next().value);

 
// Criando uma função interadora
let int = 0;
while (!(it_valores.next().done)) {
    
    console.log(valores[int])
    int++
}