// Get all the accordion buttons
const accordionButtons = document.querySelectorAll(".accordion-btn");

// Add click event listeners to each button
accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const accordion = button.parentElement;
        // Toggle the "active" class to expand or collapse the panel
        accordion.classList.toggle("active");
    });
});