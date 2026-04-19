export function renderDashboard() {
    const container = document.getElementById('main-content');

    if (container) {
        // Folosim backticks (``) pentru a scrie HTML pe mai multe rânduri
        container.innerHTML = `
            <section class="dashboard">
                <h1>📊 Panou de Control HR PRO</h1>
                <div class="grid-container">
                    <div class="card blue">
                        <h3>👥 Angajați</h3>
                        <p>Gestionează echipa</p>
                    </div>
                    <div class="card blue">
                        <h3>📅 Concedii</h3>
                        <p>Cereri și planificări</p>
                    </div>
                    </div>
            </section>
        `;
        console.log("Dashboard randat cu succes! ✅");
    }
}