//função sem retorno

function imprimirSoma(a,b){

    console.log(a + b)

}

imprimirSoma(2,3)

//Função com retorno

function soma(a,b = 1){

return a + b

}

console.log(soma(5 + 5))
console.log(soma(5))