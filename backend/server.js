import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/events_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Retrying in 5 seconds...');
    setTimeout(connectDB, 5000);
  }
};

connectDB();

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected. Attempting to reconnect...');
  connectDB();
});

// Routes
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 