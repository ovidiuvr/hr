export function renderStructura() {
    return `
        <div style="animation: fadeIn 0.4s ease-out; color: white; font-family: 'Segoe UI', sans-serif;">
            <h2 style="color: #38bdf8; margin-bottom: 25px; border-bottom: 1px solid #334155; padding-bottom: 10px; font-weight: 500;">
                Structură organizatorică
            </h2>

            <div style="background: #1e293b; padding: 50px; border-radius: 16px; border: 1px solid #334155; display: flex; flex-direction: column; align-items: center; box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
                
                <div style="background: #38bdf8; color: #0f172a; padding: 18px 40px; border-radius: 12px; font-weight: bold; letter-spacing: 0.5px; box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);">
                    Consiliu de administrație
                </div>

                <div style="width: 2px; height: 35px; background: linear-gradient(#38bdf8, #334155);"></div>

                <div style="background: #1e293b; padding: 14px 30px; border-radius: 8px; border: 1px solid #38bdf8; transition: 0.3s hover;">
                    Manager general
                </div>

                <div style="width: 2px; height: 35px; background: #334155;"></div>
                
                <div style="display: flex; gap: 30px; justify-content: center;">
                    
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid #38bdf8; padding: 12px 25px; border-radius: 8px; min-width: 150px; text-align: center;">
                            Departament it
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; padding: 12px 25px; border-radius: 8px; min-width: 150px; text-align: center;">
                            Resurse umane
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 2px; height: 20px; background: #334155;"></div>
                        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; padding: 12px 25px; border-radius: 8px; min-width: 150px; text-align: center;">
                            Financiar
                        </div>
                    </div>

                </div>
            </div>
            
            <p style="margin-top: 30px; color: #64748b; font-size: 0.85rem; text-align: center;">
                * sistemul este configurat prin tool.js și gata pentru etapa de date dinamice.
            </p>
        </div>
    `;
}