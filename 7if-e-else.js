const num2 = 10;

if (num2 !== null) {
 console.log(`o número é ${num2}`);
}

//ou 

if (num2) {
    console.log(`o número é ${num2}`);
   }



const num = 11;
if (num > 10 && num < 20) {
  console.log('número válido');
}

//if e else

function verificaNumero(numero) {

    if (numero > 10) {
      return 'número maior que 10';
    } else {
      return 'número não é maior que 10';
    }
    }
   
   console.log(verificaNumero(9)) //número não é maior que 10

   // else if

   const num1 = 15;

if (num1 >= 0 && num1 <= 10) {
  console.log('número entre zero e dez');
} else if (num1 > 10 && num1 <= 20) {
  console.log('número entre dez e vinte');
} else if (num1 > 20 && num1 <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}