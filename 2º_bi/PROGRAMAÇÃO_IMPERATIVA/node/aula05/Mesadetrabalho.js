//Micro desafio 1
function teste1(x,y){
    return y-x
}

console.log(teste1(10,40));

//Micro desafio 2

function teste2(x,y){
    return x * 2
console.log(x)
return x / 2

}

console.log(teste2(10));

// Funções Simples

//-1
function convert_pol (x){
    return x*2.54
}

console.log(convert_pol(2));



//-2
function converter (x){
    return "www."+x+".com.br"
}

console.log(converter("funcaojs"));

//-3-Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function addcaracter (x){
    return x+"!"
}

console.log(addcaracter("Boa noite"));


//-4-Crie uma função que calcule a idade dos cachorros, 
//considerando que 1 ano humano, equivale a 7 anos para eles.

function idadecao (x){
    return x*7
}

console.log(idadecao(10));



//-5-Crie uma função que calcule o valor da sua hora de trabalho, 
//tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.

function salphr (x){
    return x/160
}

console.log(salphr(3500.00));

//-6-Crie a função calculadora de IMC* de uma pessoa,
// que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores. 
//*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function IMC (x,y){
    return x/(y**2)
}

console.log(IMC(80,1.92));
console.log(IMC(54,1.55));
console.log(IMC(69,1.68));



//7-7-> Exemplo de utilização do método .toUpperCase() em JavaScript.				  

//-> String Original. 
  //-> Convertendo a String para maiúsculo. 
function convertmaiusculo(x) { 
            
return x.toUpperCase(); 
}
console.log(convertmaiusculo("marcos"))
//-8-Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function typ(A){ 
 return typeof A
}
console.log(typ(12,));



//-9-Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.


function calc_circu(raio){
    return ((2*Math.PI)*raio)
}
console.log(calc_circu(2));


