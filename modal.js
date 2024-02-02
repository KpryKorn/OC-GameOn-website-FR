/** ------------------------ DOM ELEMENTS ------------------------ **/
const burgerMenuBtn = document.getElementById("burgerMenuBtn");

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const formContainer = document.getElementById("formContainer");
const formConfirmationModal = document.getElementById("formConfirmationModal");
const formErrorMsg = document.getElementById("formNotValid");

const closeModalBtn = document.getElementById("closeModalBtn");
const closeConfirmationModalBtn = document.getElementById(
  "closeConfirmationModalBtn"
);
const submitBtn = document.getElementById("submitBtn");

/** ------------------------ FORM DATA VALUES ------------------------ **/
const formInputs = {
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  email: document.getElementById("email"),
  quantity: document.getElementById("quantity"),
  location: document.querySelector('input[name="location"]'),
};

/** ------------------------ FORM VALIDATION ------------------------ **/
let formIsValid = false;

function validateForm() {
  // check tous les inputs de l'objet et return true si tous les inputs sont pas vides
  formIsValid = Object.values(formInputs).every((element) => {
    if (element.value !== "") return true;
  });

  if (formIsValid) {
    formErrorMsg.textContent = "";
    submitBtn.disabled = false;
    formContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      modalbg.style.display = "none";
      formConfirmationModal.style.display = "block";
    });
  } else {
    submitBtn.disabled = true;
    formErrorMsg.textContent = "Le formulaire d'inscription n'est pas valide";
  }

  console.log(formIsValid);
}

// check si le formulaire est valide à chaque onChange
Object.values(formInputs).forEach((input) => {
  input.addEventListener("change", validateForm);
});

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

// ajoute ou suppr la classe "responsive" pour le menu de navigation
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
burgerMenuBtn.addEventListener("click", editNav);
