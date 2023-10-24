import React from 'react';
import SharedComponent from '../shared/SharedComponent';
import { Route, Routes } from 'react-router-dom';

export default function App1() {
  return (
    <>
      <SharedComponent />
      <Routes>
        <Route path="*" element={<h1>App1 Route</h1>} />
      </Routes>
    </>
  );
}