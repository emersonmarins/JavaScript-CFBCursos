//    ---------------
//        Arrays
//    ---------------


// Arrays, quando se tem um array dentro de outro array temos um conceito de [  MATRIZES  ]
let cores = ["azul","verde","vermelho","amarelo",["flores","pétalas","rosas"]];
let cursos = ["PHP","Javascript","Python","CSS","HTML",cores]




console.log(cursos[5][4][1]);

cores.push("Roxo");
cores.pop();
cores.unshift("Verde");
cores.shift();


console.log(cursos[5][4][1]);