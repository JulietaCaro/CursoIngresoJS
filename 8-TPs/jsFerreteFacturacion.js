/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;
	
	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	suma=(primerPrecio+segundoPrecio+tercerPrecio);

	alert("La suma de los productos son "+suma);


}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var promedio;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	promedio=(primerPrecio+segundoPrecio+tercerPrecio)/3;

	alert("El promedio de los precios es "+promedio);



	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var precioCasiFinal;
	var precioFinal;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	precioCasiFinal=(primerPrecio+segundoPrecio+tercerPrecio)*0.21;
	precioFinal=precioCasiFinal+primerPrecio+segundoPrecio+tercerPrecio;
	

	alert("El precio es "+precioFinal);	
}
