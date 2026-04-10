import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PRODUCTS, HOME_PREVIEW_IDS } from '../../data/products'
import { FadeIn } from '../motion/FadeIn'

const preview = PRODUCTS.filter((p) =>
  (HOME_PREVIEW_IDS as readonly string[]).includes(p.id),
)

export function ProductPreview() {
  const reduce = useReducedMotion()

  return (
    <section className="border-y border-qd-mist bg-qd-fog py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <FadeIn className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-green-700">
              Catálogo curado
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl">
              Frutas e folhas que seguram o holofote.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-qd-muted">
              Imagens grandes, nomes honestos e descrições úteis — para você decidir rápido e com
              confiança.
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <Link
              to="/produtos"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-qd-purple-300/80 bg-white px-5 py-2.5 text-sm font-semibold text-qd-purple-800 shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:border-qd-purple-400 hover:shadow-md"
            >
              Ver todos os produtos
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((product, i) => (
            <motion.article
              key={product.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.18)] ring-1 ring-qd-mist/80 transition-[box-shadow,ring-color] duration-300 hover:ring-2 hover:ring-qd-green-400/70"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/produtos" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-qd-purple-500">
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white p-4">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    whileHover={reduce ? undefined : { scale: 1.04 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-qd-ink/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-qd-purple-800 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-qd-ink">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-qd-muted">{product.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-qd-purple-700">
                    Explorar linha
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
