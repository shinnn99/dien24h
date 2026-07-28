import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import type { Navigate } from '../App'
import heroImg from '../assets/dien24h-hero.png'
import { email, faqs, phoneDisplay, phoneHref } from '../data'
import { SiteLink } from './SiteLink'

export function LinkButton({ href, navigate, children, className = 'button primary' }: { href: string; navigate: Navigate; children: ReactNode; className?: string }) {
  if (href.startsWith('tel:')) return <a href={href} className={className}>{children}</a>
  return <SiteLink className={className} href={href} navigate={navigate}>{children}</SiteLink>
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? 'light' : ''}`}><i />{children}</div>
}

export function Breadcrumb({ items, navigate, light = false }: { items: [string, string?][]; navigate: Navigate; light?: boolean }) {
  return <div className={`breadcrumb ${light ? 'light' : ''}`}>{items.map(([label, href], i) => <span key={label}>{i > 0 && ' / '}{href ? <SiteLink href={href} navigate={navigate}>{label}</SiteLink> : label}</span>)}</div>
}

export function PageHero({ navigate, title, text, eyebrow, compact = false, children }: { navigate: Navigate; title: ReactNode; text: string; eyebrow?: string; compact?: boolean; children?: ReactNode }) {
  return <section className={`page-hero ${compact ? 'compact' : ''}`} style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="page-hero-overlay" />
    <div className="container page-hero-content">
      <Breadcrumb navigate={navigate} light items={[['Trang chủ', '/'], [eyebrow || 'Dịch vụ']]} />
      {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
      <h1>{title}</h1><p>{text}</p>{children}
    </div>
  </section>
}

export function CapabilityStrip({ items }: { items?: [string, string, string][] }) {
  const data = items || [['10+', 'Năm kinh nghiệm', 'Theo thông tin công khai'], ['24/7', 'Tiếp nhận kỹ thuật', 'Theo dịch vụ công bố'], ['22kV', 'Năng lực trung thế', 'Đường dây & trạm biến áp'], ['DOBICO', 'Hệ sinh thái xây lắp', 'Năng lực pháp nhân']]
  return <div className="capability-wrap"><div className="container capability-strip">{data.map(([n, title, sub]) => <div key={title}><b>{n}</b><span><strong>{title}</strong><small>{sub}</small></span></div>)}</div></div>
}

export function QuoteForm({ title = 'Yêu cầu báo giá nhanh', compact = false }: { title?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return <form className={`quote-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
    <h3>{sent ? 'Đã tiếp nhận yêu cầu' : title}</h3>
    {sent ? <div className="success">✓ Cảm ơn bạn. Kỹ sư Điện 24H sẽ liên hệ lại trong giờ trực.</div> : <>
      <div className="form-row"><label>Họ và tên *<input required placeholder="Nhập họ và tên" /></label><label>Số điện thoại *<input required type="tel" placeholder="Nhập số điện thoại" /></label></div>
      <div className="form-row"><label>Email<input type="email" placeholder="name@company.vn" /></label><label>Nhu cầu *<select required defaultValue=""><option value="" disabled>Chọn nhu cầu</option><option>Xử lý sự cố khẩn cấp</option><option>Khảo sát / báo giá công trình</option><option>Mua thiết bị</option><option>Bảo trì định kỳ</option></select></label></div>
      <label>Địa điểm công trình<input placeholder="Khu công nghiệp / địa chỉ" /></label>
      {!compact && <label>Mô tả yêu cầu<textarea placeholder="Công suất, tình trạng hoặc hạng mục cần tư vấn..." /></label>}
      <button className="button primary submit">GỬI YÊU CẦU BÁO GIÁ →</button>
      <small>Kỹ sư tiếp nhận ngay — phản hồi nhanh trong giờ trực.</small>
    </>}
  </form>
}

export function FaqBlock({ questions = faqs, title = 'Câu hỏi thường gặp' }: { questions?: string[][]; title?: string }) {
  const [active, setActive] = useState<number | null>(0)
  return <section className="faq-block"><div className="section-title row-title"><div><Eyebrow>GIẢI ĐÁP NHANH</Eyebrow><h2>{title}</h2></div><p>Thông tin giúp bạn chuẩn bị yêu cầu kỹ thuật và nhận báo giá chính xác hơn.</p></div><div className="faqs">{questions.map(([q, a], i) => <button className={active === i ? 'active' : ''} onClick={() => setActive(active === i ? null : i)} key={q}><span>{q}<b>{active === i ? '−' : '+'}</b></span>{active === i && <p>{a}</p>}</button>)}</div></section>
}

export function DarkCta({ navigate, title = 'Bạn đang có dự án cần triển khai?', text = 'Đội ngũ kỹ sư sẵn sàng khảo sát và tư vấn giải pháp phù hợp cho doanh nghiệp của bạn.' }: { navigate: Navigate; title?: string; text?: string }) {
  return <section className="dark-cta"><div><h2>{title}</h2><p>{text}</p></div><div><LinkButton href="/lien-he" navigate={navigate}>Yêu cầu khảo sát & báo giá</LinkButton><a href={phoneHref}>Hoặc gọi ngay <b>{phoneDisplay}</b></a></div></section>
}

export function ContactMini() {
  return <div className="contact-mini"><span>☎</span><div><small>Hotline kỹ thuật 24/7</small><a href={phoneHref}>{phoneDisplay}</a><p>{email}</p></div></div>
}
