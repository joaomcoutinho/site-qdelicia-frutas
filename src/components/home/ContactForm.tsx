import { useState, type FormEvent } from 'react'
import { FadeIn } from '../motion/FadeIn'
import { SITE } from '../../config/site'

function buildMailtoBody(name: string, email: string, description: string) {
  return [`Nome: ${name}`, `E-mail para resposta: ${email}`, '', 'Mensagem:', description].join(
    '\n',
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('idle')
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const description = String(fd.get('description') ?? '').trim()

    if (!name || !email || !description) return

    const subject = encodeURIComponent(`Contato pelo site — ${name}`)
    const body = encodeURIComponent(buildMailtoBody(name, email, description))
    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 border-t border-qd-mist bg-gradient-to-b from-qd-fog via-white to-qd-green-50/30 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
            Contato
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl">
            Fale com a <span className="text-gradient-brand">Q Delícia</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-qd-muted">
            Deixe seus dados e sua mensagem. Ao enviar, abrimos o seu aplicativo de e-mail com tudo
            preenchido — é só confirmar o envio.
          </p>
        </FadeIn>

        <FadeIn className="mt-10" delay={0.06} y={12}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-qd-mist bg-white/95 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.12)] ring-1 ring-qd-purple-100/40 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-qd-ink">
                  Nome
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  placeholder="Seu nome completo"
                  className="mt-2 w-full rounded-xl border border-qd-mist bg-qd-fog/50 px-4 py-3 text-qd-ink shadow-inner outline-none transition-[border-color,box-shadow] placeholder:text-qd-muted focus:border-qd-purple-300 focus:bg-white focus:ring-2 focus:ring-qd-purple-200/60"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-qd-ink">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-xl border border-qd-mist bg-qd-fog/50 px-4 py-3 text-qd-ink shadow-inner outline-none transition-[border-color,box-shadow] placeholder:text-qd-muted focus:border-qd-purple-300 focus:bg-white focus:ring-2 focus:ring-qd-purple-200/60"
                />
              </div>
              <div>
                <label htmlFor="contact-description" className="block text-sm font-semibold text-qd-ink">
                  Descrição
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  minLength={8}
                  rows={5}
                  placeholder="Conte o que precisa: orçamento, volume, cidade, prazo…"
                  className="mt-2 w-full resize-y rounded-xl border border-qd-mist bg-qd-fog/50 px-4 py-3 text-qd-ink shadow-inner outline-none transition-[border-color,box-shadow] placeholder:text-qd-muted focus:border-qd-purple-300 focus:bg-white focus:ring-2 focus:ring-qd-purple-200/60"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-qd-purple-700 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_12px_36px_-12px_color-mix(in_srgb,var(--color-qd-purple-800)_55%,transparent)] transition-[transform,background-color] hover:bg-qd-purple-800 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                Enviar
              </button>
              <p className="text-center text-xs leading-relaxed text-qd-muted sm:text-left">
                Destinatário:{' '}
                <a
                  className="font-medium text-qd-purple-700 underline-offset-2 hover:underline"
                  href={`mailto:${SITE.contactEmail}`}
                >
                  {SITE.contactEmail}
                </a>
              </p>
            </div>

            {status === 'sent' ? (
              <p className="mt-4 text-center text-sm font-medium text-qd-green-800" role="status">
                Se o programa de e-mail não abrir, envie manualmente para {SITE.contactEmail} com os
                mesmos dados.
              </p>
            ) : null}
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
