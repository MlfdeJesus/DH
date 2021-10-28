function adicionar (A,B){
    return (A+B)
}

function subtracao (A,B){
    return (A-B)
}

function  multiplicacao (A,B){
    return (A*B)
}

function  divisao (A,B){
    return (A/B)
}


console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(10,2));
console.log(subtracao(10,2));
console.log(multiplicacao(10,2));
console.log(divisao(10,2));
console.log(divisao(10,0));

//-----------------------------------------------------------------------------
function   quadradoDoNumero (G){
    return (multiplicacao(G,G));
}
console.log(quadradoDoNumero(2));

function   mediaDeTresNumeros (A,B,F){
    return (divisao(adicionar(A,B)+F),3)
}
console.log(mediaDeTresNumeros(2,4,6));


function   calculaPorcentagem (A,B){
   Y= (divisao((multiplicacao(A,B)),100))
           console.log(Y+" pois é "+B+"% de "+A);
}

function   geradorDePorcentagem (A,B){
    H = (multiplicacao((divisao(A,B)),100))
   
    console.log(H+", já que "+A+" é " +H+ "% de "+B);
}

