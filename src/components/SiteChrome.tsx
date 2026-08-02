import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AtSign, ChevronDown, ChevronRight, Headset, Mail, MapPin, Menu, PhoneCall, X } from 'lucide-react'
import type { Navigate } from '../App'
import { address, email, phoneDisplay, phoneHref, zaloHref } from '../data'
import { SiteLink } from './SiteLink'

type DropdownKey = 'services' | 'products'

const nav = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Dịch vụ', dropdown: 'services' },
  { label: 'Sản phẩm', dropdown: 'products' },
  { label: 'Kiến thức', href: '/kien-thuc' },
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
    { label: 'Dây cáp điện', href: '/san-pham/day-cap-dien' },
    { label: 'Thiết bị đóng cắt', href: '/san-pham/thiet-bi-dong-cat' },
    { label: 'Tủ điện & tủ tụ bù', href: '/san-pham/tu-dien-tu-tu-bu' },
    { label: 'Solar', href: '/san-pham/solar' },
    { label: 'Thiết bị chống sét', href: '/san-pham/thiet-bi-chong-set' },
  ],
}

export function SiteHeader({ navigate, path }: { navigate: Navigate; path: string }) {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const triggerRefs = useRef<Partial<Record<DropdownKey, HTMLButtonElement | null>>>({})

  const closeNavigation = () => {
    setOpen(false)
    setActiveDropdown(null)
  }

  const isRouteActive = (href: string) => href === '/'
    ? path === '/'
    : path === href || path.startsWith(`${href}/`)

  useEffect(() => closeNavigation(), [path])

  useLayoutEffect(() => {
    let cancelled = false

    const syncIndicator = () => {
      const navElement = navRef.current
      const indicator = indicatorRef.current
      if (!navElement || !indicator || window.matchMedia('(max-width:1100px)').matches) {
        indicator?.classList.remove('is-visible')
        return
      }

      const activeItem = Array.from(navElement.children).find(element =>
        element.matches('a.is-active, .chrome-nav-item.is-active'),
      )
      const target = activeItem instanceof HTMLAnchorElement
        ? activeItem
        : activeItem?.querySelector<HTMLElement>('.chrome-nav-trigger')

      if (!target) {
        indicator.classList.remove('is-visible')
        return
      }

      const navRect = navElement.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      indicator.style.width = `${Math.round(targetRect.width)}px`
      indicator.style.transform = `translate3d(${Math.round(targetRect.left - navRect.left)}px,0,0)`
      indicator.classList.add('is-visible')
    }

    syncIndicator()
    const frame = window.requestAnimationFrame(syncIndicator)
    window.addEventListener('resize', syncIndicator)
    void document.fonts.ready.then(() => {
      if (!cancelled) syncIndicator()
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', syncIndicator)
    }
  }, [path])

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
      <nav ref={navRef} id="chrome-primary-navigation" className={open ? 'open' : ''} aria-label="Điều hướng chính">
        {nav.map(item => {
          if (!('dropdown' in item)) {
            const routeActive = isRouteActive(item.href)
            return <SiteLink
              key={item.label}
              href={item.href}
              navigate={navigate}
              onNavigate={closeNavigation}
              className={routeActive ? 'is-active' : undefined}
              active={routeActive}
            >{item.label}</SiteLink>
          }

          const dropdown = item.dropdown as DropdownKey
          const isOpen = activeDropdown === dropdown
          const routeActive = dropdown === 'services'
            ? path.startsWith('/dich-vu/')
            : path === '/san-pham' || path.startsWith('/san-pham/')
          return <div
            className={`chrome-nav-item ${isOpen ? 'is-open' : ''} ${routeActive ? 'is-active' : ''}`.trim()}
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
              aria-current={routeActive ? 'page' : undefined}
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
              {dropdownLinks[dropdown].map(link => {
                const childRouteActive = path === link.href
                  || (link.href !== '/san-pham' && path.startsWith(`${link.href}/`))
                return <SiteLink
                  key={link.label}
                  href={link.href}
                  navigate={navigate}
                  onNavigate={closeNavigation}
                  className={childRouteActive ? 'is-active' : undefined}
                  active={childRouteActive}
                >{link.label}</SiteLink>
              })}
            </div>
          </div>
        })}
        <span ref={indicatorRef} className="chrome-nav-indicator" aria-hidden="true" />
      </nav>
      <a className="chrome-phone" href={phoneHref}><PhoneCall size={18} /> Gọi xử lý sự cố</a>
    </div></header>
  </>
}

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const primaryLinks = [
    ['Trang chủ', '/'],
    ['Sản phẩm', '/san-pham'],
    ['Kiến thức', '/kien-thuc'],
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
        {primaryLinks.map(([title, href]) => <SiteLink key={title} href={href} navigate={navigate}><ChevronRight size={14} aria-hidden="true" /><span>{title}</span></SiteLink>)}
      </nav>

      <nav className="chrome-footer-nav chrome-footer-services" aria-label="Dịch vụ nổi bật">
        <h4>DỊCH VỤ</h4>
        {dropdownLinks.services.map(link => <SiteLink key={link.label} href={link.href} navigate={navigate}><ChevronRight size={14} aria-hidden="true" /><span>{link.label}</span></SiteLink>)}
      </nav>

      <div className="chrome-footer-support">
        <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
        <div className="chrome-footer-social" aria-label="Các kênh liên hệ">
          <a href={zaloHref} target="_blank" rel="noreferrer" aria-label="Chat qua Zalo" title="Zalo"><span className="chrome-footer-zalo" aria-hidden="true">Zalo</span></a>
          <a href={`mailto:${email}`} aria-label={`Gửi email đến ${email}`} title="Email"><AtSign size={18} /></a>
          <a href={mapsHref} target="_blank" rel="noreferrer" aria-label="Mở vị trí Điện 24H trên Google Maps" title="Bản đồ"><MapPin size={18} /></a>
          <a href={phoneHref} aria-label={`Gọi hotline ${phoneDisplay}`} title="Điện thoại"><PhoneCall size={18} /></a>
        </div>
        <a className="chrome-footer-phone" href={phoneHref}>
          <PhoneCall size={36} strokeWidth={1.9} />
          <span><b>{phoneDisplay}</b><small>Hỗ trợ 24/7 – Gọi ngay!</small></span>
        </a>
      </div>
    </div>

    <div className="chrome-container chrome-copyright"><span>© 2026 Dien24h.vn.</span></div>
  </footer>
}
