function mostrar()
{
	var precioInicial;
	var descuento;
	var cuenta;

	precioInicial=prompt("Diga el precio");
	descuento=prompt("Diga el descuento");

	precioInicial=parseInt(precioInicial);
	descuento=parseInt(descuento);

	cuenta=precioInicial*descuento/100-precioInicial;

	elPrecioFinal.value=cuenta;





}
