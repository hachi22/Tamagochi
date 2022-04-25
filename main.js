var atrasJugar = document.getElementById("playAtras");
var jugar = document.getElementById("jugar");
var atrasTrabajar = document.getElementById("trabajarAtras");
var trabajar = document.getElementById("trabajo");
var atrasPasear = document.getElementById("pasearAtras");
var pasear = document.getElementById("pasear");
var atrasDormir = document.getElementById("dormirAtras");
var dormir = document.getElementById("dormir");

let currentTimeDate = new Date();
let hours = currentTimeDate.getHours();
let minutes = currentTimeDate.getMinutes();
var currentTime = `${hours}:${minutes}`;

document.getElementById("timeId").innerHTML = currentTime;


atrasJugar.onclick = () => {
	document.getElementById("divPlay").style.display = "none";
	document.getElementById("mainScreenContainer").style.display = "block";
}

jugar.onclick = () => {
	document.getElementById("divPlay").style.display = "block";
	document.getElementById("mainScreenContainer").style.display = "none";
}

atrasTrabajar.onclick = () => {
	document.getElementById("divTrabajar").style.display = "none";
	document.getElementById("mainScreenContainer").style.display = "block";
}

trabajar.onclick = () => {
	document.getElementById("divTrabajar").style.display = "block";
	document.getElementById("mainScreenContainer").style.display = "none";
}

atrasPasear.onclick = () => {
	document.getElementById("divPasear").style.display = "none";
	document.getElementById("mainScreenContainer").style.display = "block";
	document.getElementById("htmlId").style.backgroundColor = "#6ecccc";
}

pasear.onclick = () => {
	document.getElementById("divPasear").style.display = "block";
	document.getElementById("mainScreenContainer").style.display = "none";
	document.getElementById("htmlId").style.backgroundColor = "black";
}

atrasDormir.onclick = () => {
	document.getElementById("divDormir").style.display = "none";
	document.getElementById("mainScreenContainer").style.display = "block";
	document.getElementById("htmlId").style.backgroundColor = "#6ecccc";
}

dormir.onclick = () => {
	document.getElementById("divDormir").style.display = "block";
	document.getElementById("mainScreenContainer").style.display = "none";
	document.getElementById("htmlId").style.backgroundColor = "black";
}
	
	
	

