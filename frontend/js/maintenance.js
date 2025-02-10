document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("maintenancePopup");
  const dismissBtn = document.getElementById("dismissBtn");
  const body = document.body;
  const animatedAuthors = document.querySelectorAll(".author-animation"); // Select animated elements

  // Function to pause animations
  function pauseAnimations() {
      animatedAuthors.forEach(author => {
          author.style.animationPlayState = "paused";
      });
  }

  // Function to resume animations
  function resumeAnimations() {
      animatedAuthors.forEach(author => {
          author.style.animationPlayState = "running";
      });
  }

  // Show popup and disable animations
  body.classList.add("no-scroll");
  pauseAnimations();

  dismissBtn.addEventListener("click", function () {
      popup.classList.add("hidden"); // Smooth fade-out
      body.classList.remove("no-scroll");
      resumeAnimations();
  });
});
