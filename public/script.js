// Get all elements with the id "counter-number"
const counters = document.querySelectorAll('#counter-number');

// Function to animate the counter
function animateCounter() {
  counters.forEach((counter) => {
    // Get the data-val attribute value
    const targetValue = parseInt(counter.getAttribute('data-val'));
    // Initialize the current value to 0
    let currentValue = 0;

    // Create an interval to increment the current value
    const interval = setInterval(() => {
      // Increment the current value by 1
      currentValue++;
      // Update the counter text
      counter.innerText = currentValue.toString().padStart(3, '0');

      // If the current value reaches the target value, clear the interval
      if (currentValue === targetValue) {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval time to control the animation speed
  });
}

// Call the animateCounter function when the page loads
animateCounter();