function desplegarMenu()
{
	var hamburguesa = document.getElementById("linkHamburguesa");
	var nav = document.querySelector("nav");
	nav.style.display = "inline-block";
}

function inicio()
{
	var hamburguesa = document.getElementById("linkHaburguesa");
	hamburguesa.addEventListener("click", desplegarMenu);
}

window.addEventListener("load", inicio);
