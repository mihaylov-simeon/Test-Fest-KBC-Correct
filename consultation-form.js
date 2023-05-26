const consultationBtn = document.querySelector(".consultation-btn");

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
  
  // Find the parent container of the field div
  const fieldContainer = field.closest(".field");
  
  // Append the error container to the field container
  fieldContainer.appendChild(errorContainer);
  
  field.classList.add("error");
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

