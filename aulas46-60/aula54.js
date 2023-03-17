//  ------------------------------------------------
//        Coleção MAP - do tipo CHAVE e VALOR
//  ------------------------------------------------

let mapa=new Map();

// Padrão da coleção elemento CHAVE E VALOR
mapa.set("cursos","Javascript");
mapa.set("10","Javascript");
mapa.set("55","PHP");
mapa.set("chanel","NODE.JS");
mapa.set("curso","Sequelize");

console.log(mapa);

console.log(mapa.get("curso"));

// Retorna true se tiver a chave
if (mapa.has("55")) {
    console.log("A chave existe na coleção");
    console.log("O tamanho da coleção é: "+mapa.size);
} else {
    console.log("Chave não encontrada!");
    console.log("O tamanho da coleção é: "+mapa.size);
}
mapa.delete("chanel");

mapa.forEach(element => {
    console.log(element);

});