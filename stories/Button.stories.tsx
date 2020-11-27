import React from 'jsx-dom'
import Button from '../components/Button'

interface Args {
  label?: string
  children?: string
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  primary?: boolean
  onClick?: () => {}
}
export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
}

export const Primary = (args: Args) => {
  return <Button {...args} >{args.label}</Button>
}

Primary.args = {
  label: 'Button',
  size: 'small',
  primary: true,
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
