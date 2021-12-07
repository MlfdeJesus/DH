let asdf = [1,2,3,4,5,6,7,8,9,10];
let zxcv = asdf.reduce(function(acumulador,itemAtual){
    return acumulador+itemAtual;
});

let qwer = asdf.map(function(num){
    return num/zxcv;
}); 
console.log(qwer);

let quest2 =["um","dois",3,"quatro","cinco"]

let quest2Filter = quest2.filter(function(elementos){
    console.log(elementos==!3);
});


console.log(quest2Filter);



