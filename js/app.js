// 1. Importăm funcțiile din modulele noastre
import { renderDashboard } from '../modules/dashboard.js';
import { renderOrganizare } from '../modules/organizare.js';
import { renderPersonal } from '../modules/personal.js';

// 2. Definim funcția nav și o facem globală (window.nav)
// Astfel, butoanele din index.html o pot găsi
window.nav = function(pagina) {
    console.log("Navigăm către: " + pagina);

    // Verificăm ce pagină a fost cerută și apelăm funcția corespunzătoare
    if (pagina === 'dashboard') {
        renderDashboard();
    } else if (pagina === 'organizare') {
        renderOrganizare();
    } else if (pagina === 'personal') {
        renderPersonal();
    }
};

// 3. Afișăm Dashboard-ul automat când se deschide aplicația
console.log("Aplicația HR PRO a pornit! 🚀");
renderDashboard();