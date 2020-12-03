import { addDecorator } from '@storybook/html'
import JSXToMarkup from './decorators/JSXToMarkup'

addDecorator(JSXToMarkup)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    transformSource: (src, storyContext) => JSXToMarkup(storyContext.storyFn),
  },
}
