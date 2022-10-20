// Exercicio 01

let vlrCompra = parseInt(prompt("valor do abastecimento"));
let litros    = parseFloat(vlrCompra / 6.80);

alert(`O Cliente abasteceu ${litros.toFixed(2)}L`);


// Exercicio 02

let temperatura = parseInt(prompt("temperatura em graus Celsius"));
let formCF = parseFloat((9 * tempCelsius + 160) / 5);
alert (`O valor ${temperatura} em Fahrenheit é ${formFC}`); 


// Exercicio 03

let tempFahrenheit = parseInt(prompt("Valor em Fahrenheit"));
let formFC = parseFloat(((tempFahrenheit - 32 ) * 5) / 9);
alert (`O valor ${tempFahrenheit} em Celsius é ${formFC}`);


// Exercicio 04

let comprimento = parseInt(prompt("valor do comprimento"));
let largura     = parseInt(prompt("valor da largura"));
let altura      = parseInt(prompt("valor da altura"));

let volume = parseFloat(comprimento * largura * altura);
alert(`O volume é de: ${volume}m³`);



// Exercicio 05

let valorInt = parseInt(prompt("Valor numérico"));
let form = parseFloat(( valorInt * valorInt ));

alert (`O valor ${valorInt} ao quadrado é ${form}`);


// Exercicio 06

let numeros1 = parseInt(prompt("digite os numero"));
let numeros2 = parseInt(prompt("digite os numero"));
let numeros3 = parseInt(prompt("digite os numero"));
let numeros4 = parseInt(prompt("digite os numero"));
let numeros5 = parseInt(prompt("digite os numero"));

let soma  = parseFloat(( numeros1 + numeros2 + numeros3 + numeros4 + numeros5 ));
let media = parseFloat(soma / 5);

alert (`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`);


// Exercicio 07

let valoresInt1 = parseInt(prompt("digite os numero"));
let valoresInt2 = parseInt(prompt("digite os numero"));

let divisao = parseFloat(( valoresInt1 % valoresInt2));
alert (`O resto da divisão de ${valoresInt1} por ${valoresInt2} é: ${divisao}`);


// Exercicio 08

let fraseOuPalavra = prompt("escreva uma frase ou uma palavra");
alert(`Este texto tem ${fraseOuPalavra.length} caracteres`);


// Exercicio 09

let string = prompt("escreva uma frase ou uma palavra");
let maiuscula = string[0].toUpperCase() 
let minuscula = string.slice(-1).toLowerCase()

alert(`A primeira letra deste texto é ${maiuscula} e última é o ${minuscula}`);


// Exercicio 10

let nomeSobrenome = prompt("Digite seu nome e sobrenome");
let idadeUsuario  = parseFloat(prompt("Digite sua idade"));
let setorUsuario  = prompt("Digite seu setor")

let formNS = nomeSobrenome.toUpperCase();
alert(`nome: ${formNS} - idade: ${idadeUsuario} - Setor: ${setorUsuario}`);