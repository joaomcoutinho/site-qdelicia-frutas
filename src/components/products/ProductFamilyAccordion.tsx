import { ChevronDown } from 'lucide-react'
import { useMemo } from 'react'
import type { Product } from '../../data/products'
import {
  type ProductFamily,
  countFamilyProducts,
} from '../../data/productFamilies'
import { ProductCatalogCard } from './ProductCatalogCard'

type Chunk =
  | { type: 'products'; ids: string[] }
  | { type: 'submenu'; label: string; ids: string[] }

function buildChunks(family: ProductFamily): Chunk[] {
  const chunks: Chunk[] = []
  for (const e of family.entries) {
    if (e.kind === 'product') {
      const last = chunks[chunks.length - 1]
      if (last?.type === 'products') last.ids.push(e.productId)
      else chunks.push({ type: 'products', ids: [e.productId] })
    } else {
      chunks.push({
        type: 'submenu',
        label: e.label,
        ids: e.items.map((x) => x.productId),
      })
    }
  }
  return chunks
}

type Props = {
  family: ProductFamily
  productById: Record<string, Product | undefined>
  /** Painel verde fazenda (catálogo sobre foto de campo) */
  variant?: 'default' | 'farmPanel'
}

export function ProductFamilyAccordion({
  family,
  productById,
  variant = 'default',
}: Props) {
  const chunks = useMemo(() => buildChunks(family), [family])
  const total = countFamilyProducts(family)
  const farm = variant === 'farmPanel'

  return (
    <details
      className={
        farm
          ? 'group rounded-2xl border border-qd-green-200/90 bg-gradient-to-br from-white via-white to-qd-green-50/50 shadow-sm ring-1 ring-qd-green-100/80 open:border-qd-purple-200/70 open:shadow-md open:ring-qd-purple-100/50'
          : 'group rounded-2xl border border-qd-mist bg-white shadow-sm ring-1 ring-black/[0.03] open:border-qd-purple-200/80 open:shadow-md open:ring-qd-purple-100/60'
      }
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 text-left">
          <span
            className={
              farm
                ? 'font-serif text-lg font-semibold text-qd-ink sm:text-xl'
                : 'font-serif text-lg font-semibold text-qd-ink sm:text-xl'
            }
          >
            {family.title}
          </span>
          <span
            className={
              farm
                ? 'mt-0.5 block text-xs font-medium uppercase tracking-[0.18em] text-qd-muted'
                : 'mt-0.5 block text-xs font-medium uppercase tracking-[0.18em] text-qd-muted'
            }
          >
            Ver opções · {total} {total === 1 ? 'item' : 'itens'}
          </span>
        </div>
        <ChevronDown
          className={
            farm
              ? 'h-5 w-5 shrink-0 text-qd-purple-700 transition-transform duration-200 group-open:rotate-180'
              : 'h-5 w-5 shrink-0 text-qd-purple-700 transition-transform duration-200 group-open:rotate-180'
          }
          strokeWidth={2}
          aria-hidden
        />
      </summary>

      <div
        className={
          farm
            ? 'border-t border-qd-green-100/90 bg-qd-fog/40 px-4 py-5 sm:px-5'
            : 'border-t border-qd-mist/90 px-4 py-5 sm:px-5'
        }
      >
        <div className="space-y-6">
          {chunks.map((chunk, idx) => {
            if (chunk.type === 'products') {
              return (
                <div
                  key={`p-${idx}`}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {chunk.ids.map((id) => {
                    const p = productById[id]
                    return p ? <ProductCatalogCard key={id} product={p} /> : null
                  })}
                </div>
              )
            }

            return (
              <details
                key={`s-${chunk.label}`}
                className={
                  farm
                    ? 'group/sub overflow-hidden rounded-xl border border-qd-purple-100/90 bg-white open:border-qd-purple-200/80 open:shadow-sm'
                    : 'group/sub overflow-hidden rounded-xl border border-qd-purple-200/70 bg-gradient-to-br from-qd-purple-50/50 to-qd-green-50/30 open:border-qd-purple-300/80 open:shadow-sm'
                }
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold sm:text-[15px] [&::-webkit-details-marker]:hidden">
                  <span className="text-qd-purple-900">
                    {chunk.label}
                  </span>
                  <span
                    className={
                      farm
                        ? 'flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-qd-purple-700/90'
                        : 'flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-qd-purple-700/90'
                    }
                  >
                    {chunk.ids.length} tipos
                    <ChevronDown
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-open/sub:rotate-180"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                </summary>
                <div
                  className={
                    farm
                      ? 'border-t border-qd-mist/90 bg-qd-fog/50 px-3 py-4 sm:px-4'
                      : 'border-t border-qd-purple-100/80 bg-white/60 px-3 py-4 sm:px-4'
                  }
                >
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {chunk.ids.map((id) => {
                      const p = productById[id]
                      return p ? <ProductCatalogCard key={id} product={p} /> : null
                    })}
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </details>
  )
}
