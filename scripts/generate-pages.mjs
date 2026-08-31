import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { globSync } from 'glob'

const projectRoot = resolve(import.meta.dirname, '..')
const outputRoot = resolve(projectRoot, 'dist')
const htmlTemplate = resolve(outputRoot, 'index.html')

if (!existsSync(htmlTemplate)) {
  throw new Error('dist/index.html이 없습니다. Vite 빌드를 먼저 실행하세요.')
}

const pageFiles = globSync('src/pages/**/page.jsx', {
  cwd: projectRoot,
  nodir: true,
}).map((file) => file.replaceAll('\\', '/'))

if (!pageFiles.includes('src/pages/page.jsx')) {
  throw new Error('홈 페이지인 src/pages/page.jsx가 필요합니다.')
}

for (const pageFile of pageFiles) {
  if (pageFile === 'src/pages/page.jsx') {
    continue
  }

  const routePath = pageFile.slice(
    'src/pages/'.length,
    -'/page.jsx'.length,
  )
  const outputFile = resolve(outputRoot, routePath, 'index.html')

  mkdirSync(dirname(outputFile), { recursive: true })
  copyFileSync(htmlTemplate, outputFile)

  console.log(`Generated /${routePath}/`)
}
