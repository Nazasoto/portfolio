export function initAbout() {
    // Animación escalonada al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || '0';
                entry.target.style.animation = `fadeInUp 0.6s ${delay}s forwards`;
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
}

// Botón de CV
document.querySelector('.download-button').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Crear enlace temporal
    const link = document.createElement('a');
    link.href = './assets/cv.pdf';
    link.download = 'CV_Nazareno_Soto.pdf';
    
    // Simular clic
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


function showCVPreview() {
    const preview = document.querySelector('.cv-preview');
    if (preview) {
        preview.style.opacity = '1';
        preview.style.visibility = 'visible';
    }
}

function hideCVPreview() {
    const preview = document.querySelector('.cv-preview');
    if (preview) {
        preview.style.opacity = '0';
        preview.style.visibility = 'hidden';
    }
}

// Versión alternativa con eventos directamente en JavaScript
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('mouseenter', showCVPreview);
    button.addEventListener('mouseleave', hideCVPreview);
    
    // Para dispositivos táctiles
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        showCVPreview();
    });
});

// Añadir keyframes dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
