// # Exercício 3

// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;
console.log(`5 é maior do que 20 e menor do que 2? ${ 5 > 20 && 5 < 2 }`)
// b) 5 é igual a 5 ou é igual a “5”;
console.log(`5 é igual a 5 e 5 é igual a "5". ${5 === 5 || 5 === "5"}`)
// c) negação de (vinte é maior que cinquenta)
console.log(`Negação de que 20 é maior do que 50? ${!(20 > 50)}.`)
// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacao1 = 20 > 50 || 50 > 60
console.log(`vinte é maior do que cinquenta ou 50 é maior do que sessenta? ${operacao1} `)
// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

// ### Parte 2
console.log("Parte dois ----")
// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

// Calcule:

// 1) O salário fixo mais o auxílio creche
let salario = 2000
let auxilio = 45.5*2
console.log(`O salário fixo mais auxilio creche de Fulano da silva é um total de ${salario + auxilio} reais`)
// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissaoJan = 5784.50 * 0.1
console.log(`Fulano da Silva recebeu ${comissaoJan} reais de comissão em janeiro`)
// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let inss = 0.05
console.log(`Fulano da Silva será descontado em ${((salario + comissaoJan) * inss).toFixed(2)} reais.`)
// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let comissaoFev = 3418.41 * 0.1
let comissaoMar = 4124.10 * 0.1
let comissaoAbr = 1874.00 * 0.1
let comissaoMai = 7000.00 * 0.1
let comissaoJun = 9450.00 * 0.1
let salJan = (salario + auxilio + comissaoJan) - (salario + comissaoJan)*(inss)
let salFev = (salario + auxilio + comissaoFev) - (salario + comissaoFev)*(inss)
let salMar = (salario + auxilio + comissaoMar) - (salario + comissaoMar)*(inss)
let salAbr = (salario + auxilio + comissaoAbr) - (salario + comissaoAbr)*(inss)
let salMai = (salario + auxilio + comissaoMai) - (salario + comissaoMai)*(inss)
let salJun = (salario + auxilio + comissaoJun) - (salario + comissaoJun)*(inss)
console.log(`Fulano da Silva ganhou um salário de ${ salJan.toFixed(2) } em janeiro`)
console.log(`Fulano da Silva ganhou um salário de ${ salFev.toFixed(2) } em fevereiro`)
console.log(`Fulano da Silva ganhou um salário de ${ salMar.toFixed(2) } em março`)
console.log(`Fulano da Silva ganhou um salário de ${ salAbr.toFixed(2) } em abril`)
console.log(`Fulano da Silva ganhou um salário de ${ salMai.toFixed(2) } em maio`)
console.log(`Fulano da Silva ganhou um salário de ${ salJun.toFixed(2) } em junho`)

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
console.log(`A média de salário de Fulano da Silva no período de janeiro à março foi de ${((salJan + salFev + salMar + salAbr + salMai + salJun) / 6).toFixed(2) }`)

