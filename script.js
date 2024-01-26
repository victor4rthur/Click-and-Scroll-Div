// Select the DOM element with the class 'items' and assign it to the variable 'slider'
const slider = document.querySelector('.items');

// Initialize variables to track the state and position of the slider
let isDown = false;  // Indicates whether the mouse button is currently pressed
let startX;          // Stores the initial X-coordinate when the mouse button is pressed
let scrollLeft;      // Stores the initial scroll position of the slider when the mouse button is pressed

// Event listener for the 'mousedown' event on the slider
slider.addEventListener('mousedown', function(e) {
    // Set 'isDown' to true, indicating that the mouse button is pressed
    isDown = true;

    // Add the 'active' class to the slider to visually indicate its active state
    slider.classList.add('active');

    // Calculate the initial X-coordinate relative to the slider and store it in 'startX'
    startX = e.pageX - slider.offsetLeft;

    // Store the initial scroll position of the slider
    scrollLeft = slider.scrollLeft;
});

// Event listener for the 'mouseleave' event on the slider
slider.addEventListener('mouseleave', function() {
    // Set 'isDown' to false, indicating that the mouse button is no longer pressed
    isDown = false;

    // Remove the 'active' class to visually indicate the slider is no longer active
    slider.classList.remove('active');
});

// Event listener for the 'mouseup' event on the slider
slider.addEventListener('mouseup', function() {
    // Set 'isDown' to false when the mouse button is released
    isDown = false;

    // Remove the 'active' class to visually indicate the slider is no longer active
    slider.classList.remove('active');
});

// Event listener for the 'mousemove' event on the slider
slider.addEventListener('mousemove', function(e) {
    // If the mouse button is not pressed, exit the function
    if (!isDown) {
        return;
    }

    // Prevent the default behavior of the mousemove event (e.g., text selection)
    e.preventDefault();

    // Calculate the new X-coordinate relative to the slider
    const x = e.pageX - slider.offsetLeft;

    // Calculate the distance to move the slider based on the difference between the current and initial X-coordinates
    const walk = (x - startX) * 5;

    // Update the scroll position of the slider based on the calculated distance
    slider.scrollLeft = scrollLeft - walk;
});