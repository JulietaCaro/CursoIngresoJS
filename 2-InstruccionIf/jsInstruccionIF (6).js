function mostrar()
{
	var laEdad;
	var mensaje;
	
	laEdad=edad.value;


//tomo la edad
	
	if(laEdad<13)
	{
	mensaje="Es niño";
	}	else
			{ 
				if(laEdad<17)
				{
					mensaje="Es adolescente";

				}else
				 	{
				 		mensaje="Es adulto";
					}
				}
	
alert(mensaje);
}//FIN DE LA FUNCIÓN