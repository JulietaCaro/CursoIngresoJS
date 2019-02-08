
function mostrar()
{
	var primerAncho;
	var primerLargo;
	var cuenta;

	primerAncho=prompt("Diga el ancho");
	primerLargo=prompt("Diga el largo");
	cuenta=prompt("Resultado");

	primerAncho=ancho.value;
	primerLargo=largo.value;
	resultado.value=cuenta;

	primerAncho=parseInt(primerAncho);
	primerLargo=parseInt(primerLargo);

	cuenta=primerAncho*2+primerLargo*2;

	cuenta=resultado.value;


}