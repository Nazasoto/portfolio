// Importar módulos
import { initNavbar } from './navbar.js';
import { initExperience } from './sections/experience.js'
import { initAbout } from './sections/about.js'
 
// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initAbout();
    initExperience();
});