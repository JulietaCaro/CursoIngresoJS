
function mostrar()
{
	var primerAncho;
	var primerLargo;
	var cuenta;

	primerAncho=prompt("Diga el ancho");
	primerLargo=prompt("Diga el largo");
	

	primerAncho=parseInt(primerAncho);
	primerLargo=parseInt(primerLargo);

	cuenta=primerAncho*2+primerLargo*2;

	alert("El perimetro es "+cuenta);
//Como tengo alert, no debo poner 
//el resultado en prompt
}