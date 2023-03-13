//    -------------------------
//        stopPropagation()
//    -------------------------


//Para a propagação de elementos filhos e apenas capta o evento do elemento pai selecionado.
const box1_array = document.querySelector('.box1');
const cursos_array = [...document.querySelectorAll('.class')];

cursos_array.map((evt)=>{
    evt.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

box1_array.addEventListener('click',(e)=> {
    console.log(e);
});