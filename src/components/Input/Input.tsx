// src/components/Input/Input.tsx
import React from 'react';

export type InputProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
}) => (
  <div className="flex flex-col space-y-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  </div>
);
