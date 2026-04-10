import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  photos: readonly string[]
}

function GalleryFigure({
  src,
  index,
  openAt,
  reduce,
  className,
  imgClassName,
  priority,
}: {
  src: string
  index: number
  openAt: (i: number) => void
  reduce: boolean
  className: string
  imgClassName?: string
  priority: boolean
}) {
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.42,
        delay: reduce ? 0 : Math.min(index, 8) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative cursor-pointer overflow-hidden bg-qd-fog shadow-md ring-1 ring-qd-mist/90 md:h-full ${className}`}
    >
      <button
        type="button"
        className="absolute inset-0 block text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-qd-purple-600"
        onClick={() => openAt(index)}
        aria-label="Ampliar foto da galeria"
      >
        <img
          src={src}
          alt=""
          className={`h-full w-full object-cover transition-[transform] duration-300 ease-out group-hover:scale-[1.02] ${imgClassName ?? ''}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-qd-ink/45 via-qd-ink/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-qd-purple-400)_30%,transparent)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_2px_color-mix(in_srgb,var(--color-qd-purple-500)_50%,transparent),0_0_28px_-6px_color-mix(in_srgb,var(--color-qd-purple-600)_22%,transparent)]"
          aria-hidden
        />
      </button>
    </motion.figure>
  )
}

export function EventGallery({ photos }: Props) {
  const reduce = useReducedMotion() ?? false
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openAt = useCallback((index: number) => setLightbox(index), [])
  const close = useCallback(() => setLightbox(null), [])

  const goPrev = useCallback(() => {
    setLightbox((i) => {
      if (i === null || photos.length === 0) return null
      return (i - 1 + photos.length) % photos.length
    })
  }, [photos.length])

  const goNext = useCallback(() => {
    setLightbox((i) => {
      if (i === null || photos.length === 0) return null
      return (i + 1) % photos.length
    })
  }, [photos.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, close, goPrev, goNext])

  if (photos.length === 0) return null

  const hero = photos[0]
  const rest = photos.length > 3 ? photos.slice(3) : []

  return (
    <section className="relative mt-20 sm:mt-24" aria-labelledby="event-gallery-heading">
      <div
        className="pointer-events-none absolute inset-0 -mx-4 rounded-[2rem] sm:-mx-6"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 85% 70% at 10% 20%, color-mix(in srgb, var(--color-qd-green-200) 42%, transparent), transparent 55%),
            radial-gradient(ellipse 75% 55% at 92% 75%, color-mix(in srgb, var(--color-qd-purple-200) 38%, transparent), transparent 52%),
            linear-gradient(165deg, color-mix(in srgb, var(--color-qd-green-50) 88%, transparent), transparent 42%, color-mix(in srgb, var(--color-qd-purple-50) 55%, transparent))
          `,
        }}
      />
      <div
        className="pointer-events-none absolute -left-16 top-1/4 h-56 w-56 rounded-full bg-gradient-to-br from-qd-green-300/25 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tl from-qd-purple-300/20 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative px-1 sm:px-0">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
            Na rua · no PDV · com o cliente
          </p>
          <h2
            id="event-gallery-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl lg:text-[2.65rem] lg:leading-tight"
          >
            Levando frescor para perto das{' '}
            <span className="text-gradient-brand">pessoas</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-qd-muted sm:text-lg">
            Presença real em eventos, ações e pontos de venda — o trabalho da equipe em campo, sem
            filtros.
          </p>
        </motion.header>

        <div className="mt-10 sm:mt-12">
          {/* Bloco superior: posições explícitas no grid = sem retângulo vazio */}
          {photos.length === 1 ? (
            <GalleryFigure
              src={hero}
              index={0}
              openAt={openAt}
              reduce={reduce}
              priority
              className="min-h-[240px] rounded-[1.35rem] shadow-lg ring-qd-green-200/50 sm:min-h-[300px] lg:rounded-2xl"
            />
          ) : photos.length === 2 ? (
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:items-stretch">
              <GalleryFigure
                src={photos[0]}
                index={0}
                openAt={openAt}
                reduce={reduce}
                priority
                className="min-h-[220px] rounded-[1.35rem] shadow-lg ring-qd-green-200/60 md:col-span-7 md:min-h-[280px] lg:min-h-[300px] lg:rounded-2xl"
              />
              <GalleryFigure
                src={photos[1]}
                index={1}
                openAt={openAt}
                reduce={reduce}
                priority
                className="min-h-[220px] rounded-[1.25rem] ring-qd-purple-100/60 md:col-span-5 md:min-h-[280px] lg:min-h-[300px] lg:rounded-xl"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2 md:items-stretch">
              <GalleryFigure
                src={photos[0]}
                index={0}
                openAt={openAt}
                reduce={reduce}
                priority
                className="min-h-[220px] rounded-[1.35rem] shadow-lg ring-qd-green-200/60 md:col-span-7 md:row-span-2 md:col-start-1 md:row-start-1 md:min-h-[300px] lg:min-h-[340px] lg:rounded-2xl"
              />
              <GalleryFigure
                src={photos[1]}
                index={1}
                openAt={openAt}
                reduce={reduce}
                priority
                className="min-h-[160px] rounded-[1.2rem] ring-qd-purple-100/60 md:col-span-5 md:col-start-8 md:row-start-1 md:min-h-0 md:rounded-xl"
              />
              <GalleryFigure
                src={photos[2]}
                index={2}
                openAt={openAt}
                reduce={reduce}
                priority={false}
                className="min-h-[160px] rounded-[1.2rem] ring-qd-purple-100/60 md:col-span-5 md:col-start-8 md:row-start-2 md:min-h-0 md:rounded-xl"
              />
            </div>
          )}

          {rest.length > 0 ? (
            <div className="mt-3 columns-1 gap-0 sm:mt-4 sm:columns-2 sm:gap-x-4 lg:columns-3">
              {rest.map((src, k) => {
                const index = 3 + k
                return (
                  <div key={`rest-${src}-${k}`} className="mb-3 break-inside-avoid sm:mb-4">
                    <GalleryFigure
                      src={src}
                      index={index}
                      openAt={openAt}
                      reduce={reduce}
                      priority={false}
                      className="rounded-xl"
                    />
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>

      {lightbox !== null && photos[lightbox] ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-qd-ink/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria ampliada"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={close}
            aria-label="Fechar"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
          {photos.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 z-[1] -translate-y-1/2 rounded-full bg-white/12 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/22 md:left-6"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={2} />
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 z-[1] -translate-y-1/2 rounded-full bg-white/12 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/22 md:right-6"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={2} />
              </button>
            </>
          ) : null}
          <img
            src={photos[lightbox]}
            alt=""
            className="max-h-[min(90dvh,900px)] max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/15"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
