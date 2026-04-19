import fs from "fs";

// 🔹 CONFIGURARE
const file = "./js/app.js";

// 🔹 COD DE ADAUGAT
const importNou = `import { renderDashboard } from "../modules/dashboard.js";\n`;

// 🔹 CITIM FIȘIERUL
let content = fs.readFileSync(file, "utf8");

// 🔹 VERIFICĂ dacă există deja
if (!content.includes("renderDashboard")) {

    // 🔹 ADAUGĂ IMPORT SUS
    content = importNou + content;

    console.log("Import adăugat ✔");
}

// 🔹 SALVEAZĂ
fs.writeFileSync(file, content);

console.log("Fișier actualizat ✔");