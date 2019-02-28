function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		respuesta=prompt("Ingrese no para salir");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN