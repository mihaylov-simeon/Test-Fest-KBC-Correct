const returnToMainWebsite = document.querySelector("#header > nav > ul > li > a");

returnToMainWebsite.addEventListener('click', returnToMainWebsiteHandler);

function returnToMainWebsiteHandler() {
    window.location.href = "index.html";
}

