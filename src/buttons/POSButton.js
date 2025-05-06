import React from 'react';

export const POSButton = ({ 
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'pos-btn';
  const variantClasses = {
    primary: 'pos-btn-primary',
    secondary: 'pos-btn-secondary',
    success: 'pos-btn-success',
    danger: 'pos-btn-danger'
  };
  const sizeClasses = {
    sm: 'pos-btn-sm',
    md: 'pos-btn-md',
    lg: 'pos-btn-lg'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};