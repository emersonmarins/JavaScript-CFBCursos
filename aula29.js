//    -------------
//        THIS 
//    -------------

function aluno(nome,nota) {
    this.nome = nome;
    this.nota = nota;


    // Métodos
    // A arrow function usa o contexto do pai por isso não dá undefined
    this.mostrar_dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);        
        }, 2000);
    };
    // O setTimeout cria uma nova instancia do THIS por isso ele 
    // não tem os falores do elemento pai quando se pede para mostrar com 
    // o comando console.log, para contorna essa situação se utiliza a arrow function 
    this.mostrar_dados_func = function() {
        setTimeout(function () {
            console.log(this.nome);
            console.log(this.nota);        
        }, 2000);
    };
};

let aluno1 =  new aluno("Emerson",100);
aluno1.mostrar_dados_arrow();
aluno1.mostrar_dados_func();