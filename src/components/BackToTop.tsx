import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const showAfter = 450

export function BackToTop() {
  const [visible, setVisible] = useState(() => window.scrollY > showAfter)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > showAfter)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      type="button"
      aria-label="Trở về đầu trang"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <span className="back-to-top-label" aria-hidden="true">Đầu trang</span>
      <ArrowUp size={23} strokeWidth={2.2} aria-hidden="true" />
    </button>
  )
}
