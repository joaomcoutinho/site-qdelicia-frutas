import { motion, useReducedMotion } from 'framer-motion'
import { Sprout } from 'lucide-react'
import { Button } from '../ui/Button'
import { whatsappHref } from '../../config/site'

/** Pomar / origem — leitura clara de “do campo” (inspirado em vitrines hortifruti como Natural Hortifruti). */
const HERO_IMAGE_FIELD =
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=2400&q=85'

export function Hero() {
  const reduce = useReducedMotion() ?? false

  return (
    <section className="relative isolate min-h-[min(100svh,900px)] overflow-hidden bg-qd-green-800">
      {/* Camada da foto: campo / pomar visível (não só close de frutas) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:center_42%] will-change-transform"
        style={{ backgroundImage: `url(${HERO_IMAGE_FIELD})` }}
        role="img"
        aria-label="Pomar e fileiras de árvores frutíferas — origem da colheita"
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.045, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Vinheta inferior: mantém leitura do texto e reforça horizonte do campo */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d3d12]/88 via-[#212121]/25 to-transparent"
        aria-hidden
      />
      {/* Overlay marca: verde + roxo, mais transparente no meio para o fundo “respirar” */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/78 via-[#2E7D32]/28 to-[#6A1B9A]/72"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1b5e20]/55 via-transparent to-[#4a148c]/40"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 qd-grain" aria-hidden />

      <svg
        className="absolute -bottom-px left-0 z-[1] w-full text-qd-white"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 96L60 88.7C120 81.3 240 66.7 360 58.3C480 50 600 48 720 55.3C840 62.7 960 79.3 1080 82.7C1200 86 1320 76 1380 71L1440 66V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V96Z"
        />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,900px)] max-w-6xl flex-col justify-center px-4 pb-28 pt-10 sm:px-6 lg:pb-32 lg:pt-8">
        <motion.div
          className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/30 bg-[color-mix(in_srgb,white_18%,transparent)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-md qd-stitch"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sprout className="h-3.5 w-3.5 text-qd-green-200" strokeWidth={1.75} aria-hidden />
          Do campo à sua operação
        </motion.div>

        <motion.h1
          className="mt-6 max-w-3xl font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.2rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          Frutas frescas com origem visível — da{' '}
          <span className="bg-gradient-to-r from-qd-green-200 via-white to-qd-purple-200 bg-clip-text text-transparent">
            colheita ao seu balcão
          </span>
          .
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          A mesma lógica do hortifruti de confiança: seleção no campo, padrão na embalagem e entrega no
          prazo — para varejo e food service que vendem frescor de verdade.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button variant="primary" href={whatsappHref('Olá! Quero solicitar um orçamento.')}>
            Solicitar orçamento
          </Button>
          <Button
            variant="secondary"
            className="!border-2 !border-white !bg-transparent !text-white hover:!bg-white/15"
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </Button>
        </motion.div>

        <motion.dl
          className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/25 pt-8 text-white/95 sm:max-w-2xl sm:gap-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              Experiência
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold text-white">22+ anos</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              Cobertura
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold text-white">5 estados</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              Foco
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold text-white">Frescor real</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}
