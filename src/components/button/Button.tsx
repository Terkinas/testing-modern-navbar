import React from 'react'

type ButtonProps = {
  onClick: () => void,
  label: string,
  disabled?: boolean,
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, className = '' }) => {
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-bold rounded ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
