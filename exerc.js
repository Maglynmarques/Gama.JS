// Reverse a String
let newStr ='';

function reverseAString (str){ //comece com o comprimento , enquanto for >=0, decremento.
    for (let i= str.length -1; i>=0; i--){
        newStr += str [i]; // chamar a string atribuição newStr=newStr+str[i]
        console.log(newStr);
    }
}

let resultado = reverseAString ('Hello Gama Academy')