//    -----------------------------------------------
//        Create Element || método Find || TOGGLE
//    -----------------------------------------------

let input = document.querySelector('#input-curso');
const btn_add = document.querySelector('.btn-add');
const btn_add_antes = document.querySelector('.btn-add-antes');
const btn_add_depois = document.querySelector('.btn-add-depois');
const btn_remove = document.querySelector('.btn-remove');
let box_div_All = [...document.querySelectorAll('.box2 >div')];
let div_box2 = document.querySelector('.box2');
let btn_search = document.querySelector('.bi-search');
let input_search = document.querySelector('.nav-bar > input');
let output_text = document.querySelector('#output-text');



function createElement(curso, options) {
    let box_div_All = [...document.querySelectorAll('.box2 >div')];

    const section = document.querySelector('.box2');
    // Create Elements
    let div = document.createElement('div');
    let p = document.createElement('p');

    // Set Attributes
    div.classList.add('class');
    p.innerText = curso;
    
    // Add AppendChild 
    div.appendChild(p);

    if (options == "antes") {
        box_div_All.filter((element, index) => {
            
            if (element.classList[1]) {
                console.log(element);
                section.insertBefore(div, element)
            }
        });
    } else if (options == "depois"){
        box_div_All.filter((element) => {
            
            if (element.classList[1]) {
                console.log(element);
                element.after(div);
            }
        });

    }else {
    section.appendChild(div);
    }
}



// Capture Events

// Search
btn_search.addEventListener("click", (e)=> {
    console.log(input_search.value);
    let res = box_div_All.find((element, index) => {
        if (element.innerText.toLowerCase() == input_search.value.toLowerCase()) {
            return element
        } else {
            console.log('não encontrado');
        }
    });
    output_text.parentElement.classList.remove('hidde');
    output_text.value = res.innerText;
    console.log(res.innerText);
})

btn_add.addEventListener('click', (e)=> {
    const options = "a";
    // Tratamento de erro
    input.value.length > 0 ? createElement(input.value,options) : alert('Digite o nome do curso!');
    input.value = "";
    input.focus();

});

btn_add_antes.addEventListener('click', (e)=> {
    const options = "antes";
    // Tratamento de erro
    input.value.length > 0 ? createElement(input.value,options) : alert('Digite o nome do curso!');
    input.value = "";
    input.focus();

});

btn_add_depois.addEventListener('click', (e)=> {
    const options = "depois";
    // Tratamento de erro
    input.value.length > 0 ? createElement(input.value, options) : alert('Digite o nome do curso!');
    input.value = "";
    input.focus();


});

btn_remove.addEventListener('click', (e)=> {
    let box_div_All = [...document.querySelectorAll('.box2 >div')];
        box_div_All.filter((evt,index)=> {

            if (evt.classList[1]) {

                evt.remove();
            };
        });
});


// Ao modificar um elemento filho é bom que pegue o pai, pois se pegar
// uma coleção de filhos se esse elemento ter novos filhos a variável 
// de escopo global não atualizará e dará erro ao inserir um attribute
div_box2.addEventListener("click", (e) => {
    console.log(e.target.classList[0])
    if (e.target.classList[0] == "class") {
        let box_div_All = [...document.querySelectorAll('.box2 >div')];
    
        box_div_All.filter((evt,index)=> {
        
            if (evt.classList[1]) {
            
                evt.classList.remove('background');
            };
        });
        
        e.target.classList.toggle('background');
    }
})



// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling