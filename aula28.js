//    ---------------------
//        Function MAP
//    ---------------------


// Direfente dos métodos [ FOR ] que podem parar em um determinado momento dentro do array
// O [ MAP ] não pode parar até percorrer todo array, por isso deve usado quando se necessita 
// desse comportamento.
// Quando é necessário percorrer todo array se dá preferencia ao [ MAP ] pois ele é mais performático 
// e também é a recomendação da novas especificação do Javascript.

const cursos=['HTML','CSS','Javascript','PHP','React'];
// cursos.map((elemento,index)=>{
//     console.log(`[id: ${index}] Tenho conhecimento em: ${elemento}`);
// });

// cursos.map((elemento,index)=>{
//     console.log(typeof elemento)
//     if (elemento == 'PHP') {
//         return console.log(`[id: ${index}] Tenho conhecimento em: ${elemento}`); 
//     }
// });

// let divEl = document.getElementsByTagName('div');
// divEl = [...divEl];
// let res = divEl.map((elemento,index)=>{
    
//     console.log(elemento.innerText)

    

    
// });


// let divEl = document.getElementsByTagName('div');
// let valores = Array.prototype.map.call(divEl,({innerText})=>innerText);
// console.log(valores);



let num = ["7","14","1","4","4","4","8"];
for (const iterator of num) {
    console.log(typeof(iterator));
};


// USANDO O MAP para converte de [ string ] para [ number ];
let convert=(e)=>parseInt(e);
let num_convert = num.map(convert);
for (const iterator of num_convert) {
    console.log(typeof iterator);
}
