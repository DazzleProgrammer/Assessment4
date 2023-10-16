const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});



