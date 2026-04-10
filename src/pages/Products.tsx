import { useMemo, useState } from 'react'
import { PRODUCT_CATEGORIES, PRODUCTS, type Product } from '../data/products'
import { productCatalogSections } from '../data/productFamilies'
import { FadeIn } from '../components/motion/FadeIn'
import { Button } from '../components/ui/Button'
import { ProductFamilyAccordion } from '../components/products/ProductFamilyAccordion'
import { whatsappHref } from '../config/site'

type FilterId = (typeof PRODUCT_CATEGORIES)[number]['id']

/** Lavoura / fazenda — vista aérea de glebas agrícolas (sem montanhas; Unsplash). */
const PRODUCTS_RURAL_BG =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=82'

export function ProductsPage() {
  const [filter, setFilter] = useState<FilterId>('todos')

  const productById = useMemo(
    () => Object.fromEntries(PRODUCTS.map((p) => [p.id, p])) as Record<string, Product>,
    [],
  )

  const sections = useMemo(() => productCatalogSections(filter), [filter])

  return (
    <div className="relative min-h-svh overflow-x-hidden">
      {/* Cenário bem rural: glebas, estrada de chão, produção — não paisagem de montanha */}
      <div className="pointer-events-none absolute inset-0 min-h-full" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PRODUCTS_RURAL_BG})` }}
        />
        {/* Foto da fazenda bem visível — só vinheta leve para leitura do topo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-tr from-qd-green-700/15 via-transparent to-qd-purple-900/12" />
        <div className="absolute inset-0 qd-grain opacity-[0.1]" />
      </div>

      <section className="relative z-10 border-b border-white/15 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-green-200">
              Catálogo
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Produtos com cara de vitrine — e alma de operação.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/92 sm:text-lg">
              Abra cada linha em{' '}
              <strong className="font-semibold text-qd-green-100">Ver opções</strong> para ver os tipos
              (como mamão papaya, bananas, alface, etc.). Quer um mix sob medida? Fale no WhatsApp.
            </p>
          </FadeIn>

          <FadeIn className="mt-8 flex flex-wrap gap-2" delay={0.05}>
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = filter === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-[background-color,border-color,color,box-shadow,transform] duration-300',
                    active
                      ? 'border-qd-purple-600 bg-qd-purple-700 text-white shadow-[0_10px_28px_-12px_color-mix(in_srgb,var(--color-qd-purple-900)_45%,transparent)]'
                      : 'border-white/35 bg-white/12 text-white/95 backdrop-blur-sm hover:border-white/55 hover:bg-white/22',
                  ].join(' ')}
                >
                  {cat.label}
                </button>
              )
            })}
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-2 sm:px-6 sm:pb-20">
        {/* Painel alinhado ao restante do site: branco + toque verde/roxo */}
        <div className="rounded-[1.75rem] border border-qd-green-200/90 bg-gradient-to-b from-white via-qd-green-50/40 to-qd-purple-50/25 p-5 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.14)] ring-1 ring-qd-purple-100/40 backdrop-blur-[1px] sm:rounded-[2.25rem] sm:p-8 md:p-10">
          <div className="space-y-10 sm:space-y-12">
            {sections.map((section) => (
              <div key={section.heading ?? 'all'} className="space-y-5">
                {section.heading ? (
                  <FadeIn>
                    <h2 className="border-b border-qd-green-200/90 pb-2 font-serif text-2xl font-semibold text-qd-ink sm:text-3xl">
                      {section.heading}
                    </h2>
                  </FadeIn>
                ) : null}
                <div className="space-y-4">
                  {section.families.map((family) => (
                    <ProductFamilyAccordion
                      key={family.id}
                      family={family}
                      productById={productById}
                      variant="farmPanel"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <FadeIn className="mt-14 rounded-[1.75rem] border border-qd-purple-200/70 bg-white/95 p-8 text-center shadow-inner ring-1 ring-qd-mist/80 sm:mt-16 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-qd-purple-700">
              Mix sob medida
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-qd-ink sm:text-3xl">
              Não encontrou o que precisa?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-qd-muted sm:text-base">
              Trabalhamos com sazonalidade e pedidos corporativos. Envie sua lista — montamos a proposta
              com prazo e condições claras.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="primary" href={whatsappHref('Olá! Quero montar um mix personalizado.')}>
                Enviar lista no WhatsApp
              </Button>
              <Button variant="secondary" href="tel:+558132521132">
                Ligar Recife
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
