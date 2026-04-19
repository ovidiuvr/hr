export function initSidebar() {
    const container = document.getElementById("sidebar-container");
    if (!container) return;

    container.innerHTML = `
        <div style="width: 250px; background: #1e293b; height: 100vh; padding: 20px; color: white;">
            <h2 style="color: #38bdf8;">HR PRO</h2>
            <ul style="list-style: none; padding: 0; margin-top: 40px;">
                <li onclick="schimbaContinut('dashboard')" style="padding: 10px; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#334155'" onmouseout="this.style.background='transparent'">🏠 Dashboard</li>
                <li onclick="schimbaContinut('personal')" style="padding: 10px; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#334155'" onmouseout="this.style.background='transparent'">👥 Personal</li>
                <li onclick="schimbaContinut('organigrama')" style="padding: 10px; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#334155'" onmouseout="this.style.background='transparent'">📊 Organigramă</li>
            </ul>
        </div>
    `;
}