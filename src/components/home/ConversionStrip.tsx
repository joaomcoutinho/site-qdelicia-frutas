import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../ui/Button'
import { whatsappHref } from '../../config/site'

export function ConversionStrip() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-qd-purple-700 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 qd-grain" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, color-mix(in srgb, white 40%, transparent), transparent 45%), radial-gradient(circle at 85% 70%, color-mix(in srgb, var(--color-qd-purple-300) 35%, transparent), transparent 42%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -12 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
            Próximo passo
          </p>
          <h2 className="mt-2 max-w-xl font-serif text-2xl font-semibold text-white sm:text-3xl">
            Vamos desenhar seu abastecimento em minutos — sem burocracia.
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
            Conte volume, frequência e cidade. Retornamos com proposta clara e prazos realistas.
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          initial={reduce ? false : { opacity: 0, x: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant="primary"
            className="!w-full !border-0 !bg-qd-white !text-qd-purple-800 !shadow-none hover:!bg-qd-green-200 sm:!w-auto qd-stitch"
            href={whatsappHref('Olá! Quero um orçamento rápido.')}
          >
            Solicitar orçamento
          </Button>
          <Button
            variant="secondary"
            className="!w-full !border-2 !border-white !bg-transparent !text-white hover:!bg-white/10 sm:!w-auto qd-stitch"
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp agora
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
