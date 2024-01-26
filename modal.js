// ajoute ou suppr la classe "responsive" pour le menu de navigation
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/** ------------------------ DOM ELEMENTS ------------------------ **/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const formContainer = document.getElementById("formContainer");
const formData = document.querySelectorAll(".formData");
const formConfirmationModal = document.getElementById("formConfirmationModal");
const formErrorMsg = document.getElementById("formNotValid");

const closeModalBtn = document.getElementById("closeModalBtn");
const closeConfirmationModalBtn = document.getElementById(
  "closeConfirmationModalBtn"
);
const submitBtn = document.getElementById("submitBtn");

/** ------------------------ FORM VALIDATION ------------------------ **/
let formIsValid = false;
submitBtn.disabled = true;

if (formIsValid) {
  submitBtn.disabled = false;

  // ajouter confirmation quand le submit est réussi
  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    modalbg.style.display = "none";
    formConfirmationModal.style.display = "block";
  });
} else {
  formErrorMsg.textContent = "Le formulaire d'inscription n'est pas valide";
}
// TODO: add error msg if form is not valid
// TODO: add form validation for each input
// TODO: save form data if validation fails

/** ------------------------ HANDLING MODALS ------------------------ **/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ferme la modale
closeModalBtn.addEventListener("click", () => (modalbg.style.display = "none"));

// fermer modale de confirmation
closeConfirmationModalBtn.addEventListener(
  "click",
  () => (formConfirmationModal.style.display = "none")
);
