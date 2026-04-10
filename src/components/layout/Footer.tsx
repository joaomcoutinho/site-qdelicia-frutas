import { Link } from 'react-router-dom'
import { BRAND } from '../../config/assets'
import { SITE, whatsappHref } from '../../config/site'
import { Button } from '../ui/Button'

export function Footer() {
  return (
    <footer className="relative border-t border-qd-mist bg-qd-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-qd-green-400/40 via-qd-purple-300/40 to-qd-green-400/40" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-12">
        <div>
          <img
            src={BRAND.logo}
            alt={SITE.name}
            className="h-12 w-auto max-w-[220px] object-contain object-left"
            width={220}
            height={64}
            loading="lazy"
            decoding="async"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-qd-muted">{SITE.region}</p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-qd-muted">{SITE.history}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="primary" href={whatsappHref()}>
              Falar no WhatsApp
            </Button>
            <Link
              to="/produtos"
              className="inline-flex items-center justify-center rounded-full border-2 border-qd-purple-700 bg-qd-white px-6 py-3 text-sm font-semibold tracking-wide text-qd-purple-800 transition-colors hover:bg-qd-purple-50 qd-stitch"
            >
              Ver catálogo
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-qd-purple-700">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-qd-muted">
              {SITE.phones.map((p) => (
                <li key={p.label}>
                  <span className="block font-medium text-qd-ink">{p.label}</span>
                  <a
                    className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                    href={`tel:${p.number.replace(/\D/g, '')}`}
                  >
                    {p.number}
                  </a>
                </li>
              ))}
              <li>
                <span className="block font-medium text-qd-ink">WhatsApp</span>
                <a
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                >
                  {SITE.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-qd-purple-700">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  to="/"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  to="/empresa"
                >
                  A empresa
                </Link>
              </li>
              <li>
                <Link
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  to="/produtos"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <a
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  href="/#distribuicao"
                >
                  Distribuição
                </a>
              </li>
              <li>
                <a
                  className="text-qd-purple-700 underline-offset-2 hover:text-qd-green-700 hover:underline"
                  href="/#diferenciais"
                >
                  Por que a Q Delícia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-qd-mist bg-qd-fog">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-qd-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>Qualidade do campo à sua operação.</p>
        </div>
      </div>
    </footer>
  )
}
