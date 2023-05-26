// Define an array of tattoo image names
const tattoos = ['tattoo1.jpg', 'tattoo2.jpg', 'tattoo3.jpg'];

// Get references to the woman image and the next button
const womanImage = document.getElementById('woman');
const nextButton = document.getElementById('nextButton');

// Set an initial index for the current tattoo
let currentTattooIndex = 0;

// Function to update the woman image with the next tattoo
function updateTattoo() {
  const nextTattooIndex = (currentTattooIndex + 1) % tattoos.length;
  const nextTattoo = tattoos[nextTattooIndex];
  womanImage.src = 'images/' + nextTattoo;
  currentTattooIndex = nextTattooIndex;
}

// Add a click event listener to the next button
nextButton.addEventListener('click', updateTattoo);
