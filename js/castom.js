"use strict";

// Main Div Coll
let mainDiv = document.querySelector(".Animated-Menu");

// Hader text Coll
let haderText = document.querySelector("#text-hader");

// Hader icon Coll
let hadericonClose = document.querySelector("#close");
let hadericonManu = document.querySelector("#manu");

hadericonManu.addEventListener("click", function() {

	mainDiv.style.height = "380px";
	haderText.innerHTML = "Close";
	hadericonManu.style.display = "none";
	hadericonClose.style.display = "block";

});

hadericonClose.addEventListener("click", function() {

	mainDiv.style.height = "55px";
	haderText.innerHTML = "Manu";
	hadericonClose.style.display = "none";
	hadericonManu.style.display = "block";

});