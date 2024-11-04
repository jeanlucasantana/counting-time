//iniciando uma data
const dataInicial = new Date("2024-09-09T12:53:00")//data inicial do contador
//funcao para calcular o tempo em relacao a data inicial
function atualizarContador(){
    const dataAtual = new Date()//pega a data atual
    const diferenca = dataAtual - dataInicial//calcula a diferenca entre a data inicial
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))//converte a diferenca para dias
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24)//converte a diferenca para horas
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60)//converte a diferenca para minutos
    const segundos = Math.floor((diferenca / 1000) % 60)//converte a diferenca para segundos
    document.getElementById("days").textContent = dias//define o valor dos dias no documento como os dias que foram calculados
    document.getElementById("hours").textContent = horas//define o valor das horas no documento como as horas que foram calculadas
    document.getElementById("minutes").textContent = minutos//define o valor dos minutos no documento como os minutos que foram calculados
    document.getElementById("seconds").textContent = segundos//define o valor dos segundos no documento como os segundos que foram calculados
}

setInterval(atualizarContador, 1000)//faz o calculo a cada segundo para manter os dados precisos