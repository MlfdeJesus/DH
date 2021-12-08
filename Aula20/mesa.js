let arquivos = [];

function Arquivos(idade,filme){
    this.idade = idade;
    this.filme = filme;
}

arquivos.push(new Arquivos(17,3));
arquivos.push(new Arquivos(13,2));
arquivos.push(new Arquivos(15,1));
arquivos.push(new Arquivos(18,3));
arquivos.push(new Arquivos(22,2));
arquivos.push(new Arquivos(34,3));
arquivos.push(new Arquivos(50,1));
arquivos.push(new Arquivos(25,2));
arquivos.push(new Arquivos(30,3));
arquivos.push(new Arquivos(14,1));
arquivos.push(new Arquivos(21,3));
arquivos.push(new Arquivos(20,2));
arquivos.push(new Arquivos(15,1));
arquivos.push(new Arquivos(22,3));
arquivos.push(new Arquivos(23,2));


/*atividade1*/

let espectador = arquivos.filter(function(e){
    if(e.filme==3){
    return e
    }
});


let idade = espectador.map(function(itt){
    return itt.idade;
});

let idadeTotal = idade.reduce(function(m,k){
    return (m + k)
});

let idadeMedia = idadeTotal/idade.length;


console.log(idadeMedia);


/*atividade2*/

let regular = arquivos.filter(function(r){
    return r.filme===1;
});

console.log(regular.length);


/*atividade3*/


let respBom = arquivos.filter(function(c){
   return c.filme==2;
});



let ttBom = respBom.length;



let porcBom = ttBom/arquivos.length*100

console.log(porcBom+"%");