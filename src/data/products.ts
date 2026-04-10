import type { ProductCategory } from './productTypes'

export type { ProductCategory } from './productTypes'
export type Product = {
  id: string
  name: string
  description: string
  category: ProductCategory
  image: string
}

const U = 'https://qdeliciafrutas.com.br/wp-content/uploads'

export const PRODUCT_CATEGORIES: { id: ProductCategory | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'frutas', label: 'Frutas' },
  { id: 'verduras', label: 'Verduras' },
  { id: 'legumes', label: 'Legumes' },
]

/**
 * Catálogo espelhando o bloco “FRUTAS, LEGUMES E VERDURAS” do site original
 * (imagens reais dos arquivos em /wp-content/uploads/2019/…).
 */
export const PRODUCTS: Product[] = [
  /* —— Frutas (mesma ordem visual aproximada do site) —— */
  {
    id: 'bananas',
    name: 'Bananas',
    description: 'Linha completa de bananas com padrão comercial para varejo e food service.',
    category: 'frutas',
    image: `${U}/2019/07/BANANAS.png`,
  },
  {
    id: 'banana-pacovan',
    name: 'Banana pacovan',
    description: 'Textura firme e sabor doce — ideal para consumo in natura.',
    category: 'frutas',
    image: `${U}/2019/07/banana-pacovan.png`,
  },
  {
    id: 'banana-prata',
    name: 'Banana prata',
    description: 'Clássica do dia a dia: maturação estável e ótima aceitação em balcão.',
    category: 'frutas',
    image: `${U}/2019/07/BANANA-PRATA.png`,
  },
  {
    id: 'banana-maca',
    name: 'Banana maçã',
    description: 'Formato arredondado e aroma marcante para vitrine diferenciada.',
    category: 'frutas',
    image: `${U}/2019/07/banana-maçã.png`,
  },
  {
    id: 'banana-da-terra',
    name: 'Banana da terra',
    description: 'Para fritar, purês e preparações regionais com polpa consistente.',
    category: 'frutas',
    image: `${U}/2019/07/banana-da-terra.png`,
  },
  {
    id: 'banana-nanica',
    name: 'Banana nanica',
    description: 'Prática e doce — ótima rotação em mercados e sacolões.',
    category: 'frutas',
    image: `${U}/2019/07/banana-nanica.png`,
  },
  {
    id: 'mamao',
    name: 'Mamão',
    description: 'Mamão selecionado com ponto de maturação alinhado à sua operação.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO.png`,
  },
  {
    id: 'mamao-papaya',
    name: 'Mamão papaya',
    description: 'Calibre e doçura para mesa, sucos e sobremesas — padrão comercial.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO-PAPAYA.png`,
  },
  {
    id: 'mamao-papaya-extra',
    name: 'Mamão papaya extra',
    description: 'Seleção com aparência e ponto de maturação para vitrine premium.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO-PAPAYA.png`,
  },
  {
    id: 'mamao-papaya-especial',
    name: 'Mamão papaya especial',
    description: 'Linha diferenciada para operações que priorizam uniformidade e acabamento.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO-PAPAYA.png`,
  },
  {
    id: 'mamao-papaya-graudo',
    name: 'Mamão papaya graúdo',
    description: 'Frutos com calibre maior — consulte disponibilidade e safra.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO-PAPAYA.png`,
  },
  {
    id: 'mamao-formosa',
    name: 'Mamão formosa',
    description: 'Polpa firme e sabor intenso — excelente para corte e exposição.',
    category: 'frutas',
    image: `${U}/2019/07/MAMÃO-FORMOSA.png`,
  },
  {
    id: 'melao',
    name: 'Melão',
    description: 'Melão com casca e polpa em padrão uniforme para vitrine.',
    category: 'frutas',
    image: `${U}/2019/08/MELÃO.jpg`,
  },
  {
    id: 'melao-espanhol',
    name: 'Melão espanhol',
    description: 'Textura suculenta e aroma doce — forte apelo visual no balcão.',
    category: 'frutas',
    image: `${U}/2019/07/MELÃO-ESPANHOL.png`,
  },
  {
    id: 'melao-portugues',
    name: 'Melão português',
    description: 'Clássico de mesa; consulte sazonalidade e calibres disponíveis.',
    category: 'frutas',
    image: `${U}/2019/07/melão-portugês.png`,
  },
  {
    id: 'melancia',
    name: 'Melancia',
    description: 'Fruta de alto giro no verão — padrão de peso e polpa vermelha.',
    category: 'frutas',
    image: `${U}/2019/07/melancia.jpg`,
  },
  {
    id: 'uva-isabel',
    name: 'Uva Isabel',
    description: 'Uva fina de mesa com sabor marcante — ideal para bandejas e eventos.',
    category: 'frutas',
    image: `${U}/2019/07/uva-isabel.jpg`,
  },
  {
    id: 'pera',
    name: 'Pêra',
    description: 'Polpa suculenta e casca delicada — seleção para prateleira premium.',
    category: 'frutas',
    image: `${U}/2019/07/pêra.jpg`,
  },
  {
    id: 'goiaba',
    name: 'Goiaba',
    description: 'Aroma intenso para consumo in natura, doces e polpas.',
    category: 'frutas',
    image: `${U}/2019/07/goiaba.jpg`,
  },
  {
    id: 'abacaxi',
    name: 'Abacaxi',
    description: 'Coroa e cor dourada — ponto de maturação sob demanda.',
    category: 'frutas',
    image: `${U}/2019/08/abacaxi.jpg`,
  },
  {
    id: 'laranja',
    name: 'Laranja',
    description: 'Suco e mesa: frutas com rendimento e acidez equilibrados.',
    category: 'frutas',
    image: `${U}/2019/08/LARANJA.jpg`,
  },
  {
    id: 'laranja-pera',
    name: 'Laranja pera',
    description: 'Alta produtividade em sucos e excelente aceitação no varejo.',
    category: 'frutas',
    image: `${U}/2019/07/LARANJA-PERA.jpg`,
  },
  {
    id: 'laranja-mimo',
    name: 'Laranja mimo',
    description: 'Tamanho compacto e sabor refrescante — ótima para snack e buffet.',
    category: 'frutas',
    image: `${U}/2019/07/LARANJA-MIMO.jpg`,
  },
  {
    id: 'maca',
    name: 'Maçã',
    description: 'Crocância e durabilidade para exposição e operações de maior giro.',
    category: 'frutas',
    image: `${U}/2019/07/maçã.jpg`,
  },
  /* —— Verduras (accordion “Ver opções” do site) —— */
  {
    id: 'alface',
    name: 'Alface',
    description: 'Folhas hidropônicas ou de campo — consulte variedades da safra.',
    category: 'verduras',
    image: `${U}/2019/08/alface.jpg`,
  },
  {
    id: 'alface-crespa',
    name: 'Alface crespa',
    description: 'Volume e textura para saladas e sanduíches.',
    category: 'verduras',
    image: `${U}/2019/07/ALFACE-CRESPA.jpg`,
  },
  {
    id: 'alface-roxa',
    name: 'Alface roxa',
    description: 'Cor e contraste para pratos autorais e vitrine de saladas.',
    category: 'verduras',
    image: `${U}/2019/07/ALFACE-ROXA.jpg`,
  },
  {
    id: 'alface-lisa',
    name: 'Alface lisa',
    description: 'Folhas largas e macias — clássica de burger e wraps.',
    category: 'verduras',
    image: `${U}/2019/07/ALFACE-LISA.jpg`,
  },
  {
    id: 'alface-americana',
    name: 'Alface americana',
    description: 'Crocante e resistente — mantém bem em embalagem e transporte.',
    category: 'verduras',
    image: `${U}/2019/07/ALFACE-AMERICANA.jpg`,
  },
  /* —— Legumes (imagem em destaque no site) —— */
  {
    id: 'tomate-sweet-grape',
    name: 'Tomate sweet grape',
    description: 'Tomatinho em cacho — snack, saladas e finger food.',
    category: 'legumes',
    image: `${U}/2019/07/tomate-suit-grape.jpg`,
  },
]

export const HOME_PREVIEW_IDS = [
  'banana-prata',
  'uva-isabel',
  'mamao-formosa',
  'melancia',
  'laranja',
  'alface-crespa',
] as const
