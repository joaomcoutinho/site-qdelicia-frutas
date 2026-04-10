import { Outlet } from 'react-router-dom'
import { ScrollManager } from '../ScrollManager'
import { Footer } from './Footer'
import { Header } from './Header'
import { WhatsAppFloat } from './WhatsAppFloat'

export function Layout() {
  return (
    <div className="min-h-svh text-qd-ink">
      <ScrollManager />
      <Header />
      <main className="pt-16 sm:pt-[4.25rem]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
