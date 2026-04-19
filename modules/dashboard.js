export function renderDashboard() {

    // 🔹 DATE DEMO (modificăm ulterior din Mongo)
    const totalPosturi = 120;
    const ocupate = 85;
    const vacante = totalPosturi - ocupate;

    const grad = ((ocupate / totalPosturi) * 100).toFixed(1);

    const totalPersonal = 90;

    const alerte = [
        { label: "Împuterniciri", valoare: 2 },
        { label: "Detașări", valoare: 1 },
        { label: "Concedii fără plată", valoare: 3 },
        { label: "CCC", valoare: 2 },
        { label: "Stimulente inserție", valoare: 1 }
    ];

    return `
        <h1>Dashboard</h1>

        <div class="grid">

            <div class="card big">
                <h3>Grad de încadrare</h3>
                <div class="valoare">${grad}%</div>
            </div>

            <div class="card">
                <h3>Posturi ocupate</h3>
                <div class="valoare">${ocupate}</div>
            </div>

            <div class="card">
                <h3>Posturi vacante</h3>
                <div class="valoare">${vacante}</div>
            </div>

            <div class="card">
                <h3>Total personal</h3>
                <div class="valoare">${totalPersonal}</div>
            </div>

        </div>

        <h2>Alerte</h2>

        <div class="grid">
            ${alerte.map(a => `
                <div class="card alerta">
                    <span>${a.label}</span>
                    <b>${a.valoare}</b>
                </div>
            `).join("")}
        </div>
    `;
}