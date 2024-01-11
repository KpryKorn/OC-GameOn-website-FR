// ajoute ou suppr la classe "responsive" pour le menu de navigation
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ferme la modale
closeBtn.addEventListener("click", () => (modalbg.style.display = "none"));

// TODO: disable submit button if form is not valid

// TODO: add error msg if form is not valid
// TODO: add form validation for each input
// TODO: save form data if validation fails
