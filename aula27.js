//    ----------------------------
//        Functions Geradoras
//    ----------------------------



//Cada variável funciona como parâmetro, quando se chama pela primeira vez retorna
//o que foi atribuído dentro da variável, quando chamado pela segunda vez os parâmetros
//passados pelo next começão a substituí as atribuições da variáveis.
function* perguntas() {
    const nome = yield 'Qual é o seu nome?';
    const esporte = yield 'Qual seu esporte favorito?';
    return `Olá ${nome} seu espote favorito é ${esporte}`;
};


//primeiro declara o interator [ itp ]
let itp = perguntas();
console.log(itp.next().value);
console.log(itp.next('Emerson').value);
console.log(itp.next('Xadrez').value);


//
function* gerador() {
    let i = 0;
    while (true) {
        yield ++i;
        if (i == 200) {
            break
        }
    } 
}

let itg = gerador();
for (let index = 0; index < 50; index++) {
    console.log(itg.next().value);
};

for (const iterator of itg) {
    console.log(itg.next().value);
}