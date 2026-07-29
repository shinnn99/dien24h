import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Clock3, Headset, Mail, MapPin, Menu, PhoneCall, X } from 'lucide-react'
import type { Navigate } from '../App'
import { SiteLink } from './SiteLink'

type DropdownKey = 'services' | 'products'

const nav = [
  { label: 'Dịch vụ', dropdown: 'services' },
  { label: 'Sản phẩm', dropdown: 'products' },
  { label: 'Dự án', href: '/du-an' },
  { label: 'Kiến thức', href: '/kien-thuc' },
  { label: 'Về chúng tôi', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' },
] as const

const dropdownLinks: Record<DropdownKey, { label: string; href: string }[]> = {
  services: [
    { label: 'Điện công nghiệp', href: '/dich-vu/dien-cong-nghiep' },
    { label: 'Trạm biến áp', href: '/dich-vu/tram-bien-ap' },
    { label: 'Sửa chữa điện 24H', href: '/dich-vu/sua-chua-dien-24h' },
    { label: 'Bảo trì & thí nghiệm điện', href: '/dich-vu/bao-tri-thi-nghiem-dien' },
    { label: 'Solar', href: '/dich-vu/solar' },
    { label: 'Máy phát điện', href: '/dich-vu/may-phat-dien' },
    { label: 'Chống sét', href: '/dich-vu/chong-set' },
  ],
  products: [
    { label: 'Tất cả sản phẩm', href: '/san-pham' },
    { label: 'Máy biến áp', href: '/san-pham/may-bien-ap-dau-1000kva' },
    { label: 'Dây cáp điện', href: '/san-pham' },
    { label: 'Thiết bị đóng cắt', href: '/san-pham' },
    { label: 'Tủ điện & tủ tụ bù', href: '/san-pham' },
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
      if (!headerRef.current?.contains(event.target as Node)) setActiveDropdown(null)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !activeDropdown) return
      const trigger = triggerRefs.current[activeDropdown]
      setActiveDropdown(null)
      trigger?.focus()
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeDropdown])

  return <>
    <div className="chrome-topbar"><div className="chrome-container"><span><MapPin size={12} /> Trảng Dài, Biên Hòa, Đồng Nai</span><span><Mail size={12} /> contact@dien24h.vn</span><span><Clock3 size={12} /> Làm việc: T2 - T7 (07:30 - 17:30)</span><b><Headset size={12} /> Hỗ trợ 24/7 kể cả ngày lễ</b></div></div>
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
      <a className="chrome-phone" href="tel:0888979111"><PhoneCall size={18} /> 0888.979.111</a>
    </div></header>
  </>
}

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  return <footer className="chrome-footer"><div className="chrome-container chrome-footer-grid">
    <div><SiteLink className="chrome-logo footer-logo-v2" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink><p>Giải pháp điện công nghiệp 24/7 cho nhà máy, khu công nghiệp tại Đồng Nai.</p><b><PhoneCall size={14} /> 0888.979.111</b><small>Hotline 24/7</small><p><Mail size={13} /> contact@dien24h.vn<br /><MapPin size={13} /> Trảng Dài, TP. Biên Hòa, Tỉnh Đồng Nai</p></div>
    <div><h4>LIÊN KẾT NHANH</h4>{[['Trang chủ','/'],['Dịch vụ','/dich-vu/dien-cong-nghiep'],['Sản phẩm','/san-pham'],['Dự án','/du-an'],['Kiến thức','/kien-thuc'],['Về chúng tôi','/gioi-thieu'],['Liên hệ','/lien-he']].map(([t,h]) => <SiteLink key={t} href={h} navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>DỊCH VỤ NỔI BẬT</h4>{['Trạm biến áp','Sửa chữa điện 24H','Điện nhà xưởng','Thiết bị điện','Solar','Máy phát điện'].map(t => <SiteLink key={t} href="/dich-vu/dien-cong-nghiep" navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>HỖ TRỢ</h4>{['Chính sách bảo hành','Hướng dẫn thanh toán','Tuyển dụng','Hồ sơ năng lực','Câu hỏi thường gặp'].map(t => <SiteLink key={t} href="/lien-he" navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>KẾT NỐI VỚI CHÚNG TÔI</h4><div className="chrome-social"><i>f</i><i>●</i><i>▶</i><i>in</i></div><a className="chrome-footer-phone" href="tel:0888979111"><PhoneCall size={34} /><span><b>0888.979.111</b><small>Hỗ trợ 24/7 - Gọi ngay!</small></span></a></div>
  </div><div className="chrome-container chrome-copyright"><span>© 2026 Điện 24H Đồng Nai. All rights reserved.</span><span>Thiết kế bởi ❤</span></div></footer>
}
