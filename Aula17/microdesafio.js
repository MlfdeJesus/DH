let par = [2,4,8,10,14,20];

let impar = par.map(function(num){
return num+1;
});

console.log(impar);


let nomes = ["maria Liz","Joana barbara","rose rita","maria joao","Rute Luz"];

let filtro = nomes.filter(function(sobrenome){
    return sobrenome="maria";
});

console.log(filtro);

let transfome = impar.reduce(function(acumulador,itemAtual){
    return acumulador+ " - " +itemAtual;
    
});
console.log(transfome);


let animais = ["cao", "gato", "cavalo", "galo"]
let saudação = animais.forEach((ninja) => {
console.log("O animal é " + ninja);
});
saudação




