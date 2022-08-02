// Tipo var (Funciona em qualquer parte do código)
/*
var altura = 10;
var comprimento = 15;

var area = altura * comprimento // var pode ser declara antes ou depois

console.log(area)

var area; // a var não precisa ser declarada porém é uma boa pratica
*/
// Tipo let
/*
let forma = "Retângulo";
let altura = 5;
let comprimento = 10;

let area;

if(forma === "Retângulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

*/
// Tipo const (uma vez usada, não da para alterar)

const forma = "Quadrado"
const altura = 5;
const comprimento = 10;

let area; // não pode ser const pois pode ter diferente valores

if (forma === "Quadrado") {
    area = altura * comprimento
} else { 
    area = (altura * comprimento) / 2;
}

console.log(area);