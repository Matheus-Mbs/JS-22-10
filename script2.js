function converterMoeda(valorReais, cotacao, nomeMoeda){
    let conversao = valorReais * cotacao

    console.log(`O valor convertido da moeda ${nomeMoeda} é ${String(conversao)}`)
}

function receberValor(){
    let valor_reais = Number(prompt('Dê o valor em reais: '))
    let cotacao_moeda =  Number(prompt('Cotação da moeda que deseja converter: '))
    let nome_moeda = prompt('Nome da moeda que será convertida: ')

    converterMoeda(valor_reais, cotacao_moeda, nome_moeda)
}

let option

do{
    receberValor()
    option = confirm('Deseja continuar?')
}while(option)