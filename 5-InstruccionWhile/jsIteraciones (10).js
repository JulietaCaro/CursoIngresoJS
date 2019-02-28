function mostrar()
{

	var contador;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivoYNegativo;

	//contador=0;
	//declarar contadores y variables 
	
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadPares=0;



	while(respuesta!="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		
		if(numero==0)
		{
			cantidadCeros++;
		}
		else
		{
			if(numero<0) 
			{
				sumaNegativos=sumaNegativos+numero;
				cantidadNegativos++;
			}
			else 
			{
				sumaPositivos=sumaPositivos+numero;
				cantidadPositivos++;
			}
		}		
			
		if(numero%2==0)
		{
			cantidadPares++;
		}


		respuesta=prompt("Ingrese no para salir");
	}

promedioNegativos=sumaNegativos/cantidadNegativos;
promedioPositivos=sumaPositivos/cantidadPositivos;
diferenciaPositivoYNegativo=sumaPositivos-sumaNegativos;



console.log("La suma de negativos es "+sumaNegativos);
console.log("La suma de positivos es "+sumaPositivos);
console.log("La cantidad de numeros negativos es "+cantidadNegativos);
console.log("La cantidad de numeros positivos es "+cantidadPositivos);
console.log("La cantidad de ceros es "+cantidadCeros);
console.log("La cantidad de numeros pares es "+cantidadPares);
console.log("El promedio de los positivos es "+promedioPositivos);
console.log("El promedio de los negativos es "+promedioNegativos);
console.log("La diferencia entre los positivos y negativos es "+diferenciaPositivoYNegativo);
}//FIN DE LA FUNCIÓN