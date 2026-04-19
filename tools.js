import { renderDashboard } from '../modules/dashboard.js';
import { renderPersonal } from '../modules/personal.js';
import { renderStructura } from '../modules/structuraorganizatorica.js';

const rute = {
    'dashboard': renderDashboard,
    'personal': renderPersonal,
    'structura': renderStructura
};

export function router(pagina) {
    const view = document.getElementById('app-view');
    if (rute[pagina]) {
        view.innerHTML = rute[pagina]();
        // Log util pentru consola browserului (F12) online
        console.log(`%c🚀 Online Tool: Modulul [${pagina}] a fost randat cu succes.`, "color: #10b981; font-weight: bold;");
    } else {
        console.error(`❌ Online Tool: Eroare la încărcarea paginii [${pagina}].`);
    }
}

// Pornire automată
document.addEventListener('DOMContentLoaded', () => {
    router('structura');
});