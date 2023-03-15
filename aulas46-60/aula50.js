//    ---------------------
//        Método REDUCE
//    ---------------------

const array_number = [1,6,16,161,1,5615,165,165,8,91,615,16,1,56,165,156,8,15]


const res = array_number.reduce((anterior,atual,index) => {
    return anterior+atual;
});

console.log(res);