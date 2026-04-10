import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BRAND } from '../../config/assets'
import { SITE, whatsappHref } from '../../config/site'
import { Button } from '../ui/Button'

type HashTarget = 'distribuicao' | 'diferenciais'

function hashLinkClass(active: boolean) {
  return [
    'text-sm font-medium tracking-wide transition-colors',
    active ? 'font-semibold text-qd-purple-700' : 'text-qd-muted hover:text-qd-purple-700',
  ].join(' ')
}

export function Header() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isDistribuicao = pathname === '/' && hash === '#distribuicao'
  const isDiferenciais = pathname === '/' && hash === '#diferenciais'

  const goHash = (id: HashTarget) => {
    setOpen(false)
    navigate({ pathname: '/', hash: id }, { replace: pathname === '/' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-qd-mist bg-qd-white/92 shadow-sm backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 qd-grain" aria-hidden />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={BRAND.logo}
            alt={SITE.name}
            className="h-9 w-auto object-contain sm:h-10"
            width={160}
            height={48}
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                'text-sm font-medium tracking-wide transition-colors',
                isActive && !hash ? 'font-semibold text-qd-green-700' : 'text-qd-muted hover:text-qd-purple-700',
              ].join(' ')
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/empresa"
            className={({ isActive }) =>
              [
                'text-sm font-medium tracking-wide transition-colors',
                isActive ? 'font-semibold text-qd-green-700' : 'text-qd-muted hover:text-qd-purple-700',
              ].join(' ')
            }
          >
            A empresa
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              [
                'text-sm font-medium tracking-wide transition-colors',
                isActive ? 'font-semibold text-qd-green-700' : 'text-qd-muted hover:text-qd-purple-700',
              ].join(' ')
            }
          >
            Produtos
          </NavLink>
          <Link
            to={{ pathname: '/', hash: 'distribuicao' }}
            className={hashLinkClass(isDistribuicao)}
            onClick={(e) => {
              e.preventDefault()
              goHash('distribuicao')
            }}
          >
            Distribuição
          </Link>
          <Link
            to={{ pathname: '/', hash: 'diferenciais' }}
            className={hashLinkClass(isDiferenciais)}
            onClick={(e) => {
              e.preventDefault()
              goHash('diferenciais')
            }}
          >
            Por que a Q Delícia
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" href={whatsappHref()} target="_blank" rel="noreferrer">
            WhatsApp
          </Button>
          <Button variant="primary" href={whatsappHref('Olá! Preciso de um orçamento.')}>
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-qd-mist bg-qd-fog text-qd-ink lg:hidden qd-stitch"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-qd-mist bg-qd-white shadow-lg lg:hidden"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-3 text-base font-medium ${isActive && !hash ? 'bg-qd-green-100 text-qd-green-800' : 'text-qd-ink'}`
                }
              >
                Início
              </NavLink>
              <NavLink
                to="/empresa"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-3 text-base font-medium ${isActive ? 'bg-qd-green-100 text-qd-green-800' : 'text-qd-ink'}`
                }
              >
                A empresa
              </NavLink>
              <NavLink
                to="/produtos"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-3 text-base font-medium ${isActive ? 'bg-qd-green-100 text-qd-green-800' : 'text-qd-ink'}`
                }
              >
                Produtos
              </NavLink>
              <Link
                to={{ pathname: '/', hash: 'distribuicao' }}
                className={`block rounded-xl px-3 py-3 text-base font-medium ${isDistribuicao ? 'bg-qd-purple-100 text-qd-purple-900' : 'text-qd-ink'}`}
                onClick={(e) => {
                  e.preventDefault()
                  goHash('distribuicao')
                }}
              >
                Distribuição
              </Link>
              <Link
                to={{ pathname: '/', hash: 'diferenciais' }}
                className={`block rounded-xl px-3 py-3 text-base font-medium ${isDiferenciais ? 'bg-qd-purple-100 text-qd-purple-900' : 'text-qd-ink'}`}
                onClick={(e) => {
                  e.preventDefault()
                  goHash('diferenciais')
                }}
              >
                Por que a Q Delícia
              </Link>
              <div className="mt-3 flex flex-col gap-2 border-t border-qd-mist pt-4">
                <Button variant="whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </Button>
                <Button variant="primary" href={whatsappHref('Olá! Preciso de um orçamento.')}>
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
