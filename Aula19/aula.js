let arquivos = [
        {sexo: "F", nome: "Abigael Natte", altura: 1.84,},
        {sexo: "M", nome: "Ramon Connell", altura: 1.64,},
        {sexo: "M", nome: "Jarret Lafuente", altura: 1.65,},
        {sexo: "F", nome: "Ansel Ardley", altura: 1.23,},
        {sexo: "F", nome: "Jacki Shurmer", altura: 1.40,},
        {sexo: "M", nome: "Jobi Mawtus", altura: 1.67,},
        {sexo: "M", nome: "Thomasin Latour", altura: 1.70,},
        {sexo: "F", nome: "Lonnie Verheijden", altura:2.0,},
        {sexo: "M", nome: "Alonso Wannan", altura: 1.80,},
        {sexo: "F", nome: "Bendite Huggett", altura: 1.5,}]



 arquivos.sort(function(maior, menor){
    if(maior.altura<menor.altura) return 1;
    if(maior.altura>menor.altura) return -1;
    return 0;
});

console.log(arquivos);

console.log(arquivos[1].altura);
console.log(arquivos[9].altura);


let mediaF = arquivos.filter(function(x){
    if(x.sexo=="F"){
        return x;
    }
   
});

let totalAltura = mediaF.map(function(z){
    return z.altura

});
    

    let media = totalAltura.reduce(function(acumulador,itemAtual){
        return (acumulador+itemAtual)
    })
 
    let h =media/totalAltura.length; 
   console.log(h);
   


    let homens = arquivos.filter(function(g){
        if(g.sexo=="M"){
    return g;
        }
    
    });

 let homensTotal = homens.length;
 console.log(homensTotal);
