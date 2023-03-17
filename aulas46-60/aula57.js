//  --------------------------
//           OBJETOS
//  --------------------------

// Utilizando o Operador NEW
/**
 * 1 - Cria uma classe
 * 2 - Instacia objetos nessa classe
 */

// class Pessoa {
//     constructor(){
//         this.nome="Emerson"
//     }
// };



class Pessoa {
    constructor(nome){
        this.nome=nome;
    }
};

// O operador new instancia uma nova classe e automáticamente o método constructor é acionado
let p1= new Pessoa("Emerson");
console.log(p1.nome);

