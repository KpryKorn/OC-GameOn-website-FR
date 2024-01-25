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

const formContainer = document.getElementById("formContainer");
const formData = document.querySelectorAll(".formData");
const formConfirmationModal = document.getElementById("formConfirmationModal");

const closeModalBtn = document.getElementById("closeModalBtn");
const closeConfirmationModalBtn = document.getElementById(
  "closeConfirmationModalBtn"
);
const submitBtn = document.getElementById("submitBtn");
// TODO: add form elements

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ferme la modale
closeModalBtn.addEventListener("click", () => (modalbg.style.display = "none"));

// ajouter confirmation quand le submit est réussi
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  modalbg.style.display = "none";
  formConfirmationModal.style.display = "block";
});

// fermer modale de confirmation
closeConfirmationModalBtn.addEventListener(
  "click",
  () => (formConfirmationModal.style.display = "none")
);

// TODO: disable submit button if form is not valid

// TODO: add error msg if form is not valid
// TODO: add form validation for each input
// TODO: save form data if validation fails
