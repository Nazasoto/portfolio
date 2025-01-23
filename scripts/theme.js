export function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    const updateTheme = (isDark) => {
        body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '🌙' : '☀️';
    };

    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        updateTheme(!isDark);
    });

    // Carga inicial
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(savedTheme === 'dark');
}