//  --------------------------
//      Método STATIC
//  --------------------------

// Quando criamos uma proprietade ou método STATIC ela passa a pertencer a classe e não a instância da classe

class  Npc {
    static alert = false;
    constructor(energia){
        this.energia = energia;
    }
    info() {
        console.log(`
        Energia: ${this.energia}
        Alert: ${Npc.alert}
        `)
        console.log("------------");
    }
    static alert_ON(){
        Npc.alert=true
    }
    static alert_OFF(){
        Npc.alert=false
    }
}

let npc1 = new Npc(100);
// Só mostra energia
console.log(npc1) 
npc1.info();
Npc.alert_ON();
npc1.info();