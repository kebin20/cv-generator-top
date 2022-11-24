import * as React from 'react';
import './style.css';
import CV from './components/CV';
import Profile from './components/Profile';

export default function App() {
  return (
    <div>
      <nav>
        <h1>CV Maker</h1>
      </nav>
      <div className="container">
        <Profile />
        <CV />
      </div>
    </div>
  );
}
