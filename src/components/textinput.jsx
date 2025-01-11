import React from 'react';
import '../styles/components.css';

const TextInput = ({ placeholder, value, onChange, type = 'text' }) => {
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="text-input" />;
};

export default TextInput;
