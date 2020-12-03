import { addDecorator } from '@storybook/html'
import RenderJSX from './helpers/RenderJSX'
import '../styles/global.scss'

addDecorator(story => RenderJSX(story()))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    transformSource: (src, storyContext) => RenderJSX(storyContext.storyFn()),
  },
}
