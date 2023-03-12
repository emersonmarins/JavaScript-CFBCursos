//    ----------------------------
//          querySelectorAll
//    ----------------------------
//
// O querySelector funciona como o seletor de CSS


// Retorna uma coleção de divs que tenha o elemento class
let cursosEl = document.querySelectorAll('div[class]');

// Retorna uma coleção de [ p ] que tenham a div como elemento pai
let cursosEl2 = document.querySelectorAll('div > p');