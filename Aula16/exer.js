
let palavraAleatoria =[ "showWw","BoMmMMMm","aXé","Azul","black","roxo"]

let palavraAleatoriaRandom = palavraAleatoria[Math.floor(Math.random()*palavraAleatoria.length)];


function fizzBuzz (a,b) {
    for (let i = 0; i < 100; i++) 
    {if ((( i%a)==0) && ((i%b)==0)) {
            console.log("FizzBuzz "+ palavraAleatoriaRandom);
            } else if (i%a==0) {
            console.log("Fizz " + palavraAleatoriaRandom);
            } else if (i%b==0) {
            console.log("Buzz "+ palavraAleatoriaRandom);
        } else {
        }  console.log("Deu ruim");
    }};
    
    
    console.log(fizzBuzz(2,5));

