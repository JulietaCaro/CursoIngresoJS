/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre
 -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/
function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var contadorPositivos;
	var sumaPositivos;
	var promedioPositivos;
	var contadorNegativos;
	var sumaNegativos;
	var numeroMinimo;
	var letraMinimo;
	var numeroMaximo;
	var letraMaximo;
	var contador;

	respuesta='si';
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	contadorPositivos=0;
	sumaPositivos=0;
	contadorNegativos=0;
	sumaNegativos=0;
	contador=0;

	while(respuesta!='no')
	{
		letra=prompt("Ingrese una letra");

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		while(numero<-100 || numero>100)
		{
			numero=prompt("Reingrese un numero, entre -100 y 100");
		}

		if(numero%2==0)
		{
			contadorPares++;
		}
		else
		{
			contadorImpares++;
		}

		if(numero==0)
		{
			contadorCeros++;
		}
		else
		{
			if(numero>0)
			{
				contadorPositivos++;
				sumaPositivos=sumaPositivos+numero;
			}
			else
			{
				contadorNegativos++;
				sumaNegativos=sumaNegativos+numero;
			}
		}

		if(contador==0)
		{
			numeroMaximo=numero;
			letraMaximo=letra;
			numeroMinimo=numero;
			letraMinimo=letra;
		}
		else
		{
			if(numero<numeroMinimo)
			{
				numeroMinimo=numero;
				letraMinimo=letra;
			}
			else
			{
				numeroMaximo=numero;
				letraMaximo=letra;
			}
		}


		contador++;	
		respuesta=prompt("¿Quiere seguir?")
	}

	promedioPositivos=sumaPositivos/contadorPositivos;

	document.write("Cantidad de numero pares: "+contadorPares);	
	document.write(" Cantidad de numero impares: "+contadorImpares);	
	document.write(" Cantidad de ceros: "+contadorCeros);
	document.write(" El promedio de los positivos es: "+promedioPositivos);
	document.write(" La suma de los negativos es "+sumaNegativos);
	document.write(" El numero minimo es "+numeroMinimo+" y su letra es "+letraMinimo);
	document.write(" El numero maximo es "+numeroMaximo+" y su letra es "+letraMaximo);
}	
