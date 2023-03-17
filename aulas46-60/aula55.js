//  ---------------------
//        Coleção SET 
//  ---------------------
// Não permite entradas duplicadas, bom para conferir nomes em sistemas de login
let  musicas=new Set(["musical","musica calma", "rock roll"]);

musicas.add("musical");
console.log(musicas);

musicas.delete("musical");
musicas.forEach((element)=>{
    console.log(element);
})
musicas.clear();
musicas.forEach((element)=>{
    console.log(element);
})

