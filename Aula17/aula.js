let numeros = [2,4,8,10,15,20];

let dobro = numeros.map(function(num){
return num*2;
});


console.log(dobro);


/* .map é = ao for*/ 


let filtro = numeros.filter(function(elementos){
console.log(elementos %2 );
    return elementos%2;

});

console.log(filtro);


/* .filter filttra*/

let soma = numeros.reduce(function(acumulador,itemAtual){
    return acumulador+itemAtual;
    
});

console.log(soma);


/* .reduce transforma a array conforme parametro passado */


idades = [20, 15, 18, 50, 30, 32]


let idadesNovo = idades.forEach(function(item) {
     console.log("Show" +item);
});

/* percorre uma array*/
