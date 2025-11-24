import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    href?: string;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    href,
    ...props
}: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "border-2 border-border text-foreground hover:bg-muted",
    };

    const buttonContent = (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {buttonContent}
            </a>
        );
    }

    return buttonContent;
}
