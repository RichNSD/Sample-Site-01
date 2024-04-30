// theme-toggle.js

function toggleDarkMode() {
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('#dark-mode-toggle');

    toggleButton.addEventListener('click', function () {
      // Selects the elements that need to have their classes changed for dark mode
      const elementsToToggle = document.querySelectorAll('.navbar, .nav-link, body, .bg-light');

      // Determine if dark mode is currently enabled
      const isDarkMode = document.body.classList.contains('bg-dark');

      elementsToToggle.forEach(element => {
        if (isDarkMode) {
          // If dark mode is on, switch to light mode
          element.classList.replace('bg-dark', 'bg-light');
          toggleButton.textContent = 'Dark Mode'; // Update button text
        } else {
          // If light mode is on, switch to dark mode
          element.classList.replace('bg-light', 'bg-dark');
          toggleButton.textContent = 'Light Mode'; // Update button text
        }
      });
    });
  });
}

export default toggleDarkMode;
