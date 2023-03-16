// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que o segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
// ```

let x = Number( prompt("Insira um número x") )
let y = Number( prompt("Insira um número y") )

console.log(`x é ${ x } e y é ${ y } `)
console.log(`x é maior do que y? ${ x > y}`)
console.log(`Os números são iguais? ${ x === y }`)
console.log(`x é divisível por y? ${ x % y === 0 }`)
console.log(`y é divisível por x? ${ y % x === 0 }`)
