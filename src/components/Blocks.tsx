import { useId, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { ArrowRight, Minus, PhoneCall, Plus } from 'lucide-react'
import type { Navigate } from '../App'
import heroImg from '../assets/dien24h-hero.png'
import { email, faqs, phoneDisplay, phoneHref } from '../data'
import { CustomSelect } from './CustomSelect'
import { SiteLink } from './SiteLink'

const quoteNeedOptions = [
  'Đường dây & trạm biến áp',
  'Sửa chữa điện 24H',
  'Thiết bị điện 24H',
  'Solar 24H',
  'Chống sét 24H',
  'Máy phát điện 24H',
]

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

export function CapabilityStrip({ items, className = '' }: { items?: [string, string, string][]; className?: string }) {
  const data = items || [['10+', 'Năm kinh nghiệm', 'Kinh nghiệm thực tế'], ['24/7', 'Sửa chữa điện', 'Phục vụ ngày và đêm'], ['6', 'Nhóm dịch vụ', 'Giải pháp điện toàn diện'], ['Đồng Nai', 'Khu vực trọng tâm', 'Biên Hòa – Đồng Nai']]
  return <div className={`capability-wrap ${className}`.trim()}><div className="container capability-strip">{data.map(([n, title, sub]) => <div key={title}><b>{n}</b><span><strong>{title}</strong><small>{sub}</small></span></div>)}</div></div>
}

export function QuoteForm({ title = 'Yêu cầu báo giá nhanh', compact = false, hideLabels = false }: { title?: string; compact?: boolean; hideLabels?: boolean }) {
  const [prepared, setPrepared] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const need = String(data.get('need') || '')
    const note = String(data.get('note') || '')
    const subject = encodeURIComponent(`Yêu cầu tư vấn: ${need}`)
    const body = encodeURIComponent([
      `Họ tên: ${name}`,
      `Số điện thoại: ${phone}`,
      `Dịch vụ quan tâm: ${need}`,
      `Ghi chú: ${note || 'Không có'}`,
    ].join('\n'))
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setPrepared(true)
  }
  return <form className={`quote-form ${compact ? 'compact' : ''} ${hideLabels ? 'labels-hidden' : ''}`.trim()} onSubmit={submit}>
    <h3>{title}</h3>
    {prepared && <div className="success" role="status">Email đã được chuẩn bị. Kiểm tra ứng dụng email và bấm Gửi; thông tin trong biểu mẫu vẫn được giữ lại. Nếu cần hỗ trợ ngay, gọi <a href={phoneHref}>{phoneDisplay}</a>.</div>}
    <div className="form-row"><label><span className="quote-field-label">Họ và tên *</span><input name="name" required autoComplete="name" placeholder="Nhập họ và tên" /></label><label><span className="quote-field-label">Số điện thoại *</span><input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="Ví dụ: 090..." /></label></div>
    <CustomSelect
      label="Dịch vụ quan tâm *"
      hideLabel={hideLabels}
      name="need"
      required
      placeholder="Chọn dịch vụ"
      options={quoteNeedOptions}
    />
    <label><span className="quote-field-label">Ghi chú</span><textarea name="note" placeholder="Tình trạng hoặc hạng mục cần tư vấn..." /></label>
    <button className="button primary submit"><span>{prepared ? 'MỞ LẠI EMAIL ĐỂ GỬI' : 'MỞ EMAIL ĐỂ GỬI YÊU CẦU'}</span><ArrowRight size={18} aria-hidden="true" /></button>
    <small>Sau khi nhận yêu cầu, kỹ sư sẽ liên hệ lại sau khoảng 15 phút.</small>
  </form>
}

export function FaqBlock({ questions = faqs, title = 'Câu hỏi thường gặp', initialActive = 0, alwaysOpen = false }: { questions?: string[][]; title?: string; initialActive?: number | null; alwaysOpen?: boolean }) {
  const [active, setActive] = useState<number | null>(initialActive)
  const blockId = useId().replace(/:/g, '')
  return <section className="faq-block"><div className="section-title row-title"><div><Eyebrow>GIẢI ĐÁP NHANH</Eyebrow><h2>{title}</h2></div><p>Thông tin giúp bạn chuẩn bị yêu cầu kỹ thuật và nhận báo giá chính xác hơn.</p></div><div className="faqs">{questions.map(([q, a], i) => {
    const open = alwaysOpen || active === i
    const buttonId = `${blockId}-question-${i}`
    const panelId = `${blockId}-answer-${i}`
    return <div className={`faq-item ${open ? 'active' : ''} ${alwaysOpen ? 'always-open' : ''}`.trim()} key={q}>
      {alwaysOpen
        ? <h3 id={buttonId} className="faq-question">{q}</h3>
        : <button id={buttonId} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setActive(open ? null : i)}><span>{q}<b aria-hidden="true">{open ? <Minus size={20} /> : <Plus size={20} />}</b></span></button>}
      {open && <p id={panelId} role="region" aria-labelledby={buttonId}>{a}</p>}
    </div>
  })}</div></section>
}

export function DarkCta({ navigate, title = 'Bạn đang có hạng mục cần triển khai?', text = 'Gửi nhu cầu để Điện 24H trao đổi và tư vấn giải pháp phù hợp.' }: { navigate: Navigate; title?: string; text?: string }) {
  return <section className="dark-cta"><div><h2>{title}</h2><p>{text}</p></div><div><LinkButton href="/lien-he" navigate={navigate}>Yêu cầu tư vấn & báo giá</LinkButton><a href={phoneHref}>Hoặc gọi ngay <b>{phoneDisplay}</b></a></div></section>
}

export function ContactMini() {
  return <div className="contact-mini"><span><PhoneCall size={22} aria-hidden="true" /></span><div><small>Hotline kỹ thuật</small><a href={phoneHref}>{phoneDisplay}</a><p>{email}</p></div></div>
}
