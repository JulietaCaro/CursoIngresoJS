function mostrar()
{

//var clave = prompt("ingrese el número clave.");
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
