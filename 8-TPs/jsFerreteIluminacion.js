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
 	var lamparas;
 	var marca;
 	var cantidad;
 	var pago;
 	var precioBruto;
 	var ingresoBruto;

 	precioBruto=lamparas*cantidad;
 	lamparas=35;
 	lamparas=parseInt(lamparas);
 	marca=document.getElementById("Marca").value;
 	cantidad=parseInt(cantidad);
 	cantidad=document.getElementById("Cantidad").value;
 	

 	if(cantidad>5)
 	{
 		lamparas=precioBruto*0.5;
 		
 		
 	}else
 	{
 		if(cantidad==5);
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				lamparas=lamparas*0.6;
 				
 			}else
 			{
 				lamparas=lamparas*0.7;
 				
 			}
 		}
 	}
 	
 		if(cantidad==4)
 		{
 			if(marca=="ArgentinaLuz" || marca=="“FelipeLamparas”")
 			{
 				lamparas=lamparas*0.75;
 			}

 		}else
 		{
 			lamparas=lamparas*0.80;
 		}


 		if(cantidad==3)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				lamparas=lamparas*0.85;
 			}
 		}else
 			{	
 				if(marca=="“FelipeLamparas”")
 				{
 					lamparas=lamparas*0.9;
 				}
 				else
 				{
 					lamparas=lamparas*0.95;
 				}

 			}

 			pago=lamparas*cantidad;

 			if(pago>119)
 			{
 				ingresoBruto=pago*0.10;
 				pago=pago+ingresoBruto;
 				alert("Por una suma de $120 debe pagar $" +ingresoBruto+" de ingreso bruto");
 			}

 			document.getElementById("precioDescuento").value=pago;
}
