import type { ProductCategory } from './productTypes'

/**
 * Estrutura tipo “VER OPÇÕES” do site original: família → itens planos ou submenu (ex.: tipos de mamão papaya).
 * Ajuste labels/ids conforme o catálogo oficial evoluir.
 */
export type NavLeaf = { kind: 'product'; productId: string }

export type NavSubmenu = {
  kind: 'submenu'
  /** Rótulo do submenu suspenso (ex.: Mamão papaya) */
  label: string
  items: NavLeaf[]
}

export type NavEntry = NavLeaf | NavSubmenu

export type ProductFamily = {
  id: string
  title: string
  category: ProductCategory
  entries: NavEntry[]
}

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: 'bananas',
    title: 'Bananas',
    category: 'frutas',
    entries: [
      { kind: 'product', productId: 'bananas' },
      { kind: 'product', productId: 'banana-pacovan' },
      { kind: 'product', productId: 'banana-prata' },
      { kind: 'product', productId: 'banana-maca' },
      { kind: 'product', productId: 'banana-da-terra' },
      { kind: 'product', productId: 'banana-nanica' },
    ],
  },
  {
    id: 'mamao',
    title: 'Mamão',
    category: 'frutas',
    entries: [
      { kind: 'product', productId: 'mamao' },
      {
        kind: 'submenu',
        label: 'Mamão papaya',
        items: [
          { kind: 'product', productId: 'mamao-papaya' },
          { kind: 'product', productId: 'mamao-papaya-extra' },
          { kind: 'product', productId: 'mamao-papaya-especial' },
          { kind: 'product', productId: 'mamao-papaya-graudo' },
        ],
      },
      { kind: 'product', productId: 'mamao-formosa' },
    ],
  },
  {
    id: 'melao',
    title: 'Melão',
    category: 'frutas',
    entries: [
      { kind: 'product', productId: 'melao' },
      { kind: 'product', productId: 'melao-espanhol' },
      { kind: 'product', productId: 'melao-portugues' },
    ],
  },
  {
    id: 'laranja',
    title: 'Laranja',
    category: 'frutas',
    entries: [
      { kind: 'product', productId: 'laranja' },
      { kind: 'product', productId: 'laranja-pera' },
      { kind: 'product', productId: 'laranja-mimo' },
    ],
  },
  {
    id: 'outras-frutas',
    title: 'Outras frutas',
    category: 'frutas',
    entries: [
      { kind: 'product', productId: 'melancia' },
      { kind: 'product', productId: 'uva-isabel' },
      { kind: 'product', productId: 'pera' },
      { kind: 'product', productId: 'goiaba' },
      { kind: 'product', productId: 'abacaxi' },
      { kind: 'product', productId: 'maca' },
    ],
  },
  {
    id: 'alface',
    title: 'Alface',
    category: 'verduras',
    entries: [
      { kind: 'product', productId: 'alface' },
      { kind: 'product', productId: 'alface-crespa' },
      { kind: 'product', productId: 'alface-roxa' },
      { kind: 'product', productId: 'alface-lisa' },
      { kind: 'product', productId: 'alface-americana' },
    ],
  },
  {
    id: 'tomate',
    title: 'Tomate sweet grape',
    category: 'legumes',
    entries: [{ kind: 'product', productId: 'tomate-sweet-grape' }],
  },
]

export function familiesForCategory(
  filter: ProductCategory | 'todos',
): ProductFamily[] {
  if (filter === 'todos') return PRODUCT_FAMILIES
  return PRODUCT_FAMILIES.filter((f) => f.category === filter)
}

/** Em “Todos”, agrupa famílias por categoria com título de seção (como no site original). */
export function productCatalogSections(
  filter: ProductCategory | 'todos',
): { heading: string | null; families: ProductFamily[] }[] {
  if (filter !== 'todos') {
    return [{ heading: null, families: familiesForCategory(filter) }]
  }
  const out: { heading: string | null; families: ProductFamily[] }[] = []
  const fr = PRODUCT_FAMILIES.filter((f) => f.category === 'frutas')
  const ve = PRODUCT_FAMILIES.filter((f) => f.category === 'verduras')
  const le = PRODUCT_FAMILIES.filter((f) => f.category === 'legumes')
  if (fr.length) out.push({ heading: 'Frutas', families: fr })
  if (ve.length) out.push({ heading: 'Verduras', families: ve })
  if (le.length) out.push({ heading: 'Legumes', families: le })
  return out
}

export function countFamilyProducts(family: ProductFamily): number {
  let n = 0
  for (const e of family.entries) {
    if (e.kind === 'product') n += 1
    else n += e.items.length
  }
  return n
}
