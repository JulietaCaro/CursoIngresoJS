/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primerImporte;
	var primerResultado;
	var cuenta;

	primerImporte=importe.value;
	primerResultado=resultado.value;

	primerImporte=parseInt(primerImporte);
	primerResultado=parseInt(primerResultado);

	cuenta=primerImporte*0.75;

	resultado.value=cuenta;
}
