//  --------------------------
//      CONVERSÕES DE JSON 
//  --------------------------


const Pessoa={
    nome:"Emerson",
    curso:"Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

console.log(Pessoa);
console.log(typeof Pessoa);
console.log(         );
console.log("-------------------------");
console.log(         );

// Para converte em JSON é só pegar a interface JSON e usar o método  JSON.stringfy()
const json_pessoa = JSON.stringify(Pessoa);


console.log(json_pessoa);
console.log(typeof json_pessoa);
console.log(         );
console.log("-------------------------");
console.log(         );

// Para converte de JSON para OBJECT é só pegar a interface JSON e usar o método  JSON.parse()
const objct_pessoa = JSON.parse(json_pessoa);


console.log(objct_pessoa);
console.log(typeof objct_pessoa);
console.log(         );
console.log("-------------------------");
console.log(         );