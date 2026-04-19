import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// CONEXIUNE MONGODB
const mongoURI = process.env.MONGO_URI || "adresa_ta_din_env";
mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Conectat'))
    .catch(err => console.error('❌ Eroare MongoDB:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// ÎNREGISTRARE
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true, message: "Cont creat cu succes!" });
    } catch (err) {
        res.status(400).json({ success: false, message: "Eroare la înregistrare." });
    }
});

// LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ success: true, user: { username: user.username } });
        } else {
            res.status(401).json({ success: false, message: "Date incorecte!" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Eroare server." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));