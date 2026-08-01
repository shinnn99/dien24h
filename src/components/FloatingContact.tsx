import { useEffect, useRef, useState } from 'react'
import { Mail, MessageCircleMore, PhoneCall, X } from 'lucide-react'
import { email, phoneDisplay, phoneHref, zaloHref } from '../data'

export function FloatingContact() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnOutsidePress = (event: PointerEvent) => {
      const root = rootRef.current
      if (!root || root.contains(event.target as Node)) return

      const target = event.target instanceof Element ? event.target : null
      const targetCanReceiveFocus = target?.closest(
        'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"]),[contenteditable="true"]',
      )
      const focusIsInside = root.contains(document.activeElement)
      setOpen(false)
      if (focusIsInside && !targetCanReceiveFocus) triggerRef.current?.focus({ preventScroll: true })
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      triggerRef.current?.focus()
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const actionTabIndex = open ? 0 : -1
  const closeAfterAction = () => {
    setOpen(false)
    window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }))
  }

  return (
    <aside
      ref={rootRef}
      className={`floating-contact${open ? ' is-open' : ''}`}
      aria-label="Liên hệ nhanh"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={triggerRef}
        className="floating-contact-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="floating-contact-menu"
        aria-label={open ? 'Đóng danh sách liên hệ' : 'Mở danh sách liên hệ'}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="floating-contact-trigger-icon" aria-hidden="true">
          {open ? <X size={25} /> : <MessageCircleMore size={25} />}
          {!open && <span className="floating-contact-status" />}
        </span>
        <span className="floating-contact-trigger-copy">
          <strong>{open ? 'Đóng' : 'Liên hệ'}</strong>
          <small>{open ? 'Thu gọn' : 'Liên hệ nhanh'}</small>
        </span>
      </button>

      <div id="floating-contact-menu" className="floating-contact-menu" aria-hidden={!open}>
        <a
          className="floating-contact-action is-phone"
          href={phoneHref}
          tabIndex={actionTabIndex}
          aria-label={`Gọi hotline ${phoneDisplay}`}
          onClick={closeAfterAction}
        >
          <span className="floating-contact-label">
            <strong>Gọi kỹ thuật</strong>
            <small>{phoneDisplay}</small>
          </span>
          <span className="floating-contact-icon" aria-hidden="true">
            <PhoneCall size={23} strokeWidth={2.2} />
          </span>
        </a>

        {zaloHref ? (
          <a
            className="floating-contact-action is-zalo"
            href={zaloHref}
            target="_blank"
            rel="noreferrer"
            tabIndex={actionTabIndex}
            aria-label="Liên hệ Điện 24H qua Zalo"
            onClick={closeAfterAction}
          >
            <span className="floating-contact-label">
              <strong>Zalo</strong>
              <small>Nhắn tin tư vấn</small>
            </span>
            <span className="floating-contact-icon" aria-hidden="true">
              <span className="floating-contact-zalo-mark">Zalo</span>
            </span>
          </a>
        ) : (
          <button
            className="floating-contact-action is-zalo is-unavailable"
            type="button"
            tabIndex={actionTabIndex}
            aria-disabled="true"
            title="Đường dẫn Zalo đang được cập nhật"
          >
            <span className="floating-contact-label">
              <strong>Zalo</strong>
              <small>Đang cập nhật</small>
            </span>
            <span className="floating-contact-icon" aria-hidden="true">
              <span className="floating-contact-zalo-mark">Zalo</span>
            </span>
          </button>
        )}

        <a
          className="floating-contact-action is-email"
          href={`mailto:${email}`}
          tabIndex={actionTabIndex}
          aria-label={`Gửi email đến ${email}`}
          onClick={closeAfterAction}
        >
          <span className="floating-contact-label">
            <strong>Gửi email</strong>
            <small>{email}</small>
          </span>
          <span className="floating-contact-icon" aria-hidden="true">
            <Mail size={23} strokeWidth={2.2} />
          </span>
        </a>

      </div>

    </aside>
  )
}
