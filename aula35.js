//    -------------------------
//        addEventListener2
//    -------------------------

const div_all = [...document.querySelectorAll('.class')];
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const btn_left = document.querySelector('.btn-left');
const btn_right = document.querySelector('.btn-right');

div_all.map((element)=> {
    element.addEventListener('click', (e)=> {
        e.target.classList.toggle('background');
    });
});

btn_left.addEventListener('click', (e)=> {
    let box1_array = [...document.querySelectorAll('.box1 > div')];
    box1_array.map((el)=>{
        if (el.classList.contains('background')) {
            console.log(el.getAttribute('class'))
            box2.appendChild(el);
        }
    })
});

btn_right.addEventListener('click', (e)=> {
    let box2_array = [...document.querySelectorAll('.box2 > div')];
    console.log('clicou')
    box2_array.map((el)=>{
        console.log(el)
        if (el.classList.contains('background')) {
            console.log(el.getAttribute('class'))
            box1.appendChild(el);
        }
    })
});