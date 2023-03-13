//    ----------------------------
//          EventListenner
//    ----------------------------


let cursos_list = [...document.querySelectorAll('div > div')];
 
cursos_list.forEach(element => {

    element.addEventListener('click', (e)=>{

        e.target.classList.toggle("animate1");
            if (!e.target.id) {

                e.target.style.cssText = ` background:blue;`;
                e.target.setAttribute('id', 'background');

            } else {
                
                console.log('oi');
                e.target.removeAttribute('id');
                e.target.style.cssText = ``;

            }
    })

    
});