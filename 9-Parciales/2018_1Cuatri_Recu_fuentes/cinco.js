function mostrar()
{
	
	var primerImporte;
	var segundoImporte;
	var tercerImporte;
	var cuartoImporte;
	var total;
	var totalConDescuento;
	var mayor;

	primerImporte=prompt("Diga el primer importe");
	segundoImporte=prompt("Diga el segundo importe");
	tercerImporte=prompt("Diga el tercer importe");
	cuartoImporte=prompt("Diga el cuarto importe");


	primerImporte=parseInt(primerImporte);
	segundoImporte=parseInt(segundoImporte);
	tercerImporte=parseInt(tercerImporte);
	cuartoImporte=parseInt(cuartoImporte);

	
	total=primerImporte+segundoImporte+tercerImporte+cuartoImporte;


	

	if(total>100)
	{
		totalConDescuento=total*0.9;

	}
	else
	{
		if(total>50)
		{
			totalConDescuento=total*0.95;

		}	

	
		else
		{
		totalConDescuento=total*1.15;

		}

	}	

alert(totalConDescuento);

	

	if(primerImporte>=segundoImporte && primerImporte>=tercerImporte && primerImporte>=cuartoImporte)
	{
		mayor=primerImporte;
	}
	else
	{
		if(segundoImporte>=tercerImporte && primerImporte>=cuartoImporte)
		{	
			mayor=segundoImporte;
		}
		else
		{
			if(tercerImporte>=cuartoImporte)
			{
				mayor=tercerImporte;
			}
			else
			{
				mayor=cuartoImporte;
			}

		}

	}
	
	alert(mayor);	

	











	

}
