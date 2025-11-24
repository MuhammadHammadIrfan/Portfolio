import React from 'react';

interface SectionDividerProps {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

export default function SectionDivider({
    orientation = 'horizontal',
    className = ''
}: SectionDividerProps) {
    if (orientation === 'vertical') {
        return <div className={`w-px bg-border ${className}`} />;
    }

    return <div className={`h-px bg-border ${className}`} />;
}
