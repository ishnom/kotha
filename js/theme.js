// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const themeContainer = document.querySelector(".theme-container")
  const themeIcon = themeToggle.querySelector("i")

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeContainer.classList.add("dark")
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    themeContainer.classList.toggle("dark")

    // Update icon
    if (themeContainer.classList.contains("dark")) {
      themeIcon.classList.remove("fa-moon")
      themeIcon.classList.add("fa-sun")
      localStorage.setItem("theme", "dark")
    } else {
      themeIcon.classList.remove("fa-sun")
      themeIcon.classList.add("fa-moon")
      localStorage.setItem("theme", "light")
    }
  })
})

