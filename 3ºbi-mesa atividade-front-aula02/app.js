/*
Marcos Leandro
Rafael Vasconcelos
Ruggiero Stello
*/


var nomeUsuario = prompt("Qual seu nome completo?")
if(nomeUsuario == "" || nomeUsuario == null){
    prompt("Qual seu nome completo?")
}else {
    var telefone = prompt("Qual seu telefone?");
    if (telefone == "" || telefone == null) {
        alert("Por favor digite um nome!");
        telefone = prompt("Qual seu telefone?");
    }else{ var whatsapp =confirm("Este o número de telefone é WhatsApp?") }
}
alert(`Muito obrigado ${nomeUsuario}, um de nossos consultores entrará em contato contigo através do número ${telefone}.`);



console.log(`nome: ${nomeUsuario}, telefone: ${telefone}, aceita receber mensagem por WhatsApp: ${whatsapp}.`);

