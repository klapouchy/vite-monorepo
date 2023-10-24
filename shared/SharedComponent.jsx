import React from 'react';
import { Link } from 'react-router-dom';

export default function SharedComponent() {
  return (
    <div>
      <h1>Shared Nav</h1>
      <nav>
        <ul>
          <li><Link to="/">Root</Link></li>
          <li><Link to="/app1">App1</Link></li>
          <li><Link to="/app2">App2</Link></li>
        </ul>
      </nav>
    </div>
  );
}