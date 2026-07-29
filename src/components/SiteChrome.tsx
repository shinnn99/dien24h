import { useState } from 'react'
import { ChevronDown, Clock3, Headset, Mail, MapPin, Menu, PhoneCall, X } from 'lucide-react'
import type { Navigate } from '../App'
import { SiteLink } from './SiteLink'

const nav = [
  ['Dịch vụ', '/dich-vu/dien-cong-nghiep', true], ['Sản phẩm', '/san-pham', true],
  ['Dự án', '/du-an'], ['Kiến thức', '/kien-thuc'], ['Về chúng tôi', '/gioi-thieu'], ['Liên hệ', '/lien-he'],
] as const

export function SiteHeader({ navigate }: { navigate: Navigate; path: string }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="chrome-topbar"><div className="chrome-container"><span><MapPin size={12} /> Trảng Dài, Biên Hòa, Đồng Nai</span><span><Mail size={12} /> contact@dien24h.vn</span><span><Clock3 size={12} /> Làm việc: T2 - T7 (07:30 - 17:30)</span><b><Headset size={12} /> Hỗ trợ 24/7 kể cả ngày lễ</b></div></div>
    <header className="chrome-header"><div className="chrome-container chrome-nav">
      <SiteLink className="chrome-logo" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink>
      <button className="chrome-menu" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'open' : ''}>{nav.map(([label, href, drop]) => <SiteLink key={label} href={href} navigate={navigate} onNavigate={() => setOpen(false)}>{label}{drop && <ChevronDown size={14} />}</SiteLink>)}</nav>
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
