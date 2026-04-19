const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// 1. Permite accesul din exterior (CORS) și procesarea datelor JSON
app.use(cors());
app.use(express.json());

// 2. Servirea fișierelor statice
// Spune serverului să caute index.html, tool.js etc. în folderul principal
app.use(express.static(path.join(__dirname)));

// 3. Conexiunea la MongoDB Atlas (folosește variabila MONGO_URI din Render)
const mongoURI = process.env.MONGO_URI;

if (mongoURI) {
    mongoose.connect(mongoURI)
        .then(() => console.log('✅ MongoDB conectat cu succes!'))
        .catch(err => console.error('❌ Eroare conectare MongoDB:', err));
} else {
    console.log('⚠️ Atenție: MONGO_URI nu este configurat în Environment Variables.');
}

// 4. Rută API de test (opțional)
app.get('/api/status', (req, res) => {
    res.json({ status: "Serverul HR este online!" });
});

// 5. RUTA CRITICĂ: Trimite index.html pentru orice adresă necunoscută
// Asta elimină eroarea "Not Found" la refresh
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 6. PORT DINAMIC (Cel mai important pentru Render)
// Render va injecta automat un port, dacă nu, folosim 3000 local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server UP la adresa: http://localhost:${PORT}`);
});