const returnToMainWebsite = document.querySelector("body > div > div > div.cancel-field > button");

returnToMainWebsite.addEventListener('click', returnToMainWebsiteHandler);

function returnToMainWebsiteHandler() {
    window.location.href = "index.html";
}

