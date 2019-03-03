function mostrar()
{	
	var precioInicial;
	var porcentaje;
	var precioConDescuento;

	precioInicial=prompt("Diga el precio inicial");
	porcentaje=prompt("Diga el porcentaje de descuento");

	precioInicial=parseFloat(precioInicial);
	porcentaje=parseInt(porcentaje);

	precioConDescuento=precioInicial-(precioInicial*porcentaje/100);

	document.getElementById('elPrecioFinal').value=precioConDescuento;
}
