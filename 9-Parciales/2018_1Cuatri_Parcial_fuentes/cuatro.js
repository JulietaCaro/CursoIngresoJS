/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/

function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var cuenta;
	var mensaje;

	primerNumero=prompt("Diga el primer numero");
	segundoNumero=prompt("Diga el segundo numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		mensaje=""+primerNumero+segundoNumero;
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
			cuenta=primerNumero-segundoNumero;
			mensaje=cuenta;
		}
		else
		{
			cuenta=primerNumero+segundoNumero;
			mensaje=cuenta;

			if(cuenta>10)
			{
				mensaje="La suma es "+cuenta+" y supero el 10";
			}
		}
	}

alert(mensaje);
}

