//    -------------------
//         FUNÇÕES
//    -------------------
let text = "Emerson";
let n = 0;
let n1 = 0;
let n2 = 0;



let div_all = [...document.getElementsByTagName('div')];


function mudartexto() {
    
    for (const iterator of div_all) {

        console.log(iterator.innerHTML) 
        if (iterator.innerHTML == "<hr>") {
            continue
        }
        iterator.innerHTML = "MUDEI O TEXTO";
    }
    
}
