import { StrictMode, type ComponentType, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const pageModules = import.meta.glob<{ default: ComponentType }>(
  './pages/**/page.tsx',
)

function getPageModulePath(pathname: string) {
  const routePath = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/^\/+|\/+$/g, '')

  return routePath
    ? `./pages/${routePath}/page.tsx`
    : './pages/page.tsx'
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('#root 요소를 찾을 수 없습니다.')
}

const root = createRoot(rootElement)

function render(content: ReactNode) {
  root.render(
    <StrictMode>
      {content}
    </StrictMode>,
  )
}

const pageModulePath = getPageModulePath(window.location.pathname)
const loadPage = pageModules[pageModulePath]

if (loadPage) {
  loadPage()
    .then(({ default: Page }) => render(<Page />))
    .catch(() => render(<main><h1>페이지를 불러오지 못했습니다.</h1></main>))
} else {
  render(<main><h1>페이지를 찾을 수 없습니다.</h1></main>)
}
