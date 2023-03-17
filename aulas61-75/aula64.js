//  --------------------------
//         EXERCÍCIOS
//  --------------------------


// Podemos usar a função Filter para deletar um elemento específico do array fazendo ela retornar
// os elementos que sejam diferente do que se deseja excluír
let array_carros = ["Gol","Polo","Virtus","Jeta","Tribeca","Tigo8","Jaguar"];

let quero_retirar_Gol = "Gol";

array_carros.map((element)=>{
    console.log(element);

});

console.log(         );
console.log("-------------------------");
console.log(         );

array_carros = array_carros.filter((element)=>{
    return element != quero_retirar_Gol;
})

array_carros.map((element)=>{
    console.log(element);

});