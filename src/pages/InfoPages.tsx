import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Factory,
  Gauge,
  HousePlug,
  Mail,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Quote,
  ShieldCheck,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'
import type { Navigate } from '../App'
import { Breadcrumb, CapabilityStrip, DarkCta, Eyebrow, FaqBlock, LinkButton, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { address, email, phoneDisplay, phoneHref, services, zaloHref } from '../data'

const aboutPrinciples: [LucideIcon, string][] = [
  [Clock3, 'Luôn sẵn sàng'],
  [ShieldCheck, 'An toàn'],
  [Gauge, 'Hiệu quả'],
]

const customerGroups: [LucideIcon, string, string][] = [
  [Factory, 'Khu công nghiệp', 'Đường dây và trạm biến áp'],
  [Warehouse, 'Nhà máy, nhà xưởng', 'Điện sản xuất và nguồn dự phòng'],
  [BriefcaseBusiness, 'Doanh nghiệp', 'Thiết bị điện và Solar'],
  [HousePlug, 'Hộ kinh doanh, nhà ở', 'Sửa chữa điện và chống sét'],
]

const testimonials = [
  {
    quote: 'Đội kỹ thuật khảo sát kỹ trước khi thi công trạm biến áp, phối hợp đúng tiến độ và bàn giao thông tin rõ ràng để chúng tôi thuận tiện theo dõi.',
    name: 'Bộ phận kỹ thuật',
    role: 'Doanh nghiệp sản xuất – Đồng Nai',
    initials: 'KT',
  },
  {
    quote: 'Phương án bảo trì được trao đổi cụ thể, hạn chế thời gian dừng máy và giúp bộ phận vận hành chủ động hơn trong kế hoạch sản xuất.',
    name: 'Quản lý vận hành',
    role: 'Nhà xưởng tại KCN Biên Hòa',
    initials: 'QL',
  },
  {
    quote: 'Thông tin thiết bị, công suất và thời gian giao hàng được tư vấn rõ ràng, phù hợp với nhu cầu thực tế và tiến độ của công trình.',
    name: 'Đại diện công trình',
    role: 'Đơn vị thi công cơ điện',
    initials: 'CT',
  },
  {
    quote: 'Giải pháp Solar bám tải được trình bày dễ hiểu. Quá trình khảo sát, tính toán và đề xuất phương án diễn ra nhanh chóng, chuyên nghiệp.',
    name: 'Khách hàng doanh nghiệp',
    role: 'Nhà xưởng tại Biên Hòa',
    initials: 'DN',
  },
]

function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const directionRef = useRef<1 | -1>(1)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex(current => {
        let next = current + directionRef.current
        if (next >= testimonials.length || next < 0) {
          directionRef.current = directionRef.current === 1 ? -1 : 1
          next = current + directionRef.current
        }
        return next
      })
    }, 4800)

    return () => window.clearInterval(timer)
  }, [activeIndex, paused])

  const move = (step: 1 | -1) => {
    directionRef.current = step
    setActiveIndex(current => Math.min(testimonials.length - 1, Math.max(0, current + step)))
  }

  const select = (index: number) => {
    directionRef.current = index >= activeIndex ? 1 : -1
    setActiveIndex(index)
  }

  return <section className="about-testimonials-section" aria-labelledby="about-testimonials-title">
    <div className="container">
      <div className="section-title center">
        <Eyebrow>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</Eyebrow>
        <h2 id="about-testimonials-title">Sự tin tưởng từ khách hàng</h2>
      </div>
      <div
        className="about-testimonials-carousel"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false)
        }}
      >
        <div className="about-testimonials-viewport">
          <div className="about-testimonials-track" style={{ transform: `translate3d(-${activeIndex * 100}%,0,0)` }}>
            {testimonials.map((testimonial, index) => <article
              className="about-testimonial-card"
              key={`${testimonial.name}-${testimonial.role}`}
              aria-hidden={index !== activeIndex}
            >
              <Quote className="about-testimonial-quote" size={44} strokeWidth={1.7} aria-hidden="true" />
              <p>{testimonial.quote}</p>
              <div className="about-testimonial-author">
                <span className="about-testimonial-avatar" aria-hidden="true">{testimonial.initials}</span>
                <span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span>
              </div>
            </article>)}
          </div>
        </div>
        <div className="about-testimonials-controls">
          <button type="button" onClick={() => move(-1)} disabled={activeIndex === 0} aria-label="Xem phản hồi trước"><ChevronLeft size={20} /></button>
          <div className="about-testimonials-dots" aria-label="Chọn phản hồi khách hàng">
            {testimonials.map((testimonial, index) => <button
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              key={testimonial.name}
              onClick={() => select(index)}
              aria-label={`Xem phản hồi ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />)}
          </div>
          <button type="button" onClick={() => move(1)} disabled={activeIndex === testimonials.length - 1} aria-label="Xem phản hồi tiếp theo"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  </section>
}

export function AboutPage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="about-overlay" />
      <div className="container">
        <Breadcrumb navigate={navigate} light items={[["Trang chủ", "/"], ["Về chúng tôi"]]} />
        <h1>Về Điện <span>24H</span></h1>
        <p className="about-tagline">Điện 24H – Luôn sẵn sàng</p>
        <p>Giải pháp điện công nghiệp và dân dụng tại Biên Hòa – Đồng Nai.</p>
        <div className="hero-actions">
          <LinkButton href={phoneHref} navigate={navigate}><PhoneCall size={18} aria-hidden="true" /> Gọi ngay {phoneDisplay}</LinkButton>
          <LinkButton href="/lien-he" navigate={navigate} className="button secondary">Đăng ký tư vấn <ArrowRight size={18} aria-hidden="true" /></LinkButton>
        </div>
      </div>
    </section>

    <CapabilityStrip className="about-capability" items={[
      ['10+', 'Năm kinh nghiệm', 'Kinh nghiệm thực tế'],
      ['24/7', 'Sửa chữa điện', 'Phục vụ ngày và đêm'],
      ['6', 'Nhóm dịch vụ', 'Giải pháp điện toàn diện'],
      ['Đồng Nai', 'Khu vực trọng tâm', 'Biên Hòa – Đồng Nai'],
    ]} />

    <section className="section container about-overview">
      <div>
        <Eyebrow>TỔNG QUAN</Eyebrow>
        <h2 className="about-overview-title"><span>Giải pháp điện toàn diện,</span><span>an toàn và hiệu quả.</span></h2>
        <p>Điện 24H có hơn 10 năm kinh nghiệm thực tế cùng đội ngũ kỹ thuật viên lành nghề, phục vụ nhà máy, nhà xưởng, doanh nghiệp, hộ kinh doanh và khách hàng dân dụng.</p>
        <ul>
          <li><Check size={18} aria-hidden="true" /><span>Tư vấn và thiết kế giải pháp điện</span></li>
          <li><Check size={18} aria-hidden="true" /><span>Thi công và lắp đặt tại công trình</span></li>
          <li><Check size={18} aria-hidden="true" /><span>Sửa chữa, bảo trì và thí nghiệm</span></li>
          <li><Check size={18} aria-hidden="true" /><span>Cung cấp vật tư, thiết bị điện</span></li>
        </ul>
      </div>
      <div className="about-collage" role="img" aria-label="Hình minh họa hoạt động kỹ thuật điện của Điện 24H">
        <div style={{ backgroundImage: `url(${heroImg})` }} />
        <div style={{ backgroundImage: `url(${heroImg})` }} />
        <div style={{ backgroundImage: `url(${heroImg})` }} />
      </div>
    </section>

    <section className="section surface">
      <div className="container">
        <div className="section-title center"><Eyebrow>LĨNH VỰC HOẠT ĐỘNG</Eyebrow><h2>Hệ sinh thái 6 nhóm dịch vụ</h2></div>
        <div className="service-grid six">{services.map(service => {
          const ServiceIcon = service.icon
          return <article className="service-card visual" key={service.title}>
            <div className="service-card-image" style={{ backgroundImage: `url(${heroImg})` }}><span><ServiceIcon size={22} aria-hidden="true" /></span></div>
            <div><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => navigate(service.href)}>Xem chi tiết <ArrowRight size={17} aria-hidden="true" /></button></div>
          </article>
        })}</div>
      </div>
    </section>

    <section className="section container about-values">
      <article>
        <Eyebrow>PHƯƠNG CHÂM</Eyebrow>
        <h2>Trao gửi sự an tâm</h2>
        <div className="about-principles">{aboutPrinciples.map(([Icon, title]) => <span key={title}><b><Icon size={24} aria-hidden="true" /></b><strong>{title}</strong></span>)}</div>
        <p>Điện 24H hướng đến giải pháp phù hợp, nguồn điện ổn định và giảm thời gian gián đoạn vận hành.</p>
      </article>
      <article>
        <Eyebrow>KHÁCH HÀNG PHỤC VỤ</Eyebrow>
        <h2>Từ nhà máy đến nhà ở</h2>
        <div className="team-placeholder">{customerGroups.map(([Icon, title, detail]) => <div key={title}>
          <span><Icon size={30} aria-hidden="true" /></span><b>{title}</b><small>{detail}</small>
        </div>)}</div>
      </article>
    </section>

    <TestimonialsCarousel />

    <section className="section surface"><div className="container"><DarkCta navigate={navigate} title="Cần tư vấn giải pháp điện?" text="Liên hệ Điện 24H để trao đổi nhu cầu sửa chữa, thi công hoặc cung cấp thiết bị tại Đồng Nai." /></div></section>
  </>
}

export function ContactPage({ navigate }: { navigate: Navigate }) {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const mapEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return <>
    <section className="contact-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div />
      <div className="container"><Breadcrumb navigate={navigate} light items={[["Trang chủ", "/"], ["Liên hệ"]]} /><h1>Liên hệ & yêu cầu báo giá</h1><p>Gọi hotline, chat Zalo hoặc gửi nội dung qua email chính thức của Điện 24H.</p></div>
    </section>

    <section className="section container contact-main">
      <aside>
        <h2>Thông tin liên hệ</h2>
        <div><span><PhoneCall size={22} aria-hidden="true" /></span><p><b>Hotline sự cố 24/7</b><a href={phoneHref}>{phoneDisplay}</a></p></div>
        <div><span><Mail size={22} aria-hidden="true" /></span><p><b>Email</b><a href={`mailto:${email}`}>{email}</a></p></div>
        <div><span><MapPin size={22} aria-hidden="true" /></span><p><b>Địa chỉ</b>{address}</p></div>
        <div><span><Clock3 size={22} aria-hidden="true" /></span><p><b>Tiếp nhận sửa chữa</b>24/7, phục vụ cả ngày lẫn đêm</p></div>
        <div><span><MessageCircleMore size={22} aria-hidden="true" /></span><p><b>Chat Zalo</b><a href={zaloHref} target="_blank" rel="noreferrer">Chat qua Zalo</a></p></div>
      </aside>
      <QuoteForm title="Đăng ký tư vấn" />
    </section>

    <section className="section container contact-lower">
      <article><Eyebrow>VỊ TRÍ CỦA CHÚNG TÔI</Eyebrow><div className="map-box">
        <iframe title="Bản đồ vị trí Điện 24H Đồng Nai" src={mapEmbedHref} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        <div className="map-box-caption"><strong>Điện 24H Đồng Nai</strong><span>{address}</span><a href={mapHref} target="_blank" rel="noreferrer">Mở chỉ đường trên Google Maps <ArrowRight size={15} aria-hidden="true" /></a></div>
      </div></article>
      <article><FaqBlock title="Câu hỏi liên hệ" /></article>
    </section>

    <section className="container response-process cta-spacing">
      <article><h2>Phản hồi sau khi đăng ký</h2><div>{[['15 phút', 'Kỹ sư liên hệ lại'], ['24/7', 'Tiếp nhận sự cố'], ['0888', 'Hotline trực tiếp']].map(([number, title]) => <span key={title}><b>{number}</b>{title}</span>)}</div><small>Sau khi nhận yêu cầu, kỹ sư sẽ liên hệ lại sau khoảng 15 phút.</small></article>
      <article><h2>Kênh liên hệ đang hoạt động</h2><div>{[['1', 'Hotline'], ['2', 'Zalo'], ['3', 'Email']].map(([number, title]) => <span key={title}><b>{number}</b>{title}</span>)}</div></article>
    </section>

  </>
}

export function NotFoundPage({ navigate }: { navigate: Navigate }) {
  return <section className="not-found"><Eyebrow>404</Eyebrow><h1>Không tìm thấy trang</h1><p>Đường dẫn này chưa có nội dung hoặc đã được thay đổi.</p><LinkButton navigate={navigate} href="/">Về trang chủ</LinkButton></section>
}
