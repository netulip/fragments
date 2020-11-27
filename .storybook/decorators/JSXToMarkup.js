import { renderToStaticMarkup } from 'react-dom/server'

export default (story) => renderToStaticMarkup(story())
