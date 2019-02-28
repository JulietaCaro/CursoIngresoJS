function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';

	var queresContinuar;

	queresContinuar="si";
	while(queresContinuar!="no")
	{



		queresContinuar=prompt("para salir ingrese no");
	}	
	

	
	



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN


/*var contadorDeVueltas;

	contadorDeVueltas=0; la primera vez el contador debe tener valor
	while(contadorDeVueltas<5)
	{
		contadorDeVueltas=contadorDeVueltas+1;para poder sumarle
		o contadorDeVueltas++ es lo mismo que lo anterior
	}




var contadorDeAlumnos;
	var edad;

	contadorDeAlumnos=0;
	while(true) 
	{
		contadorDeEdad=prompt("Ingrese su edad");
		edad=parseInt(edad);
		if(edad==66)
		{
			
			break;
		}
		if(contadorDeAlumnos==100)
		{
			break;
		}
		contadorDeAlumnos=++;
	}
	
	if(contadorDeAlumnos==100) para ver si vio a los 100, dio la vuelta, no encontro ninguno de 66
	{
		debo informar que no encontre a nadie con 66
	}
	
*/
