/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/
function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var cuenta;
	var mensaje;

	primerNumero=prompt("Diga el primer numero");
	segundoNumero=prompt("Diga el segundo numero");

	primerNumero=parseFloat(primerNumero);
	segundoNumero=parseFloat(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		mensaje=""+primerNumero+segundoNumero;
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
			cuenta=primerNumero/segundoNumero;
			mensaje=cuenta;
		}
		else
		{
			cuenta=primerNumero+segundoNumero;
			mensaje=cuenta;

			if(cuenta<50)
			{
				mensaje="la suma es "+cuenta+" y es menor a 50";
			}
		}
	}

alert(mensaje);
}

/*var libro;
	var dineroGastado;
	var primerResultado;

	libro=prompt("Cantidad de libros comprados");
	dineroGastado=prompt("Diga el precio de los libros");
	
	libro=elLibro.value;
	dineroGastado=elDinero.value;

	libro=parseInt(libro);
	dineroGastado=parseInt(dineroGastado);

}	
	if(libro>2 && dineroGastado>=2000){
		primerResultado=dineroGastado-(dineroGastado*25)/100;*/