let input = document.querySelector('#input-curso');
const btn_add = document.querySelector('.btn-add');
const btn_add_antes = document.querySelector('.btn-add-antes');
const btn_add_depois = document.querySelector('.btn-add-depois');
const btn_remove = document.querySelector('.btn-remove');
const btn_check = document.querySelector('.btn-check');



function createElement(curso, options) {
    let checkbox = [...document.querySelectorAll('input[type=checkbox]')];

    const section = document.querySelector('.box2');
    // Create Elements
    let div = document.createElement('div');
    let p = document.createElement('p');
    let input = document.createElement('input');

    // Set Attributes
    div.classList.add('class');
    input.setAttribute('type', 'checkbox');
    p.innerText = curso;
    
    // Add AppendChild 
    div.appendChild(p);
    div.appendChild(input);

    if (options == "antes") {
        checkbox.filter((element, index) => {
            
            if (element.checked) {
                console.log(element.parentElement);
                section.insertBefore(div, element.parentElement)
            }
        });
    } else if (options == "depois"){
        checkbox.filter((element) => {
            
            if (element.checked) {
                console.log(element.parentElement);
                element.parentElement.after(div);
            }
        });

    }else {
    section.appendChild(div);
    }


}



// Capture Events
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
    let checkbox = [...document.querySelectorAll('input[type=checkbox]')];
    let section = document.querySelector('.box2');

    // Colocar dentro do método Filter o método remove
    checkbox.filter((element,index)=> {
        if (element.checked) {
            console.log(element.parentElement)
            // Pegando o elemento Pai do checkbox que é a div que queremos excluí
            let div_pai = element.parentElement;
            section.removeChild(div_pai);
        }
    });

});

btn_check.addEventListener('click', (e)=> {
    let checkbox = [...document.querySelectorAll('input[type=checkbox]')];
    let section = document.querySelector('.box2');
    checkbox.filter((evt,index)=> {

        if (evt.checked) {
            evt.parentElement.classList.toggle('background');
        }
    });


    console.log(e);
    console.log(input.value);
    // input.value.length > 0 ? createElement(input.value) : alert('Digite o nome do curso!');
});


// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling