/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var laTemperatura;
	var cuenta;

	laTemperatura=Temperatura.value;

	laTemperatura=parseInt(laTemperatura);

	cuenta=(laTemperatura-32)*5/9;

	alert((+laTemperatura"Fahrenheit son "+cuenta));
}

function CentigradosFahrenheit () 
{
	
}
