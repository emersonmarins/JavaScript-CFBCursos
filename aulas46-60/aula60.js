//  --------------------------
//     CLASSES PARA FUNÇÕES
//  --------------------------
// Para tirar o class e tranforma em uma function que se aproxima muito ao OBJETOS LITERAIS
/**
 * 1 - Troque o nome class por function e coloque as () depois do nome da function
 * 2 -  Retire o método contructor
 * 3 - Coloque virgula nos this.algumacoisa,
 * 4 - coloque this nos GETS e SETS
 * 5 - coloque = function depois dos GETS, SETS e demais métodos
 */

function Pessoa(nome,idade){

    this.nome=nome,
    this.idade=idade,
    // GET 
    this.getNome= function(){
        return this.nome;
    },
    this.getIdade= function(){
        return this.idade;
    },
    // SET 
    this.setNome= function(nome){
        this.nome = nome;
    },
    this.setIdade= function(idade){
        this.idade = idade;
    },
    this.info= function(){
        console.log(`
            Nome: ${this.nome}
            Idade: ${this.idade}
            `);
    }
}

let pessoa1 = new Pessoa("Emerson", "31");
let pessoa2 = new Pessoa("Layane", "31");

console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa1.info());
