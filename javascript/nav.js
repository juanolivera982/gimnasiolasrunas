function desplegarMenu()
{
	var nav = document.querySelector("nav");
	if(nav.style.display === "block"){
		nav.style.display = "none";
	}else{
		nav.style.display = "block";
	}
}

function inicio()
{
	var hamburguesa = document.getElementById("linkHaburguesa");
	hamburguesa.addEventListener("click", desplegarMenu);

	var submenu = document.querySelector("#contenedorActividades a");
	//mostramos el submenu
	submenu.addEventListener("click", () => {

		var actividades = document.querySelector(".actividades");

		if(actividades.style.display === "none" || actividades.style.display === ""){
			actividades.style.display = "block";
		}else{
			actividades.style.display = "none";
		}
	});
}

window.addEventListener("load", inicio);
//nos aseguramos que el nav sea visible cuando agrandamos el display e invisible
//cuando lo achicamos.
window.addEventListener("resize", () => {

	var nav = document.querySelector("nav");
	if(window.innerWidth >= 700){
		nav.style.display = "block";
	}else{
		nav.style.display = "none";
	}


});
