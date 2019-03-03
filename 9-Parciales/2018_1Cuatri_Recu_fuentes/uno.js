/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Diga el ancho");
	largo=prompt("Diga el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;

	alert("El perimetro es "+perimetro);
}

	/*var primerMascota;
	var segundaMascota;
	var pesoPrimerM;
	var pesoSegundaM;
	var suma;

	primerMascota=prompt("Diga el nombre de su mascota");
	segundaMascota=prompt("Si tiene otra mascota, diga su nombre");

	pesoPrimerM=prompt("Diga el peso de la primer mascota");
	pesoSegundaM=prompt("Diga el peso de la segunda mascota");


	pesoPrimerM=parseInt(pesoPrimerM);
	pesoSegundaM=parseInt(pesoSegundaM);

	suma=pesoPrimerM+pesoSegundaM;
	

	alert("tenes dos mascotas "+primerMascota+"y "+segundaMascota+"que pesan "+pesoPrimerM+"y "+pesoSegundaM+"kilos, la suma de los kilos es "+suma);*/