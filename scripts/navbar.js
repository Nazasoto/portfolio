export function initNavbar() {
    // Elementos principales
    const navbarLinks = document.querySelectorAll('.navbar__link');
    const sections = document.querySelectorAll('.section');
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');

    // Calcular altura del navbar para el offset
    const navbarHeight = navbar.offsetHeight;
    const scrollOffset = navbarHeight + 20;

    // Scroll suave con compensación
    const smoothScroll = (target) => {
        const targetSection = document.querySelector(target);
        if (targetSection) {
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - scrollOffset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Observer para detección de sección activa
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const activeId = `#${entry.target.id}`;
            // Calcular qué tan centrada está la sección
            const visibleRatio = entry.intersectionRatio;
            const distanceFromTop = entry.boundingClientRect.top;
        
            // Priorizar la sección más centrada
            if (visibleRatio > 0.5 || (distanceFromTop > 0 && distanceFromTop < window.innerHeight * 0.3)) {
                navbarLinks.forEach(link => {
                    link.parentElement.classList.toggle('active', link.getAttribute('href') === activeId);
                });
            }
        });
    }, {
    root: null,
    rootMargin: `-${navbarHeight}px 0px 0px 0px`,
    threshold: [0.1, 0.5, 0.9] // Múltiples thresholds
});

    // Manejo de clics en enlaces
    const handleLinkClick = (e, link) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        
        // Cerrar menú en móviles
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        }
        
        smoothScroll(target);
    };

    // Inicialización
    const init = () => {
        // Event listeners
        navbarLinks.forEach(link => {
            link.addEventListener('click', (e) => handleLinkClick(e, link));
        });

        // Observar secciones
        sections.forEach(section => observer.observe(section));

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !navbar.contains(e.target) && 
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });

        // Reset en resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    };

    init();
}

// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}