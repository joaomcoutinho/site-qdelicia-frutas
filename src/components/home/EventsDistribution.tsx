import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { BRAND, EVENT_PHOTOS } from '../../config/assets'
import { EventGallery } from './EventGallery'
import { FadeIn } from '../motion/FadeIn'
import { Button } from '../ui/Button'
import { whatsappHref } from '../../config/site'

/** Uma única rota animada (stroke) — protagonista visual único além dos pontos. */
const ROUTE_MAIN =
  'M 68 32 C 58 38, 48 44, 42 52'

/** Até 3 marcos: hub + duas regiões (sem anéis “radar” / zoom circular). */
const MAP_MARKERS = [
  { cx: 68, cy: 32, pulse: false },
  { cx: 44, cy: 50, pulse: true },
  { cx: 74, cy: 56, pulse: true },
] as const

function MapHeroOverlay({
  inView,
  reduce,
}: {
  inView: boolean
  reduce: boolean
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="qd-route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-qd-green-600)" />
          <stop offset="55%" stopColor="var(--color-qd-purple-600)" />
          <stop offset="100%" stopColor="var(--color-qd-green-500)" />
        </linearGradient>
      </defs>
      <motion.path
        d={ROUTE_MAIN}
        fill="none"
        stroke="url(#qd-route-grad)"
        strokeWidth={0.75}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={reduce || inView ? { pathLength: 1, opacity: 0.72 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: reduce ? 0 : 1.05, delay: reduce ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.08 },
        }}
      />
      <motion.g
        initial={false}
        animate={reduce || inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {MAP_MARKERS.map((dot) => (
          <circle
            key={`${dot.cx}-${dot.cy}`}
            cx={dot.cx}
            cy={dot.cy}
            r={1.4}
            fill="var(--color-qd-white)"
            stroke="var(--color-qd-purple-700)"
            strokeWidth={0.55}
            className={!reduce && dot.pulse ? 'qd-map-dot-pulse' : undefined}
          />
        ))}
      </motion.g>
    </svg>
  )
}

export function EventsDistribution() {
  const reduce = useReducedMotion() ?? false
  const mapBlockRef = useRef<HTMLDivElement>(null)
  const mapInView = useInView(mapBlockRef, {
    amount: 0.2,
    margin: '0px 0px -10% 0px',
    once: true,
  })

  return (
    <section
      id="distribuicao"
      className="relative scroll-mt-24 overflow-x-hidden border-y border-qd-green-200/35 bg-qd-white py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-qd-fog/90 via-white to-qd-green-50/30"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
            Distribuição
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
            Do campo à sua operação com{' '}
            <span className="text-gradient-brand">eficiência logística</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-qd-muted sm:text-lg">
            Atendimento direto em cinco estados — rota clara, prazos combinados e padrão Q Delícia em
            cada entrega.
          </p>
        </FadeIn>

        {/* Mapa como protagonista — sem cards competindo acima */}
        <motion.div
          ref={mapBlockRef}
          className="relative mx-auto mt-12 w-full"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-qd-green-200/60 bg-white p-1.5 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.12)] sm:rounded-[1.75rem] sm:p-2">
            <div className="relative aspect-[16/10] min-h-[260px] w-full overflow-hidden rounded-xl bg-qd-fog sm:min-h-[320px] lg:min-h-[380px]">
              <img
                src={BRAND.mapaDistribuicao}
                alt="Mapa do Brasil com regiões atendidas pela Q Delícia Frutas"
                className="h-full w-full object-contain object-center"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-qd-green-900/10 via-transparent to-transparent"
                aria-hidden
              />
              <MapHeroOverlay inView={mapInView} reduce={reduce} />
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4">
                <span className="rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-qd-green-800 shadow-sm ring-1 ring-qd-mist/80">
                  PE · PB · RN · AL · BA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloco editorial + CTA separado, com respiro */}
        <div className="mx-auto mt-14 max-w-5xl border-t border-qd-mist/80 pt-14 sm:mt-16 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
            <FadeIn delay={0.04} y={12}>
              <h3 className="font-serif text-xl font-semibold text-qd-ink sm:text-2xl">
                Logística pensada para quem não pode parar o balcão.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-qd-muted sm:text-[15px]">
                Frota higienizada, janelas acordadas e comunicação clara — menos improviso, mais
                previsibilidade no abastecimento.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-l-2 border-qd-purple-200 pl-5 text-sm text-qd-muted">
                <p>
                  <span className="font-semibold text-qd-ink">Prazos</span>
                  <br />
                  combinados com você
                </p>
                <p>
                  <span className="font-semibold text-qd-ink">Operação</span>
                  <br />
                  do hub ao PDV
                </p>
              </div>
            </FadeIn>

            <FadeIn
              className="flex flex-col rounded-2xl bg-gradient-to-br from-qd-purple-50/80 to-qd-green-50/50 p-8 ring-1 ring-qd-purple-100/50 sm:p-10"
              delay={0.08}
              y={12}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-qd-purple-700">
                Próximo passo
              </p>
              <p className="mt-3 text-sm leading-relaxed text-qd-muted">
                Fale com a equipe e alinhe volume, frequência e janelas de entrega.
              </p>
              <Button
                variant="primary"
                className="mt-8 w-full !py-3.5 text-[15px] shadow-[0_16px_44px_-14px_color-mix(in_srgb,var(--color-qd-purple-800)_48%,transparent)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:self-start sm:min-w-[260px]"
                href={whatsappHref('Olá! Quero falar sobre distribuição e rotas.')}
              >
                Falar com a equipe
              </Button>
              <p className="mt-4 text-xs leading-relaxed text-qd-muted">
                Resposta rápida no WhatsApp.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <EventGallery photos={EVENT_PHOTOS} />
        </div>
      </div>
    </section>
  )
}
