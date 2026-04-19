import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Configurare pentru a putea folosi __dirname în mod "Module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. Servirea fișierelor statice (index.html, tool.js, etc.)
app.use(express.static(__dirname));

// 3. Conexiunea la MongoDB Atlas
const mongoURI = process.env.MONGO_URI;

if (mongoURI) {
    mongoose.connect(mongoURI)
        .then(() => console.log('✅ MongoDB conectat cu succes!'))
        .catch(err => console.error('❌ Eroare conexiune MongoDB:', err));
} else {
    console.warn('⚠️ ATENȚIE: MONGO_URI nu este configurat în Render!');
}

// 4. Ruta pentru a servi pagina principală
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 5. Portul dinamic (ESENȚIAL pentru Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server online pe portul ${PORT}`);
});