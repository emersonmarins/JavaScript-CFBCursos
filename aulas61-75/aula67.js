//  ---------------------
//        PROTOTYPE
//  ---------------------

const Nave=function(energia){
    this.energia = energia;
    this.municao = 0;

}


let nave_01 = new Nave(100);
console.log(nave_01);
console.log("------------");
nave_01.municao = 50;
console.log("------------");
console.log(nave_01);

Nave.prototype.disparar=function () {
    if (this.municao > 0) {
        this.municao --;
    }
}

nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();
nave_01.disparar();

console.log("------------");
console.log(nave_01);