import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

type ButtonProps = {
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isArrowButton?: boolean;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
};

const Button = ({
  label = 'Click Me',
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  isArrowButton = false,
  bgColor = 'bg-primary-navy-blue',
  textColor = 'text-white',
  borderColor = 'border-transparent',
}: ButtonProps) => {

  if (isArrowButton) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border border-secondary-light-gray flex items-center justify-center bg-transparent shadow-xs cursor-pointer ${className}`}
        aria-label="Back"
      >
        <FaChevronLeft className="text-primary-navy-blue w-3 h-3 md:h-4 md:w-4 lg:w-5 lg:h-5" />
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex w-full cursor-pointer items-center justify-center gap-2 font-medium py-3 px-5 border rounded-md text-xs md:text-sm lg:text-base transition-all duration-200 ${borderColor} ${bgColor} ${textColor} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{label}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
