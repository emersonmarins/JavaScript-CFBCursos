/*
==================================
    Aula 21 FUNÇÃO relevançia
==================================
*/
//    -------------------
//         RETURN
//    -------------------
function impar(num) {
    if(10% 2 === num)
        return 'é par';
    else 
        return "é impar";  
};

console.log(impar(1));
console.log(impar(0));


// Retorna um valor a quem a chamou e não executa mais nenhum código abaixo do  return que esteja no mesmo escopo.