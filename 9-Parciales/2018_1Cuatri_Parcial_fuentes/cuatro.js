function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var calculo;
	var mensaje;

	primerNumero=prompt("Diga un numero");
	segundoNumero=prompt("Diga otro numero");

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	if(primerNumero==segundoNumero)
	{
		mensaje=""+primerNumero+segundoNumero;
	}
		 
else{	
		if(primerNumero>segundoNumero)
			{
				calculo=primerNumero-segundoNumero;
				mensaje=calculo;
			}
	}		
	else{
			if(primerNumero<segundoNumero)
				{
					calculo=primerNumero+segundoNumero;
					mensaje=calculo;
				}
		
		}
		

	alert(mensaje);
}
