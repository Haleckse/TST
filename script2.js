var i = 0;
var txt = document.getElementById("planet").textContent; 
var speed = 80; /* La vitesse/durée de l'effet en millisecondes */

// Vider l'élément avant de commencer l'effet d'écriture
document.getElementById("planet").textContent = '';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("planet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(); // Appel de la fonction pour démarrer l'effet
