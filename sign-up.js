const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const cancelBtn = document.querySelector("#cancelBtnSignIn");

signInBtn.addEventListener("click", () => {
	window.location.href = 'login-form.html'
});

cancelBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
