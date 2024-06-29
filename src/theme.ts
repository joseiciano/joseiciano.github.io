// TODO: Implement apply themes for night mode
// src/theme.js
function applyTheme() {
  if (localStorage.getItem("theme") === null) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme")!);
  }
}

// Ensure the script runs on page load
document.addEventListener("DOMContentLoaded", applyTheme);

// If you are using client-side routing, ensure the script runs on each navigation
window.addEventListener("astro:page-load", applyTheme);
