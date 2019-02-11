function mostrar()
{
	var precioInicial;
	var porcentaje;
	var cuenta;

	precioInicial=prompt("Diga el precio inicial");
	porcentaje=prompt("Diga el porcentaje");

	precioInicial=parseInt(precioInicial);
	porcentaje=parseInt(porcentaje);

	cuenta=precioInicial*porcentaje/100-precioInicial;

	elPrecioFinal.value=cuenta;	





}
