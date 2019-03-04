/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
	var contador;
	var notas;
	var sexo;
	var SumaNotas;
	var contadorNotas;
	var promedioNotas;
	var notaMinima;
	var sexoNotaMinima;
	var contadorVaron;

	contador=0;
	SumaNotas=0;
	contadorNotas=0;
	notaMinima=0;
	sexoNotaMinima=0;
	notas=0;
	sexo=0;
	contadorVaron=0;

	while(contador<5)
		{
			notas=prompt("Ingrese la nota del alumno");
			notas=parseInt(notas);

			while(notas<0 || notas>10)
			{
				notas=prompt("Reingrese la nota del alumno");
			}	

			sexo=prompt("Ingrese el sexo del alumno, f o m");

			while(sexo!="f" && sexo!="m")
			{
				sexo=prompt("Reingrese el sexo del alumno");
			}

			if(contador==0 || notas<=notaMinima)
			{
				notaMinima=notas;
				sexoNotaMinima=sexo;
			}
			else
			{
				if(notas<notaMinima)
				{
					notaMinima=notas;
					sexoNotaMinima=sexo;
				}
			}

			if(notas>5 && sexo=="m")
			{
				contadorVaron++;
			}

			contador++;
			contadorNotas++;
			SumaNotas=SumaNotas+notas;
		}

	promedioNotas=SumaNotas	/contadorNotas;

	alert("El promedio de las notas es "+promedioNotas);
	alert("La nota mas baja es "+notaMinima+" y el sexo del alumno es "+sexoNotaMinima);
	alert("Cantidad de varones que su nota es mayor o igual a seis: "+contadorVaron);	

}

	