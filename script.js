// login form linked buttons
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("body > header > button");

  const geStartedTrialBtn = document.querySelector(
    "#features > div.trial > button"
  );
  const priceCardBtnOne = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(1) > button"
  );
  const priceCardBtnTwo = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(2) > button"
  );
  const priceCardBtnThree = document.querySelector(
    "#pricing > div.price-card-wrapper > div:nth-child(3) > button"
  );
  const getStarterTrialTwoBtn = document.querySelector(
    "#pricing > div.trial-pricing > button"
  );

  loginBtn.addEventListener("click", loginBtnHandler);
  geStartedTrialBtn.addEventListener("click", getStartedTrialBtnHandler);
  priceCardBtnOne.addEventListener("click", priceCardOneHandler);
  priceCardBtnTwo.addEventListener("click", priceCardTwoHandler);
  priceCardBtnThree.addEventListener("click", priceCardThreeHandler);
  getStarterTrialTwoBtn.addEventListener("click", getStartedTrialTwoHandler);

  function loginBtnHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardOneHandler() {
    window.location.href = "login-form.html";
  }

  function getStartedTrialBtnHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardTwoHandler() {
    window.location.href = "login-form.html";
  }

  function priceCardThreeHandler() {
    window.location.href = "login-form.html";
  }

  function getStartedTrialTwoHandler() {
    window.location.href = "login-form.html";
  }
});

// book consultation linked buttons
document.addEventListener("DOMContentLoaded", () => {
  const bookConsultationBtn = document.querySelector(
    "#welcome-heading > div > a > button"
  );

  bookConsultationBtn.addEventListener("click", bookingBtnHandler);

  function bookingBtnHandler() {
    window.location.href = "consultation-form.html";
  }
});

// Theme switcher function
const switcher = document.getElementById("switcher");
const stylesheet = document.getElementById("main-stylesheet");

switcher.addEventListener("change", () => {
  const theme = switcher.checked ? "light" : "dark";
  stylesheet.setAttribute(
    "href",
    theme === "light" ? "light-theme-style.css" : "style.css"
  );
  localStorage.setItem("theme", theme); // Store the theme preference in local storage
});

// Function to retrieve the theme preference from local storage
function getThemePreference() {
  return localStorage.getItem("theme") || "dark"; // Default to dark theme if no preference is found
}

// Set the initial theme based on the stored preference
const initialTheme = getThemePreference();
if (initialTheme === "light") {
  switcher.checked = true;
  stylesheet.setAttribute("href", "light-theme-style.css");
}

// call functions on scroll
window.onscroll = function () {
  scrollFunction();
  scrollBarTracker();
};

// When the user scrolls down 1500px from the top of the document, show the button
function scrollFunction() {
  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// scroll bar tracker function
function scrollBarTracker() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Linking cards to their own pages

const webAppsCard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(1)"
);
const webDevelopmentCard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(2)"
);
const backEndDevelopmentCard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(3)"
);
const uxUICard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(4)"
);
const APIDevelopmentCard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(5)"
);
const personalMaintenanceCard = document.querySelector(
  "#features > div.card-wrapper > div:nth-child(6)"
);

webAppsCard.addEventListener("click", webAppsHandler);
webDevelopmentCard.addEventListener("click", webDevelopmentHandler);
backEndDevelopmentCard.addEventListener("click", backEndDevelopmentHandler);
uxUICard.addEventListener("click", uxUIHandler);
APIDevelopmentCard.addEventListener("click", APIDevelopmentHandler);
personalMaintenanceCard.addEventListener("click", personalMaintenanceHandler);

function webAppsHandler() {
  openPageWithThemePreference("web-apps.html");
}

function webDevelopmentHandler() {
  openPageWithThemePreference("web-consultation.html");
}

function backEndDevelopmentHandler() {
  openPageWithThemePreference("back-end-development.html");
}

function uxUIHandler() {
  openPageWithThemePreference("ui-ux-process.html");
}

function APIDevelopmentHandler() {
  openPageWithThemePreference("api-development.html");
}

function personalMaintenanceHandler() {
  openPageWithThemePreference("personal-maintenance.html");
}

function openPageWithThemePreference(page) {
  const themePreference = getThemePreference();
  window.location.href = `${page}?theme=${themePreference}`;
}

// Apply the theme preference when opening each page
document.addEventListener("DOMContentLoaded", () => {
  const themePreference = getThemePreference();
  if (themePreference === "light") {
    switcher.checked = true;
    stylesheet.setAttribute("href", "light-theme-style.css");
  }
});

const navLinks = document.querySelectorAll(".nav-list a");

for (const link of navLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
}
