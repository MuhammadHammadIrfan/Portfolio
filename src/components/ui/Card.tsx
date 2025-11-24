import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
    return (
        <div
            className={`
        bg-card border border-border rounded-lg p-6
        ${hover ? 'hover:shadow-lg hover:border-primary/50 transition-all duration-300' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
