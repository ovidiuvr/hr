export function renderPersonal() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div class="card">
            <h3>👥 Gestionare Personal</h3>
            <p>Lista angajaților și operațiuni specifice.</p>
        </div>
    `;
    console.log("Modulul Personal a fost încărcat! ✅");
}