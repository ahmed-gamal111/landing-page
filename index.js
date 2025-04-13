document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
