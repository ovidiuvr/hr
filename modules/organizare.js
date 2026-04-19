// Verifică să fie scris exact "renderOrganizare"
export function renderOrganizare() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="card">
            <h3>🏢 Structură Organizare</h3>
            <p>Gestionați departamentele și locațiile firmei.</p>
        </div>
    `;
    console.log("Modulul Organizare a fost încărcat! ✅");
}