//  --------------------------
//     OBJETOS LITERAIS
//  --------------------------




const in_nome = document.querySelector('.in-nome');
const in_idade = document.querySelector('.in-idade');
const btn_send = document.querySelector('.send');
const text_output = document.querySelector('.container-output');

const Pessoa={
    nome:"Marins",
    idade:"",
    getNome:function(){
        return this.nome;
    },
    getIdade:function(){
        return this.idade;
    },
    setNome:function(nome){
        this.nome = nome;
    },
    setIdade:function(idade){
        this.idade = idade;
    }
}



btn_send.addEventListener("click",(e) =>{
    e.preventDefault();
    const ps1 = Pessoa;
    ps1.nome = in_nome.value;
    ps1.idade =  in_idade.value;
    const p = document.createElement("p");
    p.innerText = ` Nome: ${ps1.nome} 
                    Idade: ${ps1.idade}`;
    text_output.appendChild(p);
    in_idade.value = '';
    in_nome.value = '';
    in_nome.focus();

})

// const p1=Pessoa;
// const p2=Pessoa;
// const p3=Pessoa;

// p2.nome= "Emerson";
// p3["nome"]="Emerson Marins";

// console.log(p1.nome);
// console.log(p2);
// console.log(p3);
// console.log(p3.getNome())

// p1.setNome("Mandarino");
// console.log(p1);
