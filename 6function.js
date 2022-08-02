function say(texto) {
    console.log(texto)
}

say("Igor");
say("Henrique Bratti")

function soma1() {
    return 2 + 2;
}

say(soma1())

// parâmetros de função

function soma2 (numero1, numero2) {
    return numero1 + numero2;
}

say(soma2(10, 5))

function nomeEIdade (nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos`
}
say(nomeEIdade("Igor", 26))

function multipicacao(numero1, numero2) {
    return numero1 * numero2;
}

say(multipicacao(soma2(5, 5), soma2(10, 2)));

// Função sem retorno e sem parâmetro
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// Função sem retorno, com parâmetro

function cumprimentar2(pessoa){
    console.log(`oi gente! Meu nome é ${pessoa}`)
   }
   
   cumprimentar2("Helena")

// Função com retorno, sem parâmetro

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


const soma = function(num1, num2) {
    return num1 + num2;
}

say(soma(1, 3));

// arrow function (ES6)

const arrowFunction = nome => `meu nome é ${nome}`;
const somaa = (num1, num2) => num1 + num2;

say(somaa(15, 20))

// com + de uma linha

const somaNumeros = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numero de 1 a 9"
    } else {
        return num1 + num2
    }
}

say(somaNumeros(10, 9))

/*
Para saber mais: Mais sobre funções

As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, O JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
Para ver mais funções matemáticas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description
*/