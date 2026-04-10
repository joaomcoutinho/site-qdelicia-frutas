import { useEffect } from 'react'
import { FadeIn } from '../components/motion/FadeIn'
import { ABOUT_GALLERY, INSTITUTIONAL_VIDEO_ID, RURAL_FIELD_BG } from '../config/assets'
import { SITE } from '../config/site'

const P1 =
  'Foi em São Vicente Ferrer, há cerca de 22 anos, que começou a nossa história: plantando e colhendo, de forma artesanal, bananas e uvas. A boa qualidade de nossos produtos logo nos levaram à comercialização e distribuição na região metropolitana do Recife.'

const P2 =
  'Com o passar dos anos, expandimos nossa atuação no mercado e ampliamos o nosso mix de produtos, trabalhando atualmente com frutas, verduras e hortaliças. Hoje, atendemos diretamente os estados de Pernambuco, Paraíba, Rio Grande do Norte, Alagoas e Bahia. Contudo, nos fazemos presente em outros estados do país por meio de nossos distribuidores!'

const galleryLabels = [
  'Produção e cuidado na lavoura',
  'Origem e expansão',
  'Da roça para a operação',
] as const

export function AboutPage() {
  useEffect(() => {
    document.title = `Nossa história — ${SITE.shortName}`
  }, [])

  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 min-h-full" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RURAL_FIELD_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-qd-green-800/25 via-transparent to-qd-purple-900/20" />
        <div className="absolute inset-0 qd-grain opacity-[0.12]" />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:max-w-4xl lg:py-20">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-qd-green-300">
            Nossa história
          </p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.65rem]">
            Raiz no campo, presença em{' '}
            <span className="text-gradient-brand [text-shadow:none]">todo o Nordeste</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
            Conheça a trajetória da {SITE.name} — do plantio artesanal à distribuição que leva frescor
            à mesa e à operação.
          </p>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.06} y={16}>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-black/35 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-[2px]">
            <div className="relative aspect-video w-full">
              <iframe
                title="Vídeo institucional Q Delícia Frutas"
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${INSTITUTIONAL_VIDEO_ID}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-white/65">
            Vídeo institucional — mesmo conteúdo do site original.
          </p>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.1} y={16}>
          <div className="rounded-[1.75rem] border border-white/25 bg-white/95 p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.35)] ring-1 ring-qd-green-100/50 backdrop-blur-md sm:p-9 lg:p-10">
            <div className="space-y-6 text-center text-base leading-relaxed text-qd-ink sm:text-[1.05rem] sm:leading-[1.75rem]">
              <p>{P1}</p>
              <p>{P2}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {ABOUT_GALLERY.map((src, i) => (
                <figure
                  key={src}
                  className="group overflow-hidden rounded-2xl border border-qd-mist bg-qd-fog shadow-inner ring-1 ring-qd-purple-100/30"
                >
                  <div className="aspect-square overflow-hidden sm:aspect-[4/3]">
                    <img
                      src={src}
                      alt={galleryLabels[i]}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="border-t border-qd-mist bg-white/90 px-3 py-2.5 text-center text-xs font-medium text-qd-muted">
                    {galleryLabels[i]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </FadeIn>
      </article>
    </div>
  )
}
