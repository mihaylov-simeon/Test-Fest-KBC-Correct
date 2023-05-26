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

// Apply the theme preference when opening each page
document.addEventListener("DOMContentLoaded", () => {
  const themePreference = getThemePreference();
  if (themePreference === "light") {
    switcher.checked = true;
    stylesheet.setAttribute("href", "light-theme-style.css");
  }
});