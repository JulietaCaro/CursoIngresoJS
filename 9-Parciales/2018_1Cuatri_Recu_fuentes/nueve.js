/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
 el peso el cual debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) 
 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/
function mostrar()
{
	var contador;
	var animal;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturaPar;
	var pesoMaximo;
	var temperaturaPesoMaximo;
	var animalPesoMaximo;
	var animalBajoCero;
	var contadorPeso;
	var sumaPeso;
	var promedioPeso;
	var pesoMaximoBajoCero;
	var pesoMinimoBajoCero;

	contador=0;
	respuesta='si';
	temperaturaPar=0;
	animalBajoCero=0;
	contadorPeso=0;
	sumaPeso=0;

	while(respuesta!='no')
	{
		animal=prompt("Ingrese el nombre de un animal");

		peso=prompt("Ingrese el peso de ese animal");
		peso=parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso=prompt("Reingrese el peso, entre 1 y 1000 kg");
		}

		temperatura=prompt("Ingrese la temperatura del habitat");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 ||temperatura>30)
		{
			temperatura=prompt("Reingrese la temperatura, entre -30 y 30º");
		}

		if(temperatura%2==0)
		{
			temperaturaPar++;
		}

		if(contador==0)
		{
			pesoMaximo=peso;
			temperaturaPesoMaximo=temperatura;
			animalPesoMaximo=animal;
		}
		else
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
				temperaturaPesoMaximo=temperatura;
				animalPesoMaximo=animal;	
			}
		}

		if(temperatura<0)
		{
			animalBajoCero++;
		}

		if(temperatura<0 && contador==0)
		{
			pesoMinimoBajoCero=peso;
			pesoMaximoBajoCero=peso;
		}
		else
		{
			if(peso>pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero=peso;
			}
			else
			{
				pesoMinimoBajoCero=peso;
			}
		}

		contadorPeso++;
		contador++;
		respuesta=prompt("¿Desea seguir?");
		sumaPeso=sumaPeso+peso;
	}

	promedioPeso=sumaPeso/contadorPeso;

	document.write("Cantidad de temperaturas pares: "+temperaturaPar);
	document.write(" El animal mas pesado es "+animalPesoMaximo+" y la temperatura de su habitat es "+temperaturaPesoMaximo+"º");
	document.write(" Cantidad de animales que viven en temperaturas inferiores a cero: "+animalBajoCero);
	document.write(" El promedio de los pesos es "+promedioPeso);
	document.write(" El peso minimo del animal cuya temperatura es bajo cero es "+pesoMinimoBajoCero+" y el maximo es "+pesoMaximoBajoCero);
}
