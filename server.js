const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. Servirea fișierelor statice (Asigură-te că index.html e lângă server.js)
// Această linie spune serverului să livreze tot ce e în folderul curent
app.use(express.static(__dirname));

// 3. Conexiunea MongoDB (Folosește variabila MONGO_URI din Render)
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("❌ EROARE: Variabila MONGO_URI nu este setată în Render -> Environment!");
} else {
    mongoose.connect(mongoURI)
        .then(() => console.log('✅ Conectat cu succes la MongoDB Atlas'))
        .catch(err => console.error('❌ Eroare conexiune MongoDB:', err));
}

// 4. Definire Schema (Exemplu pentru Angajați)
const EmployeeSchema = new mongoose.Schema({
    nume: String,
    functie: String,
    departament: String
});
const Employee = mongoose.model('Employee', EmployeeSchema);

// 5. Rute API
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. Traseul principal (Trimite index.html când cineva accesează site-ul)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 7. Setare Port Dinamic (CRITIC pentru Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server UP: http://localhost:${PORT}`);
});