// /*1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;*/

// let maioraltura = 0
// let menoraltura = 1243829

// for(let i = 0; i <= 14; i++) {

//     const altura = prompt('Insira a altura.')

//     if (altura > maioraltura) {
//         maioraltura = altura
//     }
    
//     if (altura < menoraltura) {
//         menoraltura = altura
//     }
// }

// document.write(`A maior altura é ${maioraltura} </br>`)
// document.write(`A menor altura é ${menoraltura} </br>`)

// /*2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.*/


// let Lucas =  110
// let Pedro = 150
// let anos = 0

// while (Lucas =< Pedro) {
//     Lucas += 3
//     Pedro += 2
//     anos++
// }

// document.write(`Demorará ${anos} anos para Lucas ser maior que Pedro`)

// /*3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...*/

// let n = Number(prompt('Escolha um número.'))
// for (let i = 1; i <= 10; i++) {
//     let tabuada = n * i
//     document.write(`${n} x ${i} = ${tabuada} </br>`)
// }

// /*4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250 e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.*/

// let multiplo3 = ""
// let multiplo5 = ""

// for (let i = 1; i <= 250; i++) {
//     if (i % 3 == 0) {
//         multiplo3 += i + ", "
//     }
//     if (i % 5 == 0) {
//         multiplo5 += i + ", "
//     } 
// }

// document.write(`Os números de multiplos de 3 é ${multiplo3} </br>`)

// document.write(`Os números de multiplos de 5 é ${multiplo5}`)

// /*5. Faça um programa usando a estrutura “for” que leia um número inteiro positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!*/

// let numero = Number(prompt('Digite um número'))
// for (i = 0; i <= numero; i++) {
//     document.write(`${i} `)
// }

// document.write('Fim!')

// /*6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...*/

// let primo
// let contagem = 0
// for(i = 30; i >= 1; i--) {
//     primo = true

//     for(j = 2; j < i; j++) {
//         if(i % j == 0) {
//             console.log('não é primo')
//             primo = false;
//             break
//         }  
//     }
//     if(primo) {
//         document.write(`[${i}] ,`)
//         } else {
//         contagem += i + ","
//         document.write(`${i} ,`)
//         }
// }

/*7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.*/

let totalSomado = 0
let numerosPositivos = 0
let numerosNegativos = 0

for(let i = 1; i <= 10; i++) {
    let lerNumero = Number(prompt("Digite um valor."))
    totalSomado += lerNumero

    if(lerNumero >= 0 )
        numerosPositivos++
    else
        numerosNegativos++
}

let mediaNumeros = totalSomado / 10
let mediaNegativos = (numerosNegativos / 10) * 100
let mediaPositivos = (numerosPositivos / 10) * 100

document.write(`A média aritmética dos valores é ${mediaNumeros}. </br>`)

document.write(`A quantidade de valores positivos é ${numerosPositivos}. </br>`)

document.write(`A quantidade de valores negativos é ${numerosNegativos}. </br>`)

document.write(`o percentual de valores positivos é de ${mediaPositivos}%. </br>`)

document.write(`o percentual de valores negativos é de ${mediaNegativos}%. </br>`)