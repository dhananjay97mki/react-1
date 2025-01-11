const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  // Toggle the dark-mode class on the body element
  body.classList.toggle('dark-mode');

  // Update button text based on the current mode
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Enable Light Mode';
  } else {
    toggleButton.textContent = 'Enable Dark Mode';
  }
});
