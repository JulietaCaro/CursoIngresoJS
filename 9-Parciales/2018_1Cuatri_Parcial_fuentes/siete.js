/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


function mostrar()
{
	var notas;
	var sexo;
	var contador;
	var alumnos;
	var promedio;
	var notasDadas;

	contador=0;
	alumnos=5

	/*while(contador<5)
	{
		notas=prompt("Diga la nota del alumno");
		sexo=prompt("Diga el sexo del alumno");
		notas=parseInt(nota);
		contador++;

	}*/

	while(notas<0 || notas>10)
	{
		notasDadas=prompt("Diga las notas");
		notasDadas=parseInt(notas);
	}

	while(contador<5)
	{
		notasDadas=prompt("Diga la nota del alumno");
		sexo=prompt("Diga el sexo del alumno");
		notasDadas=parseInt(notas);
		contador++;
	}





promedio=(notas+notasDadas)/5;
alert("El promedio de las notas es "+promedio);
}
