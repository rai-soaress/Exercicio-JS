function verificaridade(idade){
    if (idade > 0 && idade < 18){
        return "Menor de idade"
    }
    else{
        return "Maior de idade"
    }
}

let idade = 20;

console.log(idade(idade))