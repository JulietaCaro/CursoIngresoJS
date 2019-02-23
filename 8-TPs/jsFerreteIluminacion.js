/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marca;
 	var totalBruto;
 	var porcentajeDescuento;
 	var totalConDesucuento;
 	var ingresosBrutos;

 	ingresosBrutos=0;
 	cantidadLamparas=document.getElementById("Cantidad").value;
 	marca=document.getElementById("Marca").value;
 	
 	cantidadLamparas=parseInt(cantidadLamparas);

 	totalBruto=cantidadLamparas*35;


 	switch(cantidadLamparas)
 	{
 		case 5:
 			if(marca=="ArgentinaLuz")
			{
				porcentajeDescuento=0.4;
			}	
			else
			{
				porcentajeDescuento=0.3;
			}
 		break;

 		case 4:
 			if(cantidadLamparas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					porcentajeDescuento=0.25;
				}
				else
				{
					porcentajeDescuento=0.20;
				}
			}	
		break;
		
		case 3:

			if(marca=="ArgentinaLuz")
					{
						porcentajeDescuento=0.15;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							porcentajeDescuento=0.1;
						}
						else
						{
							porcentajeDescuento==0.05;
						}
					}		
		break;				

		default:
			if(cantidadLamparas>5)
 				{	
 					porcentajeDescuento=0.5;
				}		

 	}






 	/*if(cantidadLamparas>5)
 	{	
 		porcentajeDescuento=0.5;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marca=="ArgentinaLuz")
			{
				porcentajeDescuento=0.4;
			}	
			else
			{
				porcentajeDescuento=0.3;
			}		
		}
		else 
		{
			if(cantidadLamparas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					porcentajeDescuento=0.25;
				}
				else
				{
					porcentajeDescuento=0.20;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marca=="ArgentinaLuz")
					{
						porcentajeDescuento=0.15;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							porcentajeDescuento=0.1;
						}
						else
						{
							porcentajeDescuento==0.05;
						}
					}
				}
			}
			
		}
	}

*/
totalConDesucuento=totalBruto-(totalBruto*porcentajeDescuento);

	if(totalConDesucuento>120)
	{
		ingresosBrutos=totalConDesucuento*0.1;
		alert("Usted pago "+ingresosBrutos+" de IIBB.");
	}





precioDescuento.value=totalConDesucuento;


}


	





































	





