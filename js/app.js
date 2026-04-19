// Schimbăm de la '../tool.js' la '/tool.js' (cu slash în față)
import { router } from '/tool.js';
import { renderDashboard } from '/modules/dashboard.js';

window.nav = function(pagina) {
    router(pagina);
};
