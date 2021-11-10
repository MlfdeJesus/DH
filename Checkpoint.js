let pipocapadrao = 10;
let macarrcaopadrao = 8;
let carnepadrao = 15;
let feijãopadrao = 12;
let brigadeiropadrao = 8;

let pipoca = 1;
let macarrcao = 2;
let carne = 3;
let feijão = 4;
let brigadeiro = 5;

function tempo(x, padrão) {
    if (x >= 2 * padrão && x < 3 * padrão) {
        console.log("comida queimou")
    } else if (x < padrão) {
        console.log("tempo insuficiente")
    } else if (x >= 3 * padrão) {
        console.log("kabumm")
    } else {
        console.log("Prato pronto, bom apetite!!!")
    }
}

function ligarMicroondas(comida, x){
    switch (comida) {
        case 1:
            console.log("Você selecinou a comida Pipoca")    
        tempo(x, pipocapadrao)
            break;
        case 2:
            console.log("Você selecinou a comida Macarrão")
            tempo(x, macarrcaopadrao)
            break;
        case 3:
            console.log("Você selecinou a comida Carne")
            tempo(x, carnepadrao)
            break;
        case 4:
            console.log("Você selecinou a comida Faijão")
            tempo(x, feijãopadrao)
            break;
        case 5:
            console.log("Você selecinou a comida Brigadeiro")
            tempo(x, brigadeiropadrao)
            break;
        default:
            console.log("Prato inexistente")
            break;
    }
}
