const notas = [10 ,6 ,8] 

notas.push(7) // push = adiciona info no final do array
console.log(notas) // [ 10, 6, 8, 7 ]

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media) // 7.75