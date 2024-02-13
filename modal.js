/** ------------------------ DOM ELEMENTS ------------------------ **/
const burgerMenuBtn = document.getElementById("burgerMenuBtn");

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const formContainer = document.getElementById("formContainer");
const formConfirmationModal = document.getElementById("formConfirmationModal");

const closeModalBtn = document.getElementById("closeModalBtn");
const closeConfirmationModalBtn = document.getElementById(
  "closeConfirmationModalBtn"
);
const submitBtn = document.getElementById("submitBtn");

const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");
const birthdateErrorMsg = document.getElementById("birthdateErrorMsg");
const quantityErrorMsg = document.getElementById("quantityErrorMsg");
const locationErrorMsg = document.getElementById("locationErrorMsg");
const termsErrorMsg = document.getElementById("termsErrorMsg");

/** ------------------------ FORM DATA VALUES ------------------------ **/
const formInputs = {
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  email: document.getElementById("email"),
  birthdate: document.getElementById("birthdate"),
  quantity: document.getElementById("quantity"),
  terms: document.getElementById("checkbox1"),
};
console.log(formInputs.birthdate.value);

const locationInputs = document.querySelectorAll("input[name='location']");

/** ------------------------ FORM REGEXP ------------------------ **/
const nameRegExp = new RegExp(`^(?=.{2,25}$)[a-zA-Z]+(?:[-\s][a-z]+)*$`);
const emailRegExp = new RegExp(
  `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$`
);

/** ------------------------ FORM ERROR MSG ------------------------ **/
const errorMsg = {
  firstName: "Le champ du prénom n'est pas valide ou incomplet",
  lastName: "Le champ du nom n'est pas valide ou incomplet",
  email: "Le champ de l'email n'est pas valide ou incomplet",
  birthdate: "La date de naissance n'est pas valide ou incomplète",
  quantity: "Le nombre de tournois indiqué n'est pas valide",
  location: "Veuillez sélectionner une ville",
  terms: "Vous devez accepter les conditions d'utilisation",
};

// validate first name
function validateFirstNameInput() {
  if (!nameRegExp.test(formInputs.firstName.value))
    return (firstNameErrorMsg.textContent = errorMsg.firstName);
  else {
    return (firstNameErrorMsg.textContent = "");
  }
}
formInputs.firstName.addEventListener("change", validateFirstNameInput);

// validate last name
function validateLastNameInput() {
  if (!nameRegExp.test(formInputs.lastName.value))
    return (lastNameErrorMsg.textContent = errorMsg.lastName);
  else {
    return (lastNameErrorMsg.textContent = "");
  }
}
formInputs.lastName.addEventListener("change", validateLastNameInput);

// validate email
function validateEmailInput() {
  if (!emailRegExp.test(formInputs.email.value))
    return (emailErrorMsg.textContent = errorMsg.email);
  else {
    return (emailErrorMsg.textContent = "");
  }
}
formInputs.email.addEventListener("change", validateEmailInput);

// validate birthdate
function validateBirthdateInput() {
  const birthdate = formInputs.birthdate.value;

  if (birthdate === "") {
    return (birthdateErrorMsg.textContent = errorMsg.birthdate);
  } else {
    return (birthdateErrorMsg.textContent = "");
  }
}
formInputs.birthdate.addEventListener("change", validateBirthdateInput);

// validate quantity
function validateQuantityInput() {
  if (formInputs.quantity.value === "" || formInputs.quantity.value < 0)
    return (quantityErrorMsg.textContent = errorMsg.quantity);
  else {
    return (quantityErrorMsg.textContent = "");
  }
}
formInputs.quantity.addEventListener("input", validateQuantityInput);

// validate location
function validateLocationInput() {
  if (!Array.from(locationInputs).some((input) => input.checked))
    return (locationErrorMsg.textContent = errorMsg.location);
  else {
    return (locationErrorMsg.textContent = "");
  }
}
locationInputs.forEach((input) =>
  input.addEventListener("change", validateLocationInput)
);

// validate terms
function validateTermsInput() {
  if (!formInputs.terms.checked)
    return (termsErrorMsg.textContent = errorMsg.terms);
  else {
    return (termsErrorMsg.textContent = "");
  }
}
formInputs.terms.addEventListener("change", validateTermsInput);

/** ------------------------ FORM VALIDATION ------------------------ **/
let formIsValid = false;

function validateForm() {
  validateFirstNameInput();
  validateLastNameInput();
  validateEmailInput();
  validateBirthdateInput();
  validateQuantityInput();
  validateLocationInput();
  validateTermsInput();

  formIsValid =
    Object.values(formInputs).every((input) => input.value !== "") &&
    Array.from(locationInputs).some((input) => input.checked) &&
    formInputs.terms.checked &&
    formInputs.birthdate.value !== "";
}

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();

  // reset form
  if (formIsValid) {
    modalbg.style.display = "none";
    formConfirmationModal.style.display = "block";
    formContainer.reset();
  }
});

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
  const headerLogo = document.querySelector(".header-logo");
  if (x.className === "topnav") {
    x.className += " responsive";
    headerLogo.style.display = "none";
  } else {
    x.className = "topnav";
    headerLogo.style.display = "block";
  }
}
burgerMenuBtn.addEventListener("click", editNav);
