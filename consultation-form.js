const consultationBtn = document.querySelector(".consultation-btn");
consultationBtn.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();
  
  const nameField = document.querySelector(".name");
  const emailField = document.querySelector(".mail");
  const messageField = document.querySelector("#input-message");
  
  if (nameField.value === "") {
    showErrorMessage(nameField, "Name is required");
    return;
  }
  
  if (emailField.value === "") {
    showErrorMessage(emailField, "Email is required");
    return;
  }
  
  // All fields are filled, proceed to the thank you page
  window.location.href = "typewriter-text.html";
}

function showErrorMessage(field, message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  
  // Add custom styles to the error message
  errorMessage.style.color = "darkblue";
  errorMessage.style.fontWeight = "bold";
  errorMessage.style.fontSize = '0.9rem';
  errorMessage.style.fontFamily = 'Century Gothic'
  
  // Customize the appearance of the error message container
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container");
  
  // Append the error message to the container
  errorContainer.appendChild(errorMessage);
  
  // Append the error container after the field
  field.classList.add("error");
  field.parentNode.appendChild(errorContainer);
  
  field.addEventListener("input", clearErrorMessage);
}


function clearErrorMessage() {
  const field = this;
  const errorMessage = field.parentNode.querySelector(".error-message");
  
  field.classList.remove("error");
  
  if (errorMessage) {
    errorMessage.remove();
  }
}

const signInNowBtn = document.querySelector("body > div > div > div.signup > a");

signInNowBtn.addEventListener('click', () => {
  window.location.href = 'sign-up.html'
});

