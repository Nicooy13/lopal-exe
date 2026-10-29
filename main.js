// // Wifi da padaria da dona Cida
// alert("Captive Portal da Padaria");
// const PASSWORD = "pao123"
// let attempts = 0
// while (attempts < 3) { // Por contar a partir do 0, colocamos menor que três, já que ele consta 0, 1 e 2 como três tentativas.
//     let enter_password = prompt("Digite a senha:")
//     if (enter_password === PASSWORD) {
//         alert('Conectado, bom café')
//         break
//     } else {
//         alert('Senha incorreta! >:d')
//     }
//     console.log("attempts"); // Isso só pra conferir no console se constou
//     attempts++
// }
// if (attempts === 3) {
//     alert('Bloqueado')
// }



// // Retrospectiva
// 10 até feliz ano novo
// let countdown = 10

// while (countdown >= 1) {

//     alert(countdown)
//     countdown--

// }
//     if (countdown === 0) {
//         alert("Feliz ano novo!")
//     }



// // Cofrinho do Pedro
// let total = 0
// let weeks = 1
// while (total < 300) {
//     let money_added = Number(prompt('Quantos reais você enfiou no seu cofrinho essa semana?'))

//     if (money_added <= 0) { 
//         alert('Você não pode inserir 0 ou menos reais no seu cofrinho.')
//         money_added = 0 // para não alterar o valor total.
//     }

//     total = total + money_added

//     if (total >= 300) {break}

//     alert(`Você tem ${total} reais no seu cofrinho agora. Faltam ${300 - total} reais para sua meta de 300 reais.`)
//     weeks++
// }

// if (total >= 300) {
//     alert(`Você tem dinheiro suficiente pra comprar sua bike agora! Você levou ${weeks} semanas para concluir esse objetivo.`)
// }



// Balas da Dona Cida
let candies = 27
let attempts2 = 0
let won = false
while (won === false) {
    attempts2++
    let guess = Number(prompt('Quantas balas você acha que tem no pote?'))
    if (guess > 50) {
        alert('Não tem mais do que 50 balas no pote. Escolha um número de 1 à 50.')
    } else if (guess < 1) {
        alert('Há pelo menos 1 bala no pote. Escolha um número de 1 à 50.')
    } else if (guess > 27) {
        alert('Há menos balas no pote.')
    } else if (guess === 27) {
        alert(`Parabéns! Você acertou o número de balas que há no pote em ${attempts2} tentativas. Resgate o seu café e seu bolo.`)
        won = true
    } else {
        alert('Há mais balas no pote.')
    }
}