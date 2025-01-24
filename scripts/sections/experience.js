export function initExperience() {
    // Animaciones
    const experienceItems = document.querySelectorAll('.experience-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || '0';
                entry.target.style.animation = `fadeInUp 0.6s ${delay} forwards`;
            }
        });
    }, { threshold: 0.3 });

    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}