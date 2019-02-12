/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	
	var largoTerreno;
	var anchoTerreno;
	var cuenta;

	largoTerreno=Largo.value;
	anchoTerreno=Ancho.value;

	largoTerreno=parseInt(largoTerreno);
	anchoTerreno=parseInt(anchoTerreno);

	cuenta=(largoTerreno*2+anchoTerreno*2)*3;

	alert("Se necesitan "+cuenta);

}
function Circulo () 
{
	var radio;
	var calculo;

	radio=Radio.value;

	radio=parseInt(radio);

	calculo=radio*3.14;

	alert("Se necesitan "+calculo);
	
}
function Materiales () 
{
	
}