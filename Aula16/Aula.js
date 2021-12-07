let bemVindo = () => 'Olá Mundo!';
let dobro = numero => numero * 2;
let soma = (a, b) => a + b;
let horaAtual = () => {
let data = new Date();
return data.getHours() + ':' +
data.getMinutes();
}


console.log(bemVindo());
console.log(dobro(5));
console.log(soma(10,25));
console.log(horaAtual());




setTimeout(function(){
    console.log("olá mundo!")
}, 1000)



function nomeCompleto(nome,sobrenome){
    return nome + ' '+ sobrenome;
};

function bomDia(nome, sobrenome, callback){
return "olá, " + callback(nome,sobrenome) ;
}
 


console.log(bomDia("Marcos","Fonseca",nomeCompleto));

function acaoCarro(callback) {
    return callback();
}

function andar() {
    console.log('carro Andando');
}

function parar() {
    console.log('carro parou');
}
acaoCarro(andar);
acaoCarro(parar);



