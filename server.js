import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servim fișierele din folderul principal
app.use(express.static(path.join(__dirname, '/')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server UP: http://localhost:${PORT}`);
});