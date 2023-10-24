import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app/App';
import App1 from './app1/App1';
import App2 from './app2/App2';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app1" element={<App1 />} />
      <Route path="/app2" element={<App2 />} />
    </Routes>
  </Router>
);

const root = document.getElementById('app');
createRoot(root).render(<Main />);
