import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import BackToTop from './components/Layout/BackToTop'
import CustomCursor from './components/Layout/CustomCursor'
import LoadingScreen from './components/Layout/LoadingScreen'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="cursor-enabled relative min-h-screen overflow-x-hidden">
      <LoadingScreen visible={loading} />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
