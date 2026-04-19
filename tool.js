import fs from "fs";

const modul = process.argv[2];
if (!modul) {
    console.log("Folosește: node tool.js numeModul");
    process.exit();
}

const capital = modul.charAt(0).toUpperCase() + modul.slice(1);
const modulPath = `./modules/${modul}.js`;
const appPath = "./js/app.js";
const sidebarPath = "./modules/slidebar.js";

if (!fs.existsSync(modulPath)) {
    const content = `
import { getAngajati, adaugaAngajat } from "../api.js";

export function render${capital}() {
    setTimeout(async () => {
        const container = document.getElementById("date-${modul}");
        const date = await getAngajati();
        
        container.innerHTML = date.map(a => \`
            <div class="card" style="margin-bottom:10px;">
                <strong>\${a.nume}</strong> - \${a.functie}
            </div>
        \`).join("");

        document.getElementById("btn-add-${modul}").onclick = async () => {
            const nume = document.getElementById("in-nume").value;
            const functie = document.getElementById("in-functie").value;
            if(!nume || !functie) return alert("Completează tot!");
            await adaugaAngajat({ nume, functie });
            location.reload(); 
        };
    }, 0);

    return \`
        <h1>${capital}</h1>
        <div class="card" style="display:flex; gap:10px; margin-bottom:20px;">
            <input id="in-nume" placeholder="Nume" style="padding:8px;">
            <input id="in-functie" placeholder="Funcție" style="padding:8px;">
            <button id="btn-add-${modul}" class="menu active" style="border:none; padding:8px 20px;">Adaugă</button>
        </div>
        <div id="date-${modul}">Se încarcă...</div>
    \`;
}
`;
    fs.writeFileSync(modulPath, content.trim());
    console.log("✔ Modul creat cu stocare");
}

// Update app.js
let app = fs.readFileSync(appPath, "utf8");
const importLine = `import { render${capital} } from "../modules/${modul}.js";`;
if (!app.includes(importLine)) app = importLine + "\n" + app;
const routeLine = `    ${modul}: render${capital},`;
if (!app.includes(routeLine)) app = app.replace("const routes = {", `const routes = {\n${routeLine}`);
fs.writeFileSync(appPath, app);

// Update sidebar
let sidebar = fs.readFileSync(sidebarPath, "utf8");
if (!sidebar.includes(`id: "${modul}"`)) {
    const newMenu = `{ id: "${modul}", text: "${capital}", icon: "fiber_new" },`;
    sidebar = sidebar.replace("const meniuri = [", `const meniuri = [\n    ${newMenu}`);
}
fs.writeFileSync(sidebarPath, sidebar);
console.log("✔ Fișiere actualizate.");