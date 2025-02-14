import React from "react";

interface ButtonProps {
  text: string;
  icon: React.ElementType;
  className?: string;
  iconClassName?: string;
}

export const Button = ({
  text,
  icon: Icon,
  className = "",
  iconClassName = "",
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-2 bg-[#3498db] text-white rounded-lg shadow-md hover:bg-[#2980b9] hover:shadow-lg transition duration-200 ${className}`}
    >
      <Icon className={`w-5 h-5 ${iconClassName}`} />
      <span className="text-lg font-semibold">{text}</span>
    </button>
  );
};
