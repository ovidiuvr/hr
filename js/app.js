<<<<<<< HEAD
import { router } from '/tool.js';
import { renderDashboard } from '/modules/dashboard.js';

// 1. Definim navigarea globală
window.nav = function(pagina) {
    router(pagina);
};

// 2. Mesaj de pornire (ca să vedem în consolă că funcționează)
console.log("Aplicația HR PRO a pornit! 🚀");

// 3. Executăm dashboard-ul imediat la încărcare
renderDashboard();
=======
import { renderDashboard } from '/modules/dashboard.js';

console.log("Aplicația HR PRO a pornit! 🚀");

// Afișăm dashboard-ul imediat
renderDashboard();
>>>>>>> 8080f7d (Actualizare cod: eliminare tool.js și reparare căi module)
