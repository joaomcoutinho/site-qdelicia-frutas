/** Mídias oficiais do site qdeliciafrutas.com.br (WordPress uploads) */
const UP = 'https://qdeliciafrutas.com.br/wp-content/uploads'

export const BRAND = {
  logo: `${UP}/2019/07/logo.png`,
  favicon: `${UP}/2019/07/favicon.png`,
  heroStill: `${UP}/2019/08/frutas-na-caixa.png`,
  mapaDistribuicao: `${UP}/2019/07/MAPA.png`,
  caminhao: `${UP}/2019/08/caminhão.png`,
} as const

/** Vídeo institucional (mesmo embed de qdeliciafrutas.com.br) */
export const INSTITUTIONAL_VIDEO_ID = 'oDEzUfK-iU8' as const

/** Página Sobre: fotos reais da operação (WordPress — mesma linha do site original) */
export const ABOUT_GALLERY = [
  `${UP}/2020/02/RIN_6963-1024x683.jpg`,
  `${UP}/2020/02/RIN_6965-1024x731.jpg`,
  `${UP}/2020/02/RIN_6967-1024x683.jpg`,
] as const

/** Campo / lavoura — fundo imersivo (Unsplash, uso alinhado à página de produtos) */
export const RURAL_FIELD_BG =
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2400&q=82'

/** Galeria oficial do site (arquivos RIN_*, pasta 2020/02) */
export const EVENT_PHOTOS = [
  `${UP}/2020/02/RIN_6963-768x512.jpg`,
  `${UP}/2020/02/RIN_6965-768x549.jpg`,
  `${UP}/2020/02/RIN_6967-768x512.jpg`,
  `${UP}/2020/02/RIN_6976-768x512.jpg`,
  `${UP}/2020/02/RIN_6992-768x512.jpg`,
  `${UP}/2020/02/RIN_6952-768x512.jpg`,
  `${UP}/2020/02/RIN_6957-768x512.jpg`,
  `${UP}/2020/02/RIN_6962-768x512.jpg`,
] as const
