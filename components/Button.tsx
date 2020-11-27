import React from 'jsx-dom'
import './button.scss'

interface Props {
  children?: string
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  primary?: boolean
  onClick?: () => {}
}

export default (p: Props) => {
  return (
    <button
      type="button"
      onClick={p.onClick}
      style={{backgroundColor: p.backgroundColor}}
      class={[
        'storybook-button',
        `storybook-button--${p.size || 'medium'}`,
        `storybook-button--${p.primary ? 'primary' : 'secondary'}`,
      ]}
    >
      {p.children}
    </button>
  )
}
