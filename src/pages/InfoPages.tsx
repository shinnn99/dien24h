import type { Navigate } from '../App'
import { Breadcrumb, CapabilityStrip, DarkCta, Eyebrow, FaqBlock, LinkButton, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { address, email, phoneDisplay, phoneHref, services, zaloHref } from '../data'

export function AboutPage({ navigate }: { navigate: Navigate }) {
  const customerGroups = [
    ['KCN', 'Khu công nghiệp', 'Đường dây và trạm biến áp'],
    ['NM', 'Nhà máy, nhà xưởng', 'Điện sản xuất và nguồn dự phòng'],
    ['DN', 'Doanh nghiệp', 'Thiết bị điện và Solar'],
    ['24H', 'Hộ kinh doanh, nhà ở', 'Sửa chữa điện và chống sét'],
  ]

  return <>
    <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="about-overlay" />
      <div className="container">
        <Breadcrumb navigate={navigate} light items={[["Trang chủ", "/"], ["Về chúng tôi"]]} />
        <h1>Về Điện <span>24H</span></h1>
        <p className="about-tagline">Điện 24H – Luôn sẵn sàng</p>
        <p>Giải pháp điện công nghiệp và dân dụng tại Biên Hòa – Đồng Nai.</p>
        <div className="hero-actions">
          <LinkButton href={phoneHref} navigate={navigate}>☎ Gọi ngay {phoneDisplay}</LinkButton>
          <LinkButton href="/lien-he" navigate={navigate} className="button secondary">Đăng ký tư vấn →</LinkButton>
        </div>
      </div>
    </section>

    <CapabilityStrip items={[
      ['10+', 'Năm kinh nghiệm', 'Kinh nghiệm thực tế'],
      ['24/7', 'Sửa chữa điện', 'Phục vụ ngày và đêm'],
      ['6', 'Nhóm dịch vụ', 'Giải pháp điện toàn diện'],
      ['Đồng Nai', 'Khu vực trọng tâm', 'Biên Hòa – Đồng Nai'],
    ]} />

    <section className="section container about-overview">
      <div>
        <Eyebrow>TỔNG QUAN</Eyebrow>
        <h2>Giải pháp điện toàn diện,<br />an toàn và hiệu quả.</h2>
        <p>Điện 24H có hơn 10 năm kinh nghiệm thực tế cùng đội ngũ kỹ thuật viên lành nghề, phục vụ nhà máy, nhà xưởng, doanh nghiệp, hộ kinh doanh và khách hàng dân dụng.</p>
        <ul>
          <li>✓ Tư vấn và thiết kế giải pháp điện</li>
          <li>✓ Thi công và lắp đặt tại công trình</li>
          <li>✓ Sửa chữa, bảo trì và thí nghiệm</li>
          <li>✓ Cung cấp vật tư, thiết bị điện</li>
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
        <div className="service-grid six">{services.map(service => <article className="service-card visual" key={service.title}>
          <div className="service-card-image" style={{ backgroundImage: `url(${heroImg})` }}><span>{service.icon}</span></div>
          <div><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => navigate(service.href)}>Xem chi tiết →</button></div>
        </article>)}</div>
      </div>
    </section>

    <section className="section container about-values">
      <article>
        <Eyebrow>PHƯƠNG CHÂM</Eyebrow>
        <h2>Trao gửi sự an tâm</h2>
        <div>{[['24', 'Luôn sẵn sàng'], ['◇', 'An toàn'], ['◎', 'Hiệu quả']].map(([icon, title]) => <span key={title}><b>{icon}</b><strong>{title}</strong></span>)}</div>
        <p>Điện 24H hướng đến giải pháp phù hợp, nguồn điện ổn định và giảm thời gian gián đoạn vận hành.</p>
      </article>
      <article>
        <Eyebrow>KHÁCH HÀNG PHỤC VỤ</Eyebrow>
        <h2>Từ nhà máy đến nhà ở</h2>
        <div className="team-placeholder">{customerGroups.map(([icon, title, detail]) => <div key={title}>
          <span>{icon}</span><b>{title}</b><small>{detail}</small>
        </div>)}</div>
      </article>
    </section>

    <section className="section surface"><div className="container"><DarkCta navigate={navigate} title="Cần tư vấn giải pháp điện?" text="Liên hệ Điện 24H để trao đổi nhu cầu sửa chữa, thi công hoặc cung cấp thiết bị tại Đồng Nai." /></div></section>
  </>
}

export function ContactPage({ navigate }: { navigate: Navigate }) {
  const quickNeeds = [
    ['⚠', 'Sự cố điện 24H', 'Chập cháy, mất pha, đảo pha', '/dich-vu/sua-chua-dien-24h'],
    ['▤', 'Trạm biến áp', 'Thi công, bảo trì, thí nghiệm', '/dich-vu/tram-bien-ap'],
    ['▣', 'Mua thiết bị', 'Máy biến áp, tủ điện, cáp', '/san-pham'],
    ['☀', 'Điện mặt trời', 'Hòa lưới, bám tải, lưu trữ', '/dich-vu/solar'],
  ]
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return <>
    <section className="contact-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div />
      <div className="container"><Breadcrumb navigate={navigate} light items={[["Trang chủ", "/"], ["Liên hệ"]]} /><h1>Liên hệ & yêu cầu báo giá</h1><p>Gọi hotline, chat Zalo hoặc gửi nội dung qua email chính thức của Điện 24H.</p></div>
    </section>

    <section className="section container contact-main">
      <aside>
        <h2>Thông tin liên hệ</h2>
        <div><span>☎</span><p><b>Hotline sự cố 24/7</b><a href={phoneHref}>{phoneDisplay}</a></p></div>
        <div><span>✉</span><p><b>Email</b><a href={`mailto:${email}`}>{email}</a></p></div>
        <div><span>⌖</span><p><b>Địa chỉ</b>{address}</p></div>
        <div><span>◷</span><p><b>Tiếp nhận sửa chữa</b>24/7, phục vụ cả ngày lẫn đêm</p></div>
        <div><span>Z</span><p><b>Chat Zalo</b><a href={zaloHref} target="_blank" rel="noreferrer">Chat qua Zalo</a></p></div>
      </aside>
      <QuoteForm title="Đăng ký tư vấn" />
    </section>

    <section className="container quick-needs"><h2>Chọn nhanh loại yêu cầu</h2><div>{quickNeeds.map(([icon, title, detail, href]) => <button key={title} onClick={() => navigate(href)}><span>{icon}</span><b>{title}</b><small>{detail}</small><em>→</em></button>)}</div></section>

    <section className="section container contact-lower">
      <article><Eyebrow>VỊ TRÍ CỦA CHÚNG TÔI</Eyebrow><div className="map-box"><span>Điện 24H Đồng Nai</span><b>⌖</b><p>{address}<br /><a href={mapHref} target="_blank" rel="noreferrer">Mở chỉ đường trên Google Maps →</a></p></div></article>
      <article><FaqBlock title="Câu hỏi liên hệ" /></article>
    </section>

    <section className="container response-process">
      <article><h2>Phản hồi sau khi đăng ký</h2><div>{[['15 phút', 'Kỹ sư liên hệ lại'], ['24/7', 'Tiếp nhận sự cố'], ['0888', 'Hotline trực tiếp']].map(([number, title]) => <span key={title}><b>{number}</b>{title}</span>)}</div><small>Sau khi nhận yêu cầu, kỹ sư sẽ liên hệ lại sau khoảng 15 phút.</small></article>
      <article><h2>Kênh liên hệ đang hoạt động</h2><div>{[['1', 'Hotline'], ['2', 'Zalo'], ['3', 'Email']].map(([number, title]) => <span key={title}><b>{number}</b>{title}</span>)}</div></article>
    </section>

    <div className="container cta-spacing"><DarkCta navigate={navigate} title="Sự cố điện? Gọi ngay hỗ trợ 24/7" text="Mô tả tình trạng để kỹ thuật viên tiếp nhận và trao đổi hướng xử lý phù hợp." /></div>
  </>
}

export function NotFoundPage({ navigate }: { navigate: Navigate }) {
  return <section className="not-found"><Eyebrow>404</Eyebrow><h1>Không tìm thấy trang</h1><p>Đường dẫn này chưa có nội dung hoặc đã được thay đổi.</p><LinkButton navigate={navigate} href="/">Về trang chủ</LinkButton></section>
}
