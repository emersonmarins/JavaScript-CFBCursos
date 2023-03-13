//    ---------------------
//        método Filter
//    ---------------------
const idades = [10,15,64,87,98,65,45,61,31,81,15,64,89,34,23,56,78,12,61,3,2,12,46,35];

// idades.filter((elemento,index,arr)=> {})

let filter_crianca = () => {
        let res = idades.map((element)=> {
            if (element < 13) {
                return element;
            }
        });
        return res;
};

function idade(params) {
    
    
    if (params == "crianca") {
        return filter_crianca();
        
    } else if (params == "joven") {
        return filter_joven();
    } else if (params == "adulto") {
        return filter_adulto();
    } else {
        console.error('dados errados, consulte o manual!');
    }
}
console.log('usando o map');
console.log(idade("crianca"));



console.log('usando o filter');
let crianca = idades.filter((val)=>{
    if (val < 13) {
        return val
    }
});
console.log(crianca);



// idades.filter(idade("joven"));
// idades.filter(idade("adulto"));


