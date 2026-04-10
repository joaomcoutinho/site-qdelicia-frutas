import { motion, useReducedMotion } from 'framer-motion'
import { Leaf, Truck, BadgeCheck } from 'lucide-react'
import { FadeIn } from '../motion/FadeIn'

const items = [
  {
    title: 'Qualidade em primeiro lugar',
    body: 'Seleção no campo e na mesa de classificação — menos desperdício, mais sabor e aparência de vitrine.',
    icon: BadgeCheck,
    accent: 'from-qd-green-600/15 to-qd-purple-500/10',
    iconClass: 'text-qd-green-700',
  },
  {
    title: 'Logística que responde',
    body: 'Rotas otimizadas, comunicação rápida e cumprimento de janela — seu estoque gira sem susto.',
    icon: Truck,
    accent: 'from-qd-purple-600/12 to-qd-green-500/10',
    iconClass: 'text-qd-purple-700',
  },
  {
    title: 'Frescor com método',
    body: 'Embalagens higiênicas, cold chain consciente e ritmo de reposição alinhado ao seu giro.',
    icon: Leaf,
    accent: 'from-qd-green-500/12 to-qd-purple-600/12',
    iconClass: 'text-qd-green-700',
  },
] as const

export function Differentials() {
  const reduce = useReducedMotion()

  return (
    <section
      id="diferenciais"
      className="scroll-mt-24 border-t border-qd-green-200/40 bg-qd-green-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
            Confiança
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl">
            Por que escolher a Q Delícia
          </h2>
          <p className="mt-3 text-base text-qd-muted sm:text-lg">
            Três pilares que sustentam cada entrega — qualidade, logística e frescor com método.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className={`relative overflow-hidden rounded-[1.75rem] border border-qd-mist bg-gradient-to-br ${item.accent} p-8 shadow-[0_20px_50px_-36px_rgba(0,0,0,0.2)]`}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-sm ring-1 ring-qd-mist/60">
                <item.icon className={`h-6 w-6 ${item.iconClass}`} strokeWidth={1.65} aria-hidden />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-qd-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-qd-muted sm:text-[15px]">{item.body}</p>
              <motion.span
                className="mt-6 block h-1 w-10 rounded-full bg-gradient-to-r from-qd-green-600 to-qd-purple-600"
                initial={reduce ? false : { scaleX: 0.2, opacity: 0.4 }}
                whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
