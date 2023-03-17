//  ---------------
//     HERANÇA
//  ---------------

//Classe PAI
class Carro{
    constructor(nome,portas,ligado,vel,cor){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=cor
    }

    ligar=function(){
        this.ligado = true;
    }
    deligar=function(){
        this.ligado = false;
    }
    setCor=function(cor) {
        this.cor = cor;
    }
}

// Classe Filha herda de Pai
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas);
        this.vel=0;
        this.cor = "verde";
        this.blindagem = blindagem;
        this.municao = municao;
    }

    atirar=function(){
        this.municao --
    }

    getInfo=function(){
        return `
                nome: ${this.nome}
                Portas: ${this.portas}
                Ligado: ${this.ligado}
                Velocidade: ${this.vel}
                Blindagem: ${this.blindagem}
                Munição: ${this.municao}
                Cor ${this.cor}
            `
    }
}

let tanque= new Militar("Tanque",4,100,500);
tanque.ligar();
// console.log(tanque);
console.log(tanque.getInfo())
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
tanque.atirar();
console.log(tanque.getInfo())