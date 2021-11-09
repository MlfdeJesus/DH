function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
    if(altura < 2.0 && altura >= 1.40){
    podeSubir = true
    }
    if(altura >= 1.20 && vemAcompanhado){
    podeSubir = true
    }
    return podeSubir
    }



function podesubir1(altura, vemAcompanhado){
    if(altura < 2.0 && altura >= 1.40)
{ return "Acesso autorizado"
}  
else if(altura >= 1.20 && vemAcompanhado) {
    return "Acesso autorizado somente com acompanhante"
   
} else {
    return "Acesso negado"
}
}

