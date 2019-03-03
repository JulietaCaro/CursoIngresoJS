/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
	

}

	/*var notaAlumno;
	var sexoAlumno;
	var contador;
	var promedioNotas;
	var contadorNotas;
	var acumuladorNotas;
	var notaMinima;
	var banderaNotaMinima;
	var sexoNotaMinima;
	var contadorHombres;

	contador=0;
	notaAlumno=0;
	sexoAlumno=0;
	contadorNotas=0;
	acumuladorNotas=0;
	sexoNotaMinima=0;
	notaMinima=0;
	contadorHombres=0;

	while(contador<5)
	{
		notaAlumno=prompt("Diga la nota del alumno");
		notaAlumno=parseInt(notaAlumno);

		while(notaAlumno<0 || notaAlumno>10)
		{
			notaAlumno=prompt("Reingrese la nota del alumno");
			break;
		}	

		sexoAlumno=prompt("Diga el sexo del alumno");

		while(sexoAlumno!="m" && sexoAlumno!="f")
		{	
			sexoAlumno=prompt("Reingrese el sexo del alumno");
			break;
		}

		if(contador==0 || notaAlumno<=notaMinima)
		{
			notaMinima=notaAlumno;
			sexoNotaMinima=sexoAlumno;
		}
		else
		{	if(notaMinima<notaMinima)
			{
				notaMinima=notaAlumno;
				sexoNotaMinima=sexoAlumno;
			}
		}	
		if(notaAlumno>=6 && sexoAlumno=="m")
			contadorHombres++;




	contador++;	
	contadorNotas++;
	acumuladorNotas=acumuladorNotas+notaAlumno;
	}	

	promedioNotas=acumuladorNotas/contadorNotas;

alert("El promedio de las notas es "+promedioNotas);
alert("La nota minima es "+notaMinima+" y el sexo de esa persona es "+sexoNotaMinima);
alert("la cantidad de varones que su nota haya sido mayor o igual a 6 es "+contadorHombres);*/