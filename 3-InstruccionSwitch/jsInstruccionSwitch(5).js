function mostrar()
{
//tomo la edad  
//var laHora = document.getElementById('hora').value;

//alert (laHora);
	var horaDelDia;
	var mensaje;

	horaDelDia=document.getElementById('hora').value;
	horaDelDia=parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
			break;

		default:
			break;		


	}	

alert(mensaje);
	



}//FIN DE LA FUNCIÓN