import { useState } from 'react'
import type { Navigate } from '../App'
import { email, phoneDisplay, phoneHref } from '../data'
import { SiteLink } from './SiteLink'

type Props = { navigate: Navigate; path: string }

const navItems = [
  { label: 'Dịch vụ', href: '/dich-vu/sua-chua-dien-24h', children: [
    ['Trạm biến áp 22kV', '/dich-vu/tram-bien-ap'],
    ['Sửa chữa điện 24H', '/dich-vu/sua-chua-dien-24h'],
    ['Điện công nghiệp', '/dich-vu/dien-cong-nghiep'],
    ['Bảo trì – thí nghiệm', '/dich-vu/bao-tri-thi-nghiem-dien'],
    ['Solar', '/dich-vu/solar'],
  ] },
  { label: 'Sản phẩm', href: '/san-pham', children: [
    ['Máy biến áp', '/san-pham'],
    ['Dây cáp điện', '/san-pham'],
    ['Thiết bị đóng cắt', '/san-pham'],
    ['Tủ điện & tủ tụ bù', '/san-pham'],
  ] },
  { label: 'Dự án', href: '/du-an' },
  { label: 'Kiến thức', href: '/kien-thuc/chi-phi-lap-tram-bien-ap' },
  { label: 'Về chúng tôi', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export function SiteHeader({ navigate, path }: Props) {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>⌖ Trảng Dài, Biên Hòa, Đồng Nai</span><span>✉ {email}</span><span>◷ T2 – T7 (07:30 – 17:30)</span><b>● Hỗ trợ 24/7 kể cả ngày lễ</b></div></div>
    <header>
      <div className="container nav">
        <SiteLink className="logo" href="/" navigate={navigate} onNavigate={() => setOpen(false)}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Mở menu">☰</button>
        <nav className={open ? 'open' : ''}>
          {navItems.map(item => <div className={`nav-item ${path.startsWith(item.href.split('/').slice(0, 2).join('/')) ? 'current' : ''}`} key={item.label} onMouseEnter={() => setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
            {item.children && window.innerWidth < 900 ? <button onClick={() => setDropdown(dropdown === item.label ? null : item.label)}>{item.label}<span>⌄</span></button> : <SiteLink href={item.href} navigate={navigate} onNavigate={() => setOpen(false)}>{item.label}{item.children && <span>⌄</span>}</SiteLink>}
            {item.children && dropdown === item.label && <div className="dropdown">{item.children.map(([label, href]) => <SiteLink key={label} href={href} navigate={navigate} onNavigate={() => { setOpen(false); setDropdown(null) }}>{label}<b>→</b></SiteLink>)}</div>}
          </div>)}
        </nav>
        <a className="hotline nav-hotline" href={phoneHref}>☎ {phoneDisplay}</a>
      </div>
    </header>
  </>
}

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  return <footer>
    <div className="container footer-grid">
      <div><SiteLink className="logo footer-logo" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink><p>Thương hiệu dịch vụ điện công nghiệp trong hệ sinh thái Công ty Cổ phần Xây lắp DOBICO.</p></div>
      <div><h4>Liên kết nhanh</h4><SiteLink href="/" navigate={navigate}>Trang chủ</SiteLink><SiteLink href="/gioi-thieu" navigate={navigate}>Về chúng tôi</SiteLink><SiteLink href="/du-an" navigate={navigate}>Dự án</SiteLink><SiteLink href="/kien-thuc" navigate={navigate}>Kiến thức</SiteLink></div>
      <div><h4>Dịch vụ nổi bật</h4><SiteLink href="/dich-vu/tram-bien-ap" navigate={navigate}>Trạm biến áp</SiteLink><SiteLink href="/dich-vu/sua-chua-dien-24h" navigate={navigate}>Sửa chữa điện 24H</SiteLink><SiteLink href="/dich-vu/dien-cong-nghiep" navigate={navigate}>Điện nhà xưởng</SiteLink><SiteLink href="/san-pham" navigate={navigate}>Thiết bị điện</SiteLink></div>
      <div><h4>Liên hệ</h4><p>H4 Thân Nhân Trung, KP4C, Trảng Dài<br />Biên Hòa, Đồng Nai<br />{email}</p><a className="hotline footer-hotline" href={phoneHref}>☎ {phoneDisplay}</a></div>
    </div>
    <div className="container copyright"><span>© {new Date().getFullYear()} Dien24h.vn. All rights reserved.</span><span><button>Chính sách bảo mật</button> · <button>Điều khoản sử dụng</button></span></div>
  </footer>
}
