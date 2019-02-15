function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var examen;
	var mensaje;
	examen=Math.floor((Math.random() * 10) + 1);

	if(examen>8)
	{
		mensaje=" EXCELENTE";
	}
	else
	{
			if(examen>3)
			{
				mensaje=" APROBÓ";
			}else
			{
				mensaje=" Vamos, la proxima se puede";
			}
	}

	alert("Su nota es: "+examen +mensaje);


}//FIN DE LA FUNCIÓN