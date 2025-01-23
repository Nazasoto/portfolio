export function initNavbar() {
    const navbarLinks = document.querySelectorAll('.navbar__link');
    const sections = document.querySelectorAll('.section');

    // Smooth Scroll
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveLink(link);
        });
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = `#${entry.target.id}`;
                navbarLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                    if (link.getAttribute('href') === activeId) {
                        link.parentElement.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // Helper function
    function setActiveLink(clickedLink) {
        navbarLinks.forEach(link => link.parentElement.classList.remove('active'));
        clickedLink.parentElement.classList.add('active');
    }
}
// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !navbar.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// Cerrar menú al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    }
});