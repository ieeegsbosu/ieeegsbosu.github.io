document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const root = document.body;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  toggle.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "light" ? "🌙" : "☀️";
  });
});
