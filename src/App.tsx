import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import AboutPage from './pages/AboutPage'
import BigIdeaPage from './pages/BigIdeaPage'
import Home from './pages/Home'

// Loaded on its own so the rest of the site doesn't download its charts and maps
const FourFuturesApp = lazy(() => import('./four-futures/FourFuturesApp'))

function Layout() {
  const { pathname } = useLocation()
  // Braces matter: scrollTo can return a value, which React would treat as a cleanup function
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

// Placeholder for pages that haven't been built from Figma yet
function ComingSoon() {
  return (
    <section className="container-content py-24">
      <h1 className="type-h2">This page is coming soon.</h1>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Has its own header and footer for now */}
        <Route
          path="/four-futures/*"
          element={
            <Suspense fallback={<div className="min-h-screen bg-navy" />}>
              <FourFuturesApp />
            </Suspense>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/big-ideas/:slug" element={<BigIdeaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
