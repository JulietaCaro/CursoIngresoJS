function mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;
var mesDelAño;
	var mensaje;
	mesDelAño=document.getElementById('mes').value;
	

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="Que comience bien el año";

		break;

		case "Marzo":
			mensaje="A clases";
		break;
			
		case "Julio":
			mensaje="Se vienen las vacaciones";
		break;
				
		case "Diciembre":
			mensaje="Felices fiestas";
		break;
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN