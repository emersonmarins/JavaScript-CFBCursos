//  --------------------------
//           OBJETOS
//  --------------------------
// Fazer um exercício que guarde o nome das pessoas
class Pessoa{
    constructor(nome,tipo){
        this.nome=nome
        
        if (tipo == 1) {
            this.tipo="Esportivo";
            this.velocidade = 300;
        } else if (tipo == 2) {
            this.tipo="Utilitário";
            this.velocidade = 120;
        } else if (tipo ==3) {
            this.tipo="Passeio";
            this.velocidade = 200;
        } else{
            this.tipo="Militar";
            this.velocidade = 150;
        }
    }

    // GET 
    getNome(){
        return this.nome;
    }
    getTipo(){
        return this.tipo;
    }
    getVelocidade(){
        return this.velocidade;
    }
    getInfo(){
        return [this.nome, this.tipo, this.velocidade];
    }

    // SET 
    setNome(nome){
        this.nome = nome;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    setVelocidade(velocidade){
        this.velocidade = velocidade;
    }

    info(){
        console.log(`
            Nome: ${this.nome}
            Tipo: ${this.tipo}
            Velocidade Máxima: ${this.velocidade} Km
            `);
    }
}

let c1=new Carro("Corvete",1);
let c2=new Carro("Kombi", 2);
let c3=new Carro("Honda Civic", 3);
let c4=new Carro("Hammer", 4);

// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);


console.log(c1.getInfo());
