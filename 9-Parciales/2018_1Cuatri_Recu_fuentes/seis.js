function mostrar()
{
	var tipoDePago;
	var totalAPagar;
	var paquete;
	var totalDescuento;
	var totalDescuentoPaquete;
	var paypal;
	var efectivo;

	tipoDePago=prompt("Diga el tipo de pago");
	paquete=prompt("Diga que paquete compró");
	totalAPagar=prompt("Diga el precio final");

	totalAPagar=parseInt(totalAPagar);


	switch(tipoDePago)
		{
			case "tarjetaVisa":
				totalDescuento=totalAPagar*0.9;
				break;

			case "paypal":
				totalDescuento=totalAPagar*0.85;
				break;	

			case "mercadoPago":
				totalDescuento=totalAPagar*0.9;
				break;	

			case "efectivo":
				totalDescuento=totalAPagar*0.8;
				break;	

				default:
				totalDescuento=totalAPagar*0.95;
		}

alert(totalDescuento);

	
	switch(paquete)
	{
		case "todoIncluido":
			if(tipoDePago==paypal)
			{	
				totalDescuentoPaquete=(totalAPagar*0.85)*0.9;
			}

			else
			{
				if(tipoDePago==efectivo)
				{
					totalDescuentoPaquete=(totalAPagar*0.8)*0.85;
				}
			
			}	


		case "soloDesayunos":
			if(tipoDePago==efectivo)
			{
				totalDescuentoPaquete=(totalAPagar*0.85)*0.9;
			}	
			
			alert(totalDescuentoPaquete);



	}




	



	






}
