//Passo 7

let Aluno = require('./check');


let curso = require('./check2')

let marcos = new Aluno('Marcos', 0, [9, 9, 8, 7]);
let rodrigo = new Aluno('Rodrigo', 1, [9, 10, 9, 10]);
let geyson = new Aluno('Geyson', 2, [7, 9, 8, 8]);
let ruggiero = new Aluno('Ruggiero', 2, [7, 7, 7, 7]);
let guilherme = new Aluno('Guilherme', 1, [5, 5, 8, 6]);
let cecilia = new Aluno('Cecilia', 1, [9, 7, 9, 6]); 


console.log(marcos.calcularMedia()) 


marcos.adicionarFalta()
console.log(marcos.faltas) 



curso.adicionarAluno(marcos);
console.log(curso.listaEstudantes); 


console.log(curso);
 curso.adicionarAluno(marcos, rodrigo, geyson, ruggiero, guilherme, cecilia);
 console.log(curso.listaEstudantes);

resultado = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaEstudantes.forEach((elemento) => resultado(elemento));

resultado(marcos)