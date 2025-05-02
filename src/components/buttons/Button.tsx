import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => (
  <button className={`btn ${variant}`} {...props} />
);