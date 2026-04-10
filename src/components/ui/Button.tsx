import type { ComponentProps, ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color,color,border-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-qd-purple-700 disabled:pointer-events-none disabled:opacity-45'

/** Assinatura da marca: CTAs principais em roxo forte (#6A1B9A). */
const variants = {
  primary:
    'bg-qd-purple-700 text-white shadow-[0_12px_36px_-12px_color-mix(in_srgb,var(--color-qd-purple-800)_55%,transparent)] hover:bg-qd-purple-800 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border-2 border-qd-purple-700 bg-qd-white text-qd-purple-800 hover:bg-qd-purple-50 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'border border-transparent bg-transparent text-qd-ink hover:bg-qd-fog',
  whatsapp:
    'bg-qd-purple-700 text-white shadow-[0_12px_36px_-12px_color-mix(in_srgb,var(--color-qd-purple-800)_50%,transparent)] hover:bg-qd-purple-800 hover:-translate-y-0.5 active:translate-y-0',
} as const

type Variant = keyof typeof variants

type BaseProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<'a'>, 'className' | 'children'> & {
    href: string
  }

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<'button'>, 'className' | 'children'> & {
    href?: undefined
  }

export type ButtonProps = ButtonAsLink | ButtonAsButton

export function Button(props: ButtonProps) {
  if ('href' in props && props.href) {
    const { variant = 'primary', className = '', children, href, ...anchorRest } = props as ButtonAsLink
    const cls = `${base} ${variants[variant]} ${className}`.trim()
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    )
  }

  const p = props as ButtonAsButton
  const { variant = 'primary', className = '', children, type, ...buttonRest } = p
  const cls = `${base} ${variants[variant]} ${className}`.trim()
  const btnType: 'button' | 'submit' | 'reset' =
    type === 'submit' || type === 'reset' ? type : 'button'
  return (
    <button type={btnType} className={cls} {...buttonRest}>
      {children}
    </button>
  )
}
