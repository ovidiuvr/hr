export function renderTest() {
    return `
        <div style="animation: fadeIn 0.5s ease; text-align: center; color: white;">
            <h2 style="color: #38bdf8; margin-bottom: 30px;">Structură organizatorică</h2>
            
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="background: #38bdf8; color: #0f172a; padding: 15px 25px; border-radius: 8px; font-weight: bold; min-width: 180px;">
                    Manager general
                </div>
                
                <div style="width: 2px; height: 30px; background: #334155;"></div>
                
                <div style="display: flex; gap: 50px; justify-content: center;">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: #1e293b; padding: 12px 20px; border-radius: 6px; border: 1px solid #38bdf8; min-width: 140px;">
                            Departament it
                        </div>
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: #334155; color: #94a3b8; padding: 8px 15px; border-radius: 4px; font-size: 0.85rem;">
                            Echipă dezvoltare
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: #1e293b; padding: 12px 20px; border-radius: 6px; border: 1px solid #10b981; min-width: 140px;">
                            Departament resurse umane
                        </div>
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: #334155; color: #94a3b8; padding: 8px 15px; border-radius: 4px; font-size: 0.85rem;">
                            Specialist recrutare
                        </div>
                    </div>
                </div>
            </div>

            <p style="margin-top: 40px; color: #64748b; font-size: 0.9rem;">
                Notă: acest modul este în faza de testare.
            </p>
        </div>
    `;
}