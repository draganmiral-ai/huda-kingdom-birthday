import Huda from './Huda.jsx'
import { lazy, Suspense } from 'react'
const Sumie = lazy(() => import('./Sumie.jsx'))
import Queens from './components/Queens.jsx'
import './styles/queens.css'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  // Preserve previously shared section links from the original root page.
  const legacyHuda = path === '/' && ['#top', '#meet-the-queen', '#royal-archives', '#royal-council', '#family-tree', '#final-tribute'].includes(window.location.hash)
  if (path === '/huda' || legacyHuda) return <Huda />
  if (path === '/sumie') return <Suspense fallback={<main className="queens-placeholder" aria-busy="true">Opening the House of Futteisha…</main>}><Sumie /></Suspense>
  if (path !== '/') return <Queens missing />
  return <Queens />
}
