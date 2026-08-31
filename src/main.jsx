import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const pageModules = import.meta.glob('./pages/**/page.jsx')

function getPageModulePath(pathname) {
  const routePath = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/^\/+|\/+$/g, '')

  return routePath
    ? `./pages/${routePath}/page.jsx`
    : './pages/page.jsx'
}

function render(Page) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}

const pageModulePath = getPageModulePath(window.location.pathname)
const loadPage = pageModules[pageModulePath]

if (loadPage) {
  loadPage()
    .then(({ default: Page }) => render(Page))
    .catch(() => render(() => <main><h1>페이지를 불러오지 못했습니다.</h1></main>))
} else {
  render(() => <main><h1>페이지를 찾을 수 없습니다.</h1></main>)
}
