/*mostrar * en un solo alert * el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar()
{
	var nombre;
	var localidad;

	nombre=document.getElementById('elNombre').value;
	localidad=document.getElementById('laLocalidad').value;

	alert("ustes es "+nombre+" y vive en la localidad de "+localidad);





}

	/*var precio;
  	var calculoDescuento;
  	var calculoIVA;

  	precio=prompt("Diga el precio");
  	precio=elPrecio.value;

  	precio=parseInt(precio);

  	calculoDescuento=precio*0.9;

  	calculoIVA=calculoDescuento*1.21;

  	alert("Tu compra es de $ "+precio"tenes un descuento del 10% queda en $ "+calculoDescuento"mas el IVA es $ " +calculoIVA);*/