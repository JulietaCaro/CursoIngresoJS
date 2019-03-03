/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 
1 y 100 (validar), la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/
function mostrar()
{
	var marca;
	var peso;
	var temperatura;	
	var respuesta;
	var contadorPares;
	var pesoMaximo;
	var marcaPesoMaximo;
	var contador;
	var contadorTemperaturaMenosCero;
	var sumaPeso;
	var contadorPeso;
	var promedioPeso;
	var pesoMinimo;

	respuesta='si';
	contador=0;
	contadorPares=0;
	pesoMaximo=0;
	contadorTemperaturaMenosCero=0;
	contadorPeso=0;
	sumaPeso=0;
	pesoMinimo=0;

	while(respuesta!='no')
	{
		marca=prompt("Diga la marca del producto");

		peso=prompt("Diga el peso del producto");
		peso=parseInt(peso);

		while(peso<1 || peso>100)
		{
			peso=prompt("Reingrese el peso, entre 1 y 100 kg");
		}

		temperatura=prompt("Diga la temperatura del producto");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Reingrese la temperatura entre -30 y 30º");
		}

		if(temperatura%2==0)
		{
			contadorPares++;
		}
		if(contador==0)
		{
			pesoMaximo=peso;
			marcaPesoMaximo=marca;
			pesoMinimo=peso;
		}
		else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
				marcaPesoMaximo=marca;
			}
			else
			{
				pesoMinimo=peso;
			}
		}

		if(temperatura<0)
		{
			contadorTemperaturaMenosCero++;
		}


		contadorPeso++;
		sumaPeso=sumaPeso+peso;
		
		contador++;
		respuesta=prompt("¿Desea seguir?")
	}

	promedioPeso=sumaPeso/contadorPeso;

	document.write("Cantidad de temperaturas pares: "+contadorPares);
	document.write(" Marca del producto mas pesado: "+marcaPesoMaximo);
	document.write(" Cantidad de productos a temperatura menor a cero: "+contadorTemperaturaMenosCero);
	document.write(" El promedio de los pesos es: "+promedioPeso);
	document.write("El peso maximo es: "+pesoMaximo);
	document.write(" El peso minimo es: "+pesoMinimo);
}
