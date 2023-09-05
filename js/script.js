const toggle = document.querySelector('.toggle i');

toggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');

    navbar.classList.toggle('active');
})