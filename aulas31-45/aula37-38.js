//    ----------------------------------
//        relação dos elementos DOM
//    ----------------------------------


// Quando se vai manipular o DOM existe uma diversidade grande de formas para manipula-lo, por isso é bom 
// acompanhar com o DEVTOOLS as propriedades e métodos disponíveis na hora de manipular.
const container_main = document.querySelector('.container-principal');
const section_El = [...document.querySelectorAll('.box1>div')];
const box1_El = document.querySelector('.box1');

// Mostra o nome da classe
console.log("// Mostra o nome da classe: ")
console.log(container_main.attributes.class.value);
console.log(container_main.getAttribute('class'));
console.log(container_main.className);
console.log("                                 ");

// Retorna uma coleção de elementos filhos
console.log("// Retorna uma coleção de elementos filhos: ")
console.log(container_main.children[0].children);
console.log(box1_El.childNodes);
console.log("                                 ");

// Pega o elemento pai
console.log("// Pega o elemento pai");
console.log(box1_El.parentNode);
console.log("                                 ");

// Pega o elemento Avô
console.log("// Pega o elemento Avô");
console.log(box1_El.parentNode.parentNode);
console.log("                                 ");

// Pega o primeiro elemento filho
console.log("// Pega o primeiro elemento filho: ")
console.log(box1_El.firstElementChild);
console.log("                                 ");

// Pega o ultimo elemento filho
console.log("// Pega o ultimo elemento filho:");
console.log(box1_El.lastElementChild);
console.log("                                 ");

console.log("// Pega todos os textos dos elementos filhos: ");
// Pega todos os textos dos elementos filhos
console.log(container_main.innerText);
console.log("                                 ");

console.log("// Pega o primeiro neto: ");
// Pega o primeiro neto
console.log(container_main.children[0].firstElementChild);
console.log("                                 ");

// Retorna o nó raiz
console.log(document.getRootNode());
console.log(box1_El.getRootNode());
console.log("                     ");

// Retorna se o elemento tem filho porém os textos são contabilizados como filhos
// Portanto é bom montar uma estrutura com [ if ] para verificar se o elemento te um elemento filho
console.log("// Retorna se o elemento tem filho porém os textos são contabilizados como filhos // Portanto é bom montar uma estrutura com [ if ] para verificar se o elemento te um elemento filho");
console.log(box1_El.hasChildNodes());

console.log(box1_El.children.length > 0 ? 'Elementos possui filho': 'Elementos não possuí filho');


if (box1_El.firstElementChild.children.length > 0) {

    console.log('Elementos possui filho');
    
} else {
    console.log('Elementos não possuí filho');

}

// dessa maneira conseguimos alterar elementos sem precisar selecinálos através do Pai
box1_El.firstElementChild.style.cssText = `background: rgb( 122,255,0, 1.000);`
