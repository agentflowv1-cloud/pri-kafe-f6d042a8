import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import './styles/app.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;