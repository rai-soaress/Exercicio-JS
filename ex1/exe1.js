function verificaridade(idade){
    if (idade > 0 && idade < 18){
        return ("Menor de idade");
    }
    else{
        return ("Maior de idade");
    }
}

let idade = 17;
let novaIdade= 22;

console.log(verificaridade(idade));
console.log(verificaridade(novaIdade))