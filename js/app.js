import { initSidebar } from "../modules/sidebar.js";

document.addEventListener("DOMContentLoaded", () => {
    // Pornim meniul
    initSidebar();
    // Afișăm prima pagină
    window.schimbaContinut('dashboard');
});

window.schimbaContinut = function(pagina) {
    const view = document.getElementById("app-view");
    const title = document.getElementById("page-title");
    
    const pagini = {
        dashboard: "<h2>Panou Principal</h2><p>Sistemul HR este acum sincronizat corect.</p>",
        personal: "<h2>Angajați</h2><p>Se preiau datele din Cloud...</p>",
        organigrama: "<h2>Structură</h2><p>Organigrama firmei este activă.</p>"
    };

    if (pagini[pagina]) {
        view.innerHTML = pagini[pagina];
        title.innerText = pagina.toUpperCase();
    }
};