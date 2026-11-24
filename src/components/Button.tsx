import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

const base = [
  'inline-flex items-center justify-center gap-2',
  'border border-foreground bg-foreground text-background',
  'transition-colors hover:bg-background hover:text-foreground',
].join(' ')

type SharedProps = {
  children: ReactNode
  className?: string
}

/**
 * Renders an `<a>` when `href` is provided, a `<button>` otherwise.
 */
export type ButtonProps = SharedProps &
  (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        'href' | 'className' | 'children'
      >)
    | ({ href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        'className' | 'children'
      >)
  )

export function Button(props: ButtonProps) {
  const classes = props.className ? `${base} ${props.className}` : base

  if (props.href !== undefined) {
    const { children, ...rest } = props

    return (
      <a {...rest} href={props.href} className={classes}>
        {children}
      </a>
    )
  }

  const { children, ...rest } = props

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}
