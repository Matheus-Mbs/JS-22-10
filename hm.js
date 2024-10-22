function lerValores(type){
    return prompt(`Digite ${type}: `)
}

function soma(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function div(a,b){
    if(b == 0){
        return alert("Erro, divisão por 0!")
    }else{
        return a / b
    }

} 

let option = 0

while(option != 99){
    
    option = parseInt(prompt("1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n99- Sair"))
    if(option == 99){
        break
    }
    let valor1 = Number(lerValores("Valor1"))
    let valor2 = Number(lerValores("Valor2"))

    switch(option){
        case 1:
            console.log(soma(valor1,valor2))
            break
        case 2:
            console.log(sub(valor1,valor2))
            break
        case 3:
            console.log(mult(valor1,valor2))
            break
        case 4:
            console.log(div(valor1,valor2))
            break
        default:
            break
    }
}