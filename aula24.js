//    ---------------------------------------
//         Arrow Function
//    ---------------------------------------

let res = 0;
let somar = (...valores) => {
    for (const key in valores) {
            res += valores[key];
    }
    return res;    
}

console.log(somar(15,12,31,65,15));

// Quando a arrow function tiver apenas uma linha e um parâmetro pode-se dispensar o () e o {}
let n=n1=>n1+n1;
console.log(n(15));

// Quando a arrow function tiver apenas uma linha e mais de um parâmetro pode-se dispensar o {}
let nt=(n1,n2)=>n1*n2;
console.log(nt(15,15));