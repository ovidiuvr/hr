import { getAngajati, adaugaAngajat } from "../api.js";

export function renderOrganigrama() {
    setTimeout(async () => {
        const container = document.getElementById("date-organigrama");
        
        // Preluăm datele din MongoDB (hr_stocare)
        const date = await getAngajati();
        
        // Randare ierarhică (vizualizare tip listă indentată)
        container.innerHTML = date.length > 0 ? date.map(a => `
            <div class="card" style="margin-left: 20px; border-left: 3px solid #1d4ed8;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="material-symbols-outlined">account_tree</span>
                    <div>
                        <strong>${a.nume}</strong><br>
                        <small style="color: #94a3b8;">${a.functie}</small>
                    </div>
                </div>
            </div>
        `).join("") : "<p>Nicio dată disponibilă în baza de date.</p>";

        // Logica pentru butonul de adăugare
        document.getElementById("btn-add-organigrama").onclick = async () => {
            const nume = document.getElementById("in-nume").value;
            const functie = document.getElementById("in-functie").value;
            
            if(!nume || !functie) return alert("Completează numele și funcția!");
            
            // Salvare în MongoDB prin API
            await adaugaAngajat({ nume, functie });
            
            // Reîmprospătare pagină (SPA)
            window.schimbaContinut("organigrama"); 
        };
    }, 0);

    return `
        <h1>Organigramă</h1>
        <div class="card" style="display:flex; gap:10px; margin-bottom:20px; background: #1e293b;">
            <input id="in-nume" placeholder="Nume Angajat" style="padding:10px; flex:1; background: #0f172a; color: white; border: 1px solid #334155; border-radius: 5px;">
            <input id="in-functie" placeholder="Funcție/Superior" style="padding:10px; flex:1; background: #0f172a; color: white; border: 1px solid #334155; border-radius: 5px;">
            <button id="btn-add-organigrama" class="menu active" style="border:none; padding:10px 20px; cursor:pointer;">Salvează</button>
        </div>
        <div id="date-organigrama">Se încarcă structura...</div>
    `;
}