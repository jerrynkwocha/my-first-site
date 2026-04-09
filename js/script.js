function showMessage() {
  alert("You just ran JavaScript!");
}

// Wait for page to fully load
window.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  // Run once on load
  checkScroll();

  // Run on scroll
  window.addEventListener("scroll", checkScroll);

});