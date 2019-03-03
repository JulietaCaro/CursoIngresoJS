/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio=prompt("Diga el precio inicial");
	porcentaje=prompt("Diga el porcentaje");

	precio=parseFloat(precio);
	porcentaje=parseInt(porcentaje);

	precioFinal=precio-(precio*porcentaje/100);

	document.getElementById('elPrecioFinal').value=precioFinal;



}

	/*var amigos;
	var precio;
	var precioConPropina;
	var precioConIVA;
	var precioPorPersona;
	

	amigos=prompt("Diga la cantidad de amigos");
	precio=prompt("Diga el precio de la cena");
	

	amigos=parseInt(amigos);
	precio=parseInt(precio);

	amigos=losAmigos.value;
	precio=elPrecio.value;

	precioConPropina=precio*1.10;

	precioConIVA=precioConPropina*1.21;

	precioPorPersona=precioConIVA/amigos;

	alert("El precio total a pagar es de $ "+precioPorPersona);
