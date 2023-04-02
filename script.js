// Get the image element
var image = document.getElementById("img");

// Set the initial position
var currentPosition = 0;
image.style.top = currentPosition + "10px";

// Set the amount of pixels to move the image by
var moveAmount = 100;

// Set the interval for moving the image
var moveInterval = setInterval(moveImage, 100);

function moveImage() {
  // Check if the image has reached the bottom of the screen
  if (currentPosition >= (window.innerHeight - image.height)) {
    // Reverse the direction of the movement
    moveAmount = -moveAmount;
  }
  // Check if the image has reached the top of the screen
  else if (currentPosition <= 0) {
    // Reverse the direction of the movement
    moveAmount = -moveAmount;
  }
  // Move the image
  currentPosition += moveAmount;
  image.style.top = currentPosition + "10px";
}
