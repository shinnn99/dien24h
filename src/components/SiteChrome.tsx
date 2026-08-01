import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Headset, Mail, MapPin, Menu, PhoneCall, X } from 'lucide-react'
import type { Navigate } from '../App'
import { address, email, phoneDisplay, phoneHref } from '../data'
import { SiteLink } from './SiteLink'

type DropdownKey = 'services' | 'products'

const nav = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Dịch vụ', dropdown: 'services' },
  { label: 'Sản phẩm', dropdown: 'products' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' },
] as const

const dropdownLinks: Record<DropdownKey, { label: string; href: string }[]> = {
  services: [
    { label: 'Đường dây & trạm biến áp', href: '/dich-vu/tram-bien-ap' },
    { label: 'Sửa chữa điện 24H', href: '/dich-vu/sua-chua-dien-24h' },
    { label: 'Thiết bị điện 24H', href: '/dich-vu/dien-cong-nghiep' },
    { label: 'Solar 24H', href: '/dich-vu/solar' },
    { label: 'Chống sét 24H', href: '/dich-vu/chong-set' },
    { label: 'Máy phát điện 24H', href: '/dich-vu/may-phat-dien' },
  ],
  products: [
    { label: 'Tất cả sản phẩm', href: '/san-pham' },
    { label: 'Máy biến áp', href: '/san-pham/may-bien-ap' },
    { label: 'Dây cáp điện', href: '/san-pham' },
    { label: 'Thiết bị đóng cắt', href: '/san-pham' },
    { label: 'Tủ điện & tủ tụ bù', href: '/san-pham' },
    { label: 'Solar', href: '/san-pham' },
    { label: 'Thiết bị chống sét', href: '/san-pham' },
  ],
}

export function SiteHeader({ navigate, path }: { navigate: Navigate; path: string }) {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Partial<Record<DropdownKey, HTMLButtonElement | null>>>({})

  const closeNavigation = () => {
    setOpen(false)
    setActiveDropdown(null)
  }

  useEffect(() => closeNavigation(), [path])

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null)
        setOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || (!activeDropdown && !open)) return
      const trigger = activeDropdown
        ? triggerRefs.current[activeDropdown]
        : headerRef.current?.querySelector<HTMLButtonElement>('.chrome-menu')
      setActiveDropdown(null)
      setOpen(false)
      trigger?.focus()
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeDropdown, open])

  return <>
    <div className="chrome-topbar"><div className="chrome-container"><span><MapPin size={12} /> {address}</span><span><Mail size={12} /> {email}</span><b><Headset size={12} /> Tiếp nhận sự cố 24/7, cả ngày lẫn đêm</b></div></div>
    <header className="chrome-header" ref={headerRef}><div className="chrome-container chrome-nav">
      <SiteLink className="chrome-logo" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink>
      <button
        className="chrome-menu"
        onClick={() => {
          setOpen(!open)
          if (open) setActiveDropdown(null)
        }}
        aria-expanded={open}
        aria-controls="chrome-primary-navigation"
        aria-label={open ? 'Đóng menu' : 'Mở menu'}
      >{open ? <X /> : <Menu />}</button>
      <nav id="chrome-primary-navigation" className={open ? 'open' : ''} aria-label="Điều hướng chính">
        {nav.map(item => {
          if (!('dropdown' in item)) {
            return <SiteLink key={item.label} href={item.href} navigate={navigate} onNavigate={closeNavigation}>{item.label}</SiteLink>
          }

          const dropdown = item.dropdown as DropdownKey
          const isOpen = activeDropdown === dropdown
          return <div
            className={`chrome-nav-item ${isOpen ? 'is-open' : ''}`}
            key={item.label}
            onPointerEnter={event => {
              if (event.pointerType === 'mouse') setActiveDropdown(dropdown)
            }}
            onPointerLeave={event => {
              if (event.pointerType === 'mouse') setActiveDropdown(null)
            }}
            onBlur={event => {
              if (!event.currentTarget.contains(event.relatedTarget)) setActiveDropdown(null)
            }}
          >
            <button
              ref={element => { triggerRefs.current[dropdown] = element }}
              className="chrome-nav-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls={`chrome-dropdown-${dropdown}`}
              onClick={() => setActiveDropdown(isOpen ? null : dropdown)}
              onKeyDown={event => {
                if (event.key !== 'ArrowDown') return
                event.preventDefault()
                setActiveDropdown(dropdown)
                requestAnimationFrame(() => {
                  document.querySelector<HTMLAnchorElement>(`#chrome-dropdown-${dropdown} a`)?.focus()
                })
              }}
            >
              {item.label}<ChevronDown size={14} />
            </button>
            <div className="chrome-dropdown" id={`chrome-dropdown-${dropdown}`}>
              {dropdownLinks[dropdown].map(link => (
                <SiteLink key={link.label} href={link.href} navigate={navigate} onNavigate={closeNavigation}>{link.label}</SiteLink>
              ))}
            </div>
          </div>
        })}
      </nav>
      <a className="chrome-phone" href={phoneHref}><PhoneCall size={18} /> Gọi xử lý sự cố</a>
    </div></header>
  </>
}

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  const primaryLinks = [
    ['Trang chủ', '/'],
    ['Sản phẩm', '/san-pham'],
    ['Giới thiệu', '/gioi-thieu'],
    ['Liên hệ', '/lien-he'],
  ]

  return <footer className="chrome-footer">
    <div className="chrome-container chrome-footer-grid">
      <div className="chrome-footer-brand">
        <SiteLink className="chrome-logo footer-logo-v2" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink>
        <p className="chrome-footer-summary">Giải pháp điện công nghiệp và dân dụng tại Biên Hòa – Đồng Nai.</p>
        <div className="chrome-footer-contact">
          <a href={`mailto:${email}`}><Mail size={16} /><span>{email}</span></a>
          <span><MapPin size={16} /><span>{address}</span></span>
        </div>
      </div>

      <nav className="chrome-footer-nav chrome-footer-links" aria-label="Liên kết cuối trang">
        <h4>LIÊN KẾT</h4>
        {primaryLinks.map(([title, href]) => <SiteLink key={title} href={href} navigate={navigate}>{title}</SiteLink>)}
      </nav>

      <nav className="chrome-footer-nav chrome-footer-services" aria-label="Dịch vụ nổi bật">
        <h4>DỊCH VỤ</h4>
        {dropdownLinks.services.map(link => <SiteLink key={link.label} href={link.href} navigate={navigate}>{link.label}</SiteLink>)}
      </nav>

      <div className="chrome-footer-support">
        <h4>HỖ TRỢ KỸ THUẬT</h4>
        <p>Tiếp nhận sự cố điện 24/7 tại Đồng Nai.</p>
        <a className="chrome-footer-phone" href={phoneHref}>
          <PhoneCall size={28} />
          <span><small>Gọi kỹ thuật ngay</small><b>{phoneDisplay}</b></span>
        </a>
      </div>
    </div>

    <div className="chrome-container chrome-copyright"><span>© 2026 Dien24h.vn.</span></div>
  </footer>
}
