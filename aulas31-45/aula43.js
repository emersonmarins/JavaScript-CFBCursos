let input = document.querySelector('#input-curso');
const btn_add = document.querySelector('.btn-add');
const btn_remove = document.querySelector('.btn-remove');
const btn_check = document.querySelector('.btn-check');



function createElement(curso) {
    const section = document.querySelector('.box2');
    console.log(section);
    // Create Elements
    let div = document.createElement('div');
    let p = document.createElement('p');
    let input = document.createElement('input');

    // Set Attributes
    div.classList.add('class');
    input.setAttribute('type', 'checkbox');

    // Add AppendChild 
    section.appendChild(div);
    div.appendChild(p);
    div.appendChild(input);
    p.innerText = curso;

}



// Capture Events
btn_add.addEventListener('click', (e)=> {
    
    console.log(e);
    console.log(input.value);
    input.value.length > 0 ? createElement(input.value) : alert('Digite o nome do curso!');
    input;
});

btn_remove.addEventListener('click', (e)=> {
    let checkbox = [...document.querySelectorAll('input[type=checkbox]')];
    let section = document.querySelector('.box2');

    checkbox.filter((evt,index)=> {
        if (evt.checked) {
            console.log(evt.parentElement)
            let div_pai = evt.parentElement;
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