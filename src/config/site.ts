export const SITE = {
  name: 'Q Delícia Frutas',
  shortName: 'Q Delícia',
  region:
    'Atendimento direto em PE, PB, RN, AL e BA — presença nacional via distribuidores.',
  whatsapp: {
    display: '(81) 3252-1132',
    e164: '558132521132',
    message: 'Olá! Gostaria de solicitar um orçamento.',
  },
  phones: [
    { label: 'Recife / PE', number: '(81) 3252-1132' },
    { label: 'São Vicente Ferrer / PE', number: '(81) 3655-1198' },
  ],
  history:
    'Há mais de duas décadas, em São Vicente Ferrer, começamos plantando e colhendo com cuidado artesanal. Hoje levamos frutas, verduras e legumes com o mesmo padrão de excelência para varejo, food service e grandes eventos.',
  /** E-mail exibido no formulário de contato (mailto). Ajuste se necessário. */
  contactEmail: 'contato@qdeliciafrutas.com.br',
} as const

export function whatsappHref(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? SITE.whatsapp.message)
  return `https://wa.me/${SITE.whatsapp.e164}?text=${text}`
}
