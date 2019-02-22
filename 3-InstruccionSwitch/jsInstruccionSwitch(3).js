function mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
var mesDelAño;
	var mensaje;

	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 días";
			break;

			default:
				mensaje="Este mes tiene mas de 30 dias";
			break;	
	}		

alert(mensaje);	
	


}//FIN DE LA FUNCIÓN