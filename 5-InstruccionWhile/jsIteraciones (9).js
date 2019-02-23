function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var flag;

	flag=false;

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		
			if(flag==false || numero>maximo)
			{
				maximo=numero;
			}
			if(flag==false || numero<minimo)
			{
				minimo=numero;
				flag=true;
			}
	}

document.getElementById('minimo').value=minimo;
document.getElementById("maximo").value=maximo;



}//FIN DE LA FUNCIÓN