import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../../config/site'

export function WhatsAppFloat() {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-qd-purple-700 text-white shadow-[0_14px_40px_-8px_color-mix(in_srgb,var(--color-qd-purple-900)_45%,transparent)] ring-2 ring-white sm:bottom-8 sm:right-8"
      aria-label="Abrir conversa no WhatsApp"
      whileHover={reduce ? undefined : { scale: 1.06 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
    </motion.a>
  )
}
