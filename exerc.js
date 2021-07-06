//algoritmos FizzBuzz trabalha com verificações 
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz',
//Se não for um número => 'Não é um número'
//Se não for divisivel nem por 3 e nem por 5 => Entrada

let resultado= fizzBuzz(9);
console.log(resultado)

function fizzBuzz (entrada){
    if (typeof entrada !== 'number')
        return 'Nao é um número';
    if ((entrada % 3 === 0) && (entrada% 5 ===0))   //a entrada divisivel por 3 e
                                                    //entrada for divisivel 5(logica se o resto da divisão for igual a 0. 
                                                    //Ele é divisivel por 3 e 5)
        return 'FizzBuzz'

    if (entrada% 3 ===0)
        return 'Fizz';

    if (entrada% 5 ===0)
        return 'Buzz'; 
    
    return entrada;

}