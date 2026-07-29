import { useState } from 'react'
import type { Navigate } from '../App'
import { SiteLink } from './SiteLink'

const phone = '0888.979.111'
const nav = [
  ['Dịch vụ','/dich-vu/dien-cong-nghiep',true],['Sản phẩm','/san-pham',true],['Dự án','/du-an'],['Kiến thức','/kien-thuc'],['Về chúng tôi','/gioi-thieu'],['Liên hệ','/lien-he'],
] as const

export function SiteHeader({ navigate }: { navigate: Navigate; path: string }) {
  const [open,setOpen]=useState(false)
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>⌖ Trảng Dài, Biên Hòa, Đồng Nai</span><span>✉ contact@dien24h.vn</span><span>◷ Làm việc: T2 - T7 (07:30 - 17:30)</span><b>● Hỗ trợ 24/7 kể cả ngày lễ</b></div></div>
    <header><div className="container nav">
      <SiteLink className="brand-logo" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Mở menu">☰</button>
      <nav className={open?'open':''}>{nav.map(([label,href,drop])=><div className="nav-item" key={label}><SiteLink href={href} navigate={navigate} onNavigate={()=>setOpen(false)}>{label}{drop&&<span>⌄</span>}</SiteLink></div>)}</nav>
      <a className="hotline nav-hotline" href="tel:0888979111">☎ &nbsp;{phone}</a>
    </div></header>
  </>
}

export function SiteFooter({ navigate }: { navigate: Navigate }) {
  return <footer><div className="container ref-footer">
    <div><SiteLink className="brand-logo footer-brand" href="/" navigate={navigate}><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></SiteLink><p>Giải pháp điện công nghiệp 24/7 cho nhà máy, khu công nghiệp tại Đồng Nai.</p><b>☎ &nbsp;0888.979.111</b><p>✉ contact@dien24h.vn<br />⌖ Trảng Dài, TP. Biên Hòa, Tỉnh Đồng Nai</p></div>
    <div><h4>LIÊN KẾT NHANH</h4>{[['Trang chủ','/'],['Dịch vụ','/dich-vu/dien-cong-nghiep'],['Sản phẩm','/san-pham'],['Dự án','/du-an'],['Kiến thức','/kien-thuc'],['Về chúng tôi','/gioi-thieu'],['Liên hệ','/lien-he']].map(([t,h])=><SiteLink key={t} href={h} navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>DỊCH VỤ NỔI BẬT</h4>{['Trạm biến áp','Sửa chữa điện 24H','Điện nhà xưởng','Thiết bị điện','Solar','Máy phát điện'].map(t=><SiteLink key={t} href="/dich-vu/dien-cong-nghiep" navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>HỖ TRỢ</h4>{['Chính sách bảo hành','Hướng dẫn thanh toán','Tuyển dụng','Hồ sơ năng lực','Câu hỏi thường gặp'].map(t=><SiteLink key={t} href="/lien-he" navigate={navigate}>› {t}</SiteLink>)}</div>
    <div><h4>KẾT NỐI VỚI CHÚNG TÔI</h4><div className="ref-social"><i>f</i><i>●</i><i>▶</i><i>in</i></div><a className="ref-footer-phone" href="tel:0888979111">☎ <span><b>0888.979.111</b><small>Hỗ trợ 24/7 - Gọi ngay!</small></span></a></div>
  </div><div className="container copyright"><span>© 2026 Điện 24H Đồng Nai. All rights reserved.</span><span>Thiết kế bởi ❤</span></div></footer>
}
