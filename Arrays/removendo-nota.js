const notas = [10 ,7 ,8, 5, 10]

notas.pop() // remove o ultimo indice do array
console.log(notas) // [ 10, 7, 8, 5 ]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`) // A média é 7.5