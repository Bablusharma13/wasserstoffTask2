// src/pages/Page2.tsx
import React from 'react';
import { Card } from '../components/Card/Card';

const Page2: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <Card
        title="Card One"
        content="This is a reusable card component."
        footer={<span className="text-sm text-gray-500">Footer 1</span>}
      />
      <Card
        title="Card Two"
        content="Cards can display any content and footer."
        footer={<span className="text-sm text-gray-500">Footer 2</span>}
      />
    </div>
  );
};

export default Page2;
