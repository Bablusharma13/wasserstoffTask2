// src/pages/Page1.tsx
import React, { useState } from 'react';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';

const Page1: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`Hello, ${name}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">User Form</h1>
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Page1;
