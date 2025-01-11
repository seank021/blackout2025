import React from 'react';
import '../styles/components.css';

const Button = ({ label, onClick, type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="button"
        >
            {label}
        </button>
    );
};

export default Button;
