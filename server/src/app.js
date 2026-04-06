// ============================================
// app.js - Express Application Setup
// ============================================
// Configures the Express app with CORS, body parsing,
// API routes, and error handling.
// ============================================

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const app = express(); // Express app instance

// --- Allowed Origins ---
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'https://ai-resume-builder-iota-plum.vercel.app'
];

// --- Middleware ---
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS not allowed'));
    }
  },
  credentials: true // enable if using cookies/auth
}));

app.use(express.json({ limit: '10mb' }));

// --- Routes ---
app.use('/api', routes);

// --- Error Handling ---
app.use(notFoundHandler);
app.use(errorHandler);

export default app;