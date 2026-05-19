import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const DB_HOST = process.env.DB_HOST || '';

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('E-Pharmacy API is running...');
});

// Підключаємося до бази даних, і тільки після успіху запускаємо сервер
mongoose.connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
    process.exit(1);
  });