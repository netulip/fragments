import React from 'react'
import './button.scss'

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  primary?: boolean
  label?: string
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label = 'Button',
}) => {
  const className = [
    'button',
    size || 'medium',
    primary ? 'primary' : 'secondary',
  ].join(' ')

  return (
    <div>
      <i>hello</i>
      <i>hello</i>
      <i>hello</i>
      <i>hello</i>
      <div>heloo</div>
      <button type="button" className={className}>
        {label}
      </button>
    </div>
  )
}

export default Button
