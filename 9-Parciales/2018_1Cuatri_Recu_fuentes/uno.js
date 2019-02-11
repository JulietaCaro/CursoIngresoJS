
function mostrar()
{
	var ancho;
	var largo;
	var cuenta;

	ancho=prompt("Diga el ancho");
	largo=prompt("Diga el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	cuenta=ancho*2+largo*2;

	alert("El perimetro es "+cuenta);
}
