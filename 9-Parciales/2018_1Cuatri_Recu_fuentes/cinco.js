/*Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
function mostrar()
{
	var diaDeSemana;
	var mensaje;

	diaDeSemana=prompt("Diga un dia de la semana");

	switch(diaDeSemana)
	{
		case "sabado":
		case "domingo":
			mensaje="buen finde";
		break;
		
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar";
		break;
		
		default:
			mensaje="No es un dia valido";

	}
alert(mensaje);	
	











	

}
	


	/*var primerImporte;
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
*/