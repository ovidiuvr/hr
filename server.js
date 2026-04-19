import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Aici se face sincronizarea folderelor cu browserul
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Sincronizat cu MongoDB Cloud'))
    .catch(err => console.error('❌ Eroare conexiune:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server activ la: http://localhost:${PORT}`);
});