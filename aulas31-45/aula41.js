//    -----------------------------------
//        removendo elementos DOM
//    -----------------------------------


const box_div_array = document.querySelector('.box1');
const box_div_array2 = [...document.querySelectorAll('.box1>div')];
const collection = [...box_div_array.children];
console.log(box_div_array);
console.log(box_div_array2);
console.log(collection);


// Removendo elementos do DOM
collection.map((evt) => {
    evt.addEventListener("click", (e)=> {
        console.log(e.target);
        let div_el = e.target;
        // 1ª Forma
        box_div_array.removeChild(div_el);
        // 2ª Forma
        div_el.remove();
    });
});

// O MAP não percorre no node list nem no HTMLCollections
// box_div_array2.map((evt) => {
//     evt.addEventListener("click", (e)=> {

//         console.log(e.target)
//     });
// });