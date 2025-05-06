import React from 'react';

export const POSForm = ({ 
  children,
  onSubmit,
  className = '',
  ...props 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form 
      className={`pos-form ${className}`}
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </form>
  );
};