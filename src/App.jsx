import Huda from './Huda.jsx'
import Queens from './components/Queens.jsx'
import './styles/queens.css'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  // Preserve previously shared section links from the original root page.
  const legacyHuda = path === '/' && ['#top', '#meet-the-queen', '#royal-archives', '#royal-council', '#family-tree', '#final-tribute'].includes(window.location.hash)
  if (path === '/huda' || legacyHuda) return <Huda />
  if (path === '/sumie') return <Queens placeholder />
  if (path !== '/') return <Queens missing />
  return <Queens />
}
