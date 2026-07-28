import type { Navigate } from '../App'
import { CapabilityStrip, DarkCta, Eyebrow, FaqBlock, LinkButton, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { phoneDisplay, phoneHref, products, projects, services } from '../data'

export function HomePage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="home-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="home-hero-overlay" />
      <div className="container home-hero-inner">
        <Eyebrow light>ĐIỆN 24H ĐỒNG NAI</Eyebrow>
        <h1>Xây lắp điện công nghiệp<br />& xử lý sự cố <span>24/7</span></h1>
        <p>Trạm biến áp · Điện nhà xưởng · Thiết bị điện · Solar · Chống sét · Máy phát điện</p>
        <div className="hero-actions"><LinkButton navigate={navigate} href={phoneHref}>☎ Gọi kỹ sư {phoneDisplay}</LinkButton><LinkButton navigate={navigate} href="/lien-he" className="button secondary">Yêu cầu báo giá →</LinkButton></div>
        <div className="hero-proof"><span>✓ Phản hồi nhanh</span><span>✓ Kỹ sư hiện trường</span><span>✓ Thiết bị chính hãng</span></div>
        <div className="brand-parent">Trong hệ sinh thái <b>Công ty Cổ phần Xây lắp DOBICO</b> · Thông tin công khai: hơn 10 năm kinh nghiệm</div>
      </div>
    </section>
    <CapabilityStrip />

    <section className="section container">
      <div className="section-title center"><Eyebrow>DỊCH VỤ CỦA CHÚNG TÔI</Eyebrow><h2>Một đầu mối cho toàn bộ<br />hệ thống điện doanh nghiệp</h2><p>Từ thiết kế, thi công đến vận hành và bảo trì.</p></div>
      <div className="service-grid six">{services.map(item => <article className="service-card visual" key={item.title}><div className="service-card-image" style={{ backgroundImage: `url(${heroImg})` }}><span>{item.icon}</span></div><div><h3>{item.title}</h3><p>{item.text}</p><button onClick={() => navigate(item.href)}>Xem chi tiết <b>→</b></button></div></article>)}</div>
    </section>

    <section className="section surface">
      <div className="container">
        <div className="section-title row-title"><div><Eyebrow>DỰ ÁN TIÊU BIỂU</Eyebrow><h2>Công trình thực tế.<br />Năng lực có thể kiểm chứng.</h2></div><button className="text-link" onClick={() => navigate('/du-an')}>Xem tất cả dự án →</button></div>
        <div className="project-grid home-projects">{projects.slice(0, 4).map((p, i) => <article className={`project-card ${i === 0 ? 'featured' : ''}`} key={p.title}><div className="project-image" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: p.pos }}><span>{p.tag}</span></div><div className="project-body"><h3>{p.title}</h3><p>⌖ {p.location}</p><b>⚡ {p.power}</b><button onClick={() => navigate(p.href)}>Xem công trình →</button></div></article>)}</div>
      </div>
    </section>

    <section className="section container">
      <div className="section-title row-title"><div><Eyebrow>THIẾT BỊ ĐIỆN</Eyebrow><h2>Sản phẩm nổi bật</h2></div><button className="text-link" onClick={() => navigate('/san-pham')}>Xem danh mục →</button></div>
      <div className="product-grid four">{products.slice(0, 4).map(p => <article className="product-card" key={p.title}><div className="product-visual" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: p.pos }} /><span>{p.category}</span><h3>{p.title}</h3><p>{p.detail}</p><button onClick={() => navigate(p.href)}>Xem chi tiết</button></article>)}</div>
    </section>

    <section className="section process-section">
      <div className="container">
        <div className="section-title center"><Eyebrow>QUY TRÌNH LÀM VIỆC</Eyebrow><h2>Nhanh chóng · Minh bạch · Trách nhiệm</h2></div>
        <div className="process-steps">{['Tiếp nhận yêu cầu', 'Khảo sát hiện trường', 'Báo giá chi tiết', 'Thi công – lắp đặt', 'Bàn giao – bảo hành'].map((x, i) => <article key={x}><b>0{i + 1}</b><span>{['☎', '⌖', '▤', '⚙', '✓'][i]}</span><h3>{x}</h3><p>{['Hotline & online', 'Kỹ sư đánh giá', 'Phạm vi rõ ràng', 'An toàn đúng tiến độ', 'Hồ sơ đầy đủ'][i]}</p></article>)}</div>
      </div>
    </section>

    <section className="section container">
      <div className="why-grid">
        <div><Eyebrow>VÌ SAO CHỌN ĐIỆN 24H</Eyebrow><h2>Đội kỹ thuật hiểu<br />áp lực vận hành</h2><p>Chúng tôi đặt an toàn, tính liên tục và hiệu quả đầu tư của khách hàng làm thước đo cho mọi quyết định kỹ thuật.</p><LinkButton href="/gioi-thieu" navigate={navigate} className="button outline">Tìm hiểu về Điện 24H →</LinkButton></div>
        <div className="value-grid">{[['⚡','Phản ứng nhanh 24/7'],['♙','Kỹ sư chuyên môn cao'],['◇','An toàn tuyệt đối'],['▣','Thiết bị chính hãng'],['₫','Giá cả minh bạch'],['↔','Bảo hành tại chỗ']].map(([icon, label]) => <div key={label}><span>{icon}</span><b>{label}</b></div>)}</div>
      </div>
      <div className="trust-grid">
        <article><Eyebrow>HỒ SƠ NĂNG LỰC</Eyebrow><h3>Năng lực & chứng chỉ</h3><p>Hồ sơ pháp lý, chứng nhận và tài liệu năng lực phục vụ đánh giá nhà thầu.</p><button onClick={() => navigate('/ho-so-nang-luc')}>Xem hồ sơ →</button></article>
        <article className="partners"><Eyebrow>THƯƠNG HIỆU THAM KHẢO</Eyebrow><div><b>Schneider</b><b>ABB</b><b>SIEMENS</b><b>MITSUBISHI</b><b>LS</b></div><p>Hiển thị tham khảo cấu hình; không hàm ý quan hệ đại lý khi chưa xác minh.</p></article>
        <article className="testimonial"><Eyebrow>KHÁCH HÀNG NÓI GÌ</Eyebrow><blockquote>“Đội kỹ thuật phản hồi nhanh, xử lý rõ nguyên nhân và bàn giao hồ sơ đầy đủ.”</blockquote><b>Đại diện nhà máy tại Biên Hòa</b></article>
      </div>
    </section>

    <section className="section surface"><div className="container home-bottom"><FaqBlock /><div className="home-form-wrap"><Eyebrow>NHẬN TƯ VẤN KỸ THUẬT</Eyebrow><h2>Yêu cầu báo giá nhanh</h2><QuoteForm compact /></div></div></section>
    <div className="container cta-spacing"><DarkCta navigate={navigate} title="Sự cố điện? Gọi ngay hỗ trợ khẩn cấp 24/7" text="Tiếp nhận tình trạng, chẩn đoán từ xa và điều phối kỹ thuật theo khu vực." /></div>
  </>
}
