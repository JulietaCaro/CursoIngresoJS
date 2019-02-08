/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt("Diga su nombre");
 	elNombre.value=nombre;
	
	getElementById(`elNombre`)=nombre;

	//tambien se puede con .value;
	nombre=elNombre.value; 


}

//con prompt pongo el dato que quiero obtener
//