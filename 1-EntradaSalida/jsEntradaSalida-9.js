/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var primerSueldo;
	var primerResultado;
	var calculo;

	primerSueldo=sueldo.value;
	primerResultado=resultado.value;

	primerSueldo=parseInt(primerSueldo);
	primerResultado=parseInt(primerResultado);

	calculo=primerSueldo*1.10;

	resultado.value=calculo;
	
}
