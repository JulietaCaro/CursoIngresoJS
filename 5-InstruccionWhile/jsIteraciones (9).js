function mostrar()
{
	// declarar variables
	var contador;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//var bandera;

	contador=0;
	respuesta='si';
	/*numeroMaximo=-9999;
	numeroMinimo=9999;*/
	//bandera=0;


	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(contador==0) /*con bandera pongo si es igual a 0 despues si bandera es igual a 1 se rompe */
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;

		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}

		
		contador++;
		respuesta=prompt("Ingrese no para salir");
	}

console.log("el maximo es: "+numeroMaximo);
console.log("el minimo es: "+numeroMinimo);

document.getElementById('minimo').value=numeroMinimo;
document.getElementById("maximo").value=numeroMaximo;



}//FIN DE LA FUNCIÓN