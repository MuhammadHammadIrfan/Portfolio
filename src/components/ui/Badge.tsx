import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'secondary';
    className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const variants = {
        default: 'bg-muted text-muted-foreground',
        primary: 'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    };

    return (
        <span
            className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
