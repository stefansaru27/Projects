let confirmationMessage = document.querySelector(".confirmationMessage");
let firstNameInput = document.querySelector("#firstName");
let lastNameInput = document.querySelector("#lastName");
let genderInputs = document.querySelector("#gender");
let textMessageInput = document.querySelector("#textMessage");
let formSubmit = document.querySelector("#myForm");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  // Prevents the default form submission

  var firstNameValue = firstNameInput.value.trim();
  var lastNameValue = lastNameInput.value.trim();
  var textMessageValue = textMessageInput.value.trim();

  if (firstNameValue === "") {
    firstNameInput.classList.add("error"); // Add the error class
  } else if (lastNameValue === "") {
    lastNameInput.classList.add("error");
  } else if (textMessageValue === "") {
    textMessageInput.classList.add("error");
  } else {
    firstNameInput.classList.remove("error"); // Remove the error class if present
    lastNameInput.classList.remove("error");
    textMessageInput.classList.remove("error");
  }

  confirmationMessage.style.display = "block";
  //setting the display from none to block
  let userName = firstNameInput.value;
  //getting the value of the user from the First Name input box
  confirmationMessage.innerHTML = "Thanks for your message, " + userName + "!";

  formSubmit.reset();
  //reset the form
});

console.log(userName);
