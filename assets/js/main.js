const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggleBtn.addEventListener("click", () => {
  const newTheme =
    document.documentElement.getAttribute("data-bs-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-bs-theme", newTheme);
  themeIcon.classList.toggle("bi-moon-fill", newTheme === "dark");
  themeIcon.classList.toggle("bi-sun-fill", newTheme === "light");
});
