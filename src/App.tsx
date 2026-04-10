import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'
import { ProductsPage } from './pages/Products'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/empresa" element={<AboutPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}
