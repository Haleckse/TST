const questionContainer = document.querySelector(".clickEvent");

const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const response = document.querySelector("#response");
const mouseMouv = document.querySelector(".mouseMouv");

questionContainer.addEventListener("click", () => {
  // pour injecter une classe add ou toggle
  questionContainer.classList.toggle("questionBoxClick");
});

but1.addEventListener("click", () => {
  //afficher la reponse quand on click sur une proposition
  response.classList.add("showResponse");
  response.style.background = "green";
});

but2.addEventListener("click", () => {
  //afficher la reponse quand on click sur une proposition
  response.classList.add("showResponse");
  response.style.background = "red";
});

// window.addEventListener("mousemove", (e) => {
//   mouseMouv.style.left = e.pageX + "px";
//   mouseMouv.style.top = e.pageY + "px";
// });

window.addEventListener("mousedown", () => {
  mouseMouv.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMouv.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,1)";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)"; 
}); 

//keypress events

const keypressContainer = document.querySelector("keypress"); 
const key = document.getElementById("key"); 

document.addEventListener("keypress", (e) => {
    key.textContent = e.key
})
