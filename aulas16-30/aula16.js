//    --------------------------
//         FOR IN FOR OF
//    --------------------------

let num=[1,5,50,88,66,44,11,55,61];
let num1=["vamos","começar",50,88,66,45,75,55,61];


// No for in ele imprime o index na key, ele simplifica a vida na hora de percorrer coleções em comparação ao for normal
for (const key in num) {
    if (Object.hasOwnProperty.call(num, key)) {
        const element = num[key];
        console.log(element);
    };
};

// Já no for of ele imprime cada item do array no iterator,ele simplifica a vida na hora de percorrer coleções em comparação ao for normal
for (const iterator of num1) {
    console.log(iterator);
};