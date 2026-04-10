import { FadeIn } from '../motion/FadeIn'

const steps = [
  {
    title: 'Selecionamos os produtos',
    body: 'Escolhemos com critério para reduzir desperdício, ganhar tempo na operação e entregar o que realmente vende no balcão.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Seleção de frutas frescas em ambiente de mercado',
  },
  {
    title: 'Embalamos cuidadosamente',
    body: 'Monoblocos com padrão rigoroso de higiene e conservação — do armazém à sua porta com o mesmo cuidado.',
    image:
      'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Embalagens e organização de produtos para distribuição',
  },
  {
    title: 'Entregamos rapidamente',
    body: 'Prazos combinados, frota higienizada e rotas pensadas para o seu giro — sem surpresa na janela de entrega.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Logística e entrega de mercadorias',
  },
] as const

export function QualityProcess() {
  return (
    <section
      id="processo-qualidade"
      className="scroll-mt-24 border-b border-qd-mist bg-qd-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
            Processo de qualidade
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-qd-ink sm:text-4xl">
            Do cuidado na seleção à{' '}
            <span className="text-gradient-brand">entrega no prazo</span>.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-qd-muted sm:text-lg">
            Três etapas claras — como no melhor hortifruti: imagem forte, mensagem direta.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {steps.map((step, i) => {
            const imageOnLeft = i % 2 === 0
            return (
              <FadeIn key={step.title} delay={0.05 * i} y={16}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
                  <div
                    className={
                      imageOnLeft
                        ? 'md:order-1'
                        : 'md:order-2'
                    }
                  >
                    <figure className="overflow-hidden rounded-2xl border border-qd-mist bg-qd-fog shadow-sm ring-1 ring-black/[0.04]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="aspect-[4/3] w-full object-cover md:aspect-[5/4] lg:min-h-[320px]"
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        width={1200}
                        height={960}
                      />
                    </figure>
                  </div>
                  <div
                    className={
                      imageOnLeft
                        ? 'md:order-2 md:pl-2 lg:pl-6'
                        : 'md:order-1 md:pr-2 lg:pr-6'
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-qd-green-700">
                      Etapa {i + 1} de 3
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-qd-ink sm:text-[1.65rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-qd-muted sm:text-base sm:leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
