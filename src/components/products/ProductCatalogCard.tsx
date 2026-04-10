import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../ui/Button'
import { whatsappHref } from '../../config/site'
import type { Product } from '../../data/products'

type Props = {
  product: Product
}

export function ProductCatalogCard({ product }: Props) {
  const reduce = useReducedMotion() ?? false

  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-3xl border border-qd-mist/90 bg-white shadow-[0_22px_55px_-42px_rgba(0,0,0,0.2)] transition-[box-shadow,ring-color] duration-300 hover:shadow-[0_28px_60px_-38px_color-mix(in_srgb,var(--color-qd-purple-700)_22%,transparent)] hover:ring-2 hover:ring-qd-purple-300/80"
    >
      <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-white p-4 ring-1 ring-qd-purple-100/80">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full max-h-full object-contain"
          loading="lazy"
          decoding="async"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-qd-ink/45 via-transparent to-qd-purple-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-qd-purple-800 shadow-sm ring-1 ring-qd-mist/60 backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="font-serif text-xl font-semibold text-qd-ink">{product.name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-qd-muted">{product.description}</p>
        <div className="mt-5">
          <Button
            variant="ghost"
            className="!px-0 !py-0 font-semibold text-qd-purple-700 hover:bg-transparent hover:text-qd-green-700 hover:underline"
            href={whatsappHref(`Olá! Tenho interesse em ${product.name} (${product.category}).`)}
            target="_blank"
            rel="noreferrer"
          >
            Consultar disponibilidade
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
