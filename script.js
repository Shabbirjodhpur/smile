const button = document.getElementById('clickBtn');

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a single SMILE popup
function createPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = '😊 SMILE 😊';

  // Randomize position and size
  const size = getRandomInt(20, 50);
  popup.style.fontSize = `${size}px`;
  popup.style.left = `${getRandomInt(0, window.innerWidth - size)}px`;
  popup.style.top = `${getRandomInt(0, window.innerHeight - size)}px`;
  popup.style.animationDuration = `${getRandomInt(1, 2)}s`;

  // Add the popup to the body
  document.body.appendChild(popup);

  // Remove popup after animation ends
  popup.addEventListener('animationend', () => {
    popup.remove();
  });
}

// Event listener to create 10 popups on button click
button.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    createPopup();
  }
});
