// Tipo de dado
// Booleanos

// Conversão implícita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // false

console.log(numero == numeroString); // true

console.log(numero + numeroString); // vira uma concatenação

console.log(numero + Number(numeroString)); // Transforma string em Numero

console.log(String(numero) + numeroString); // Transforma Numero em String

let telefone = 12341234;

console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

