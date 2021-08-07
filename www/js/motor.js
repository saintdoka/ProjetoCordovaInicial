// This is a JavaScript file

var valor1;
var valor2;
var resultado;

function Calc (){
  valor1 = parseInt(document.getElementById('valor1').value);// pega o valor1 
	valor2 = parseInt(document.getElementById('valor2').value);// pega o valor2
	resultado = valor1 + valor2 ;

  document.getElementById('result').value = resultado;
}