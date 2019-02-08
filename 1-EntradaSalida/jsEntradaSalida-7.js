/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var primerNumero;
	var segundoNumero;

function sumar()
{	
	var suma;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	alert("la suma es "+suma);

}

function restar()
{
	var resta;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;

	alert("la resta es "+resta);


}

function multiplicar()
{ 
	var multiplicacion;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	multiplicacion=primerNumero*segundoNumero;

	alert("la multiplicaciones "+multiplicacion);


}

function dividir()
{
	var division

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	division=primerNumero/segundoNumero;

	alert("la division es "+division);
	
}

