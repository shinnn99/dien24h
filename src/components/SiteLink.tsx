import type { MouseEvent, ReactNode } from 'react'
import type { Navigate } from '../App'

export function SiteLink({ href, navigate, children, className, onNavigate }: { href: string; navigate: Navigate; children: ReactNode; className?: string; onNavigate?: () => void }) {
  const click = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(href)
    onNavigate?.()
  }
  return <a href={href} onClick={click} className={className}>{children}</a>
}
