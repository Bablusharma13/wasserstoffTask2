// src/App.tsx
import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Page1 />
      <hr className="my-6" />
      <Page2 />
    </div>
  );
}

export default App;
