/*Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir". 
*/
function mostrar()
{
	var hora;
	var mensaje;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="es de mañana";
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="es de tarde";
		break;
		
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			mensaje="es de noche";
		if(hora>=20 && hora<24)
		{
			alert("A dormir");		}	
		break;

		default:
			mensaje="La hora no es valida";
	}	

	

alert(mensaje);
}

/*var tipoDePago;
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



*/