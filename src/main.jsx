import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Pastikan ini juga sudah ada .jsx
import './index.css';

// Baris import RestAPI sudah HILANG DARI SINI

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);