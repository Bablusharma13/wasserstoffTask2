// src/components/Card/Card.tsx
import React from 'react';

export type CardProps = {
  title: string;
  content: string;
  footer?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ title, content, footer, className = '' }) => (
  <div className={`border rounded-lg p-4 shadow bg-white ${className}`}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{content}</p>
    {footer && <div className="mt-4">{footer}</div>}
  </div>
);
