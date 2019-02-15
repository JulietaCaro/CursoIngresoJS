
function mostrar()
{
	var primerMascota;
	var segundaMascota;
	var pesoPrimerM;
	var pesoSegundaM;
	var suma;

	primerMascota=prompt("Diga el nombre de su mascota");
	segundaMascota=prompt("Si tiene otra mascota, diga su nombre");

	pesoPrimerM=prompt("Diga el peso de la primer mascota");
	pesoSegundaM=prompt("Diga el peso de la segunda mascota");

	primerMascota=mascotaPrimera.value;
	segundaMascota=mascotaSegunda.value;

	pesoPrimerM=primerPeso.value;
	pesoSegundaM=segundoPeso.value;

	pesoPrimerM=parseInt(pesoPrimerM);
	pesoSegundaM=parseInt(pesoSegundaM);

	suma=pesoPrimerM+pesoSegundaM;
	

	alert("tenes dos mascotas "+primerMascota"y "+segundaMascota"que pesan "+pesoPrimerM"y "+pesoSegundaM "kilos, la suma de los kilos es "+suma);
}
