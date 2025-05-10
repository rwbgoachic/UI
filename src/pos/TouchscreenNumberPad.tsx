import React, { useState } from 'react';

type TouchscreenNumberPadProps = {
  onNumberClick: (value: string) => void;
  onClear: () => void;
  onSubmit: () => void;
  maxLength?: number;
  className?: string;
};

export const TouchscreenNumberPad: React.FC<TouchscreenNumberPadProps> = ({
  onNumberClick,
  onClear,
  onSubmit,
  maxLength = 10,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState('');

  const handleNumberClick = (number: string) => {
    if (displayValue.length < maxLength) {
      const newValue = displayValue + number;
      setDisplayValue(newValue);
      onNumberClick(newValue);
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    onClear();
  };

  const handleSubmit = () => {
    if (displayValue) {
      onSubmit();
      setDisplayValue('');
    }
  };

  return (
    <div className={`pos-numpad ${className}`}>
      <div className="pos-numpad-display">
        <input
          type="text"
          value={displayValue}
          readOnly
          className="pos-numpad-input"
        />
      </div>
      <div className="pos-numpad-grid">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((num) => (
          <button
            key={num}
            className="pos-numpad-btn"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          className="pos-numpad-btn pos-numpad-clear"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="pos-numpad-btn pos-numpad-enter"
          onClick={handleSubmit}
        >
          Enter
        </button>
      </div>
    </div>
  );
};