import React from 'react';

type ButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  label = 'Click Me',
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex w-full cursor-pointer items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md text-xs md:text-sm transition-all duration-200 ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{label}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
