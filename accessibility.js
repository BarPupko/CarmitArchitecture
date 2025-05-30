// Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");

  console.log("Toggle button found:", toggleButton); // ✅ SHOULD LOG!

  if (!toggleButton) {
    console.error("Toggle button not found in DOM!");
    return;
  }

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  toggleButton.innerHTML =
    currentTheme === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';

  toggleButton.addEventListener("click", () => {
    console.log("Theme toggle clicked!"); // ✅ SHOULD LOG ON CLICK

    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggleButton.innerHTML =
      newTheme === "dark"
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("project-selector");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
