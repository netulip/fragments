import React from 'react'
import './button.scss'

interface Props {
  children?: string
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  primary?: boolean
  onClick?: () => {}
}

export default ({
  backgroundColor,
  size,
  primary,
  children,
  onClick,
}: Props) => {
  const className = [
    'button',
    size || 'medium',
    primary ? 'primary' : 'secondary',
  ].join(' ')

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor }}
      className={className}
    >
      {children}
    </button>
  )
}
