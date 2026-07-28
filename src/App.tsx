import { useState } from 'react'
import heroImg from './assets/dien24h-hero.png'
import './App.css'

const services = [
  { icon: '⚡', title: 'Trạm biến áp', text: 'Tư vấn, thiết kế, thi công trạm biến áp đến 110kV.' },
  { icon: '⌁', title: 'Điện nhà xưởng', text: 'Hệ thống điện động lực, chiếu sáng và tủ phân phối.' },
  { icon: '◫', title: 'Tủ điện công nghiệp', text: 'Tủ MSB, ATS, MCC được thiết kế theo yêu cầu.' },
  { icon: '24', title: 'Sửa chữa 24/7', text: 'Xử lý sự cố nhanh, khôi phục vận hành an toàn.' },
]

const projects = [
  { tag: 'TRẠM BIẾN ÁP', title: 'Trạm biến áp 22/0.4kV KCN Amata', meta: 'Biên Hòa · 2x1000kVA', pos: '52% 52%' },
  { tag: 'TỦ ĐIỆN', title: 'Hệ thống điện nhà máy SLP', meta: 'Long Thành · 3200A', pos: '80% 42%' },
  { tag: 'NĂNG LƯỢNG', title: 'Điện mặt trời mái nhà 2.5MWp', meta: 'Trảng Bom · 2.5MWp', pos: '18% 62%' },
]

const faqs = [
  ['Thời gian có mặt khi xảy ra sự cố là bao lâu?', 'Tại khu vực Biên Hòa, đội kỹ thuật có mặt dự kiến trong 30–60 phút. Các khu vực khác được xác nhận ngay khi tiếp nhận yêu cầu.'],
  ['Điện 24H có làm việc ngoài giờ không?', 'Có. Trung tâm hỗ trợ kỹ thuật trực 24/7, kể cả cuối tuần và ngày lễ.'],
  ['Có xuất hóa đơn VAT và hồ sơ nghiệm thu không?', 'Có. Mọi dự án đều có hợp đồng, hồ sơ nghiệm thu, CO-CQ thiết bị và hóa đơn đầy đủ.'],
  ['Chính sách bảo hành như thế nào?', 'Thiết bị và hạng mục thi công được bảo hành theo hợp đồng, tối thiểu 12 tháng.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <div className="topbar"><div className="container topbar-inner"><span>⌖ Trảng Dài, Biên Hòa, Đồng Nai</span><span>✉ contact@dien24h.vn</span><span>◷ T2 – T7 (07:30 – 17:30)</span><b>● Hỗ trợ 24/7 kể cả ngày lễ</b></div></div>
      <header>
        <div className="container nav">
          <button className="logo" onClick={() => scrollTo('home')} aria-label="Về đầu trang"><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">☰</button>
          <nav className={menuOpen ? 'open' : ''}><button onClick={() => scrollTo('services')}>Dịch vụ</button><button onClick={() => scrollTo('projects')}>Dự án</button><button onClick={() => scrollTo('about')}>Về chúng tôi</button><button onClick={() => scrollTo('process')}>Quy trình</button><button onClick={() => scrollTo('contact')}>Liên hệ</button></nav>
          <a className="hotline nav-hotline" href="tel:0888979111">☎ 0888.979.111</a>
        </div>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="eyebrow light"><i /> GIẢI PHÁP ĐIỆN CÔNG NGHIỆP</div>
          <h1>Vận hành ổn định.<br />Phản ứng <span>24/7.</span></h1>
          <p>Tư vấn, thiết kế, thi công và bảo trì hệ thống điện công nghiệp trọn gói — an toàn, đúng chuẩn, không gián đoạn sản xuất.</p>
          <div className="hero-actions"><a className="button orange" href="tel:0888979111">☎ Gọi kỹ sư 0888.979.111</a><button className="button white" onClick={() => scrollTo('contact')}>Yêu cầu báo giá <b>→</b></button></div>
          <div className="trustline"><span>✓ Có mặt 30–60 phút</span><span>✓ Kỹ sư giàu kinh nghiệm</span><span>✓ Thiết bị chính hãng</span></div>
        </div>
      </section>

      <section className="stats-wrap"><div className="container stats">
        <div><strong>10<sup>+</sup></strong><span>Năm kinh nghiệm<small>Vững vàng & chuyên nghiệp</small></span></div><div><strong>24/7</strong><span>Hỗ trợ kỹ thuật<small>Kể cả ngày lễ, cuối tuần</small></span></div><div><strong>22kV</strong><span>Năng lực thi công<small>Trạm biến áp & hệ thống điện</small></span></div><div><strong>300<sup>+</sup></strong><span>Dự án thực tế<small>Nhà máy, KCN tại Đồng Nai</small></span></div>
      </div></section>

      <section className="section" id="services"><div className="container">
        <div className="section-head"><div><div className="eyebrow"><i /> NĂNG LỰC CỐT LÕI</div><h2>Giải pháp điện công nghiệp<br />toàn diện cho doanh nghiệp</h2></div><p>Một đầu mối xuyên suốt từ khảo sát, thiết kế đến thi công và bảo trì — giúp doanh nghiệp tiết kiệm thời gian, kiểm soát chi phí.</p></div>
        <div className="service-grid">{services.map((service, i) => <article className="service-card" key={service.title}><span className="card-no">0{i + 1}</span><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p><button onClick={() => scrollTo('contact')}>Khám phá dịch vụ <b>→</b></button></article>)}</div>
      </div></section>

      <section className="section blue-section" id="about"><div className="container about-grid">
        <div className="about-photo" style={{ backgroundImage: `url(${heroImg})` }}><div className="experience"><b>10+</b><span>năm đồng hành<br />cùng doanh nghiệp</span></div></div>
        <div className="about-copy"><div className="eyebrow light"><i /> VỀ ĐIỆN 24H ĐỒNG NAI</div><h2>Hiểu hệ thống.<br />Hiểu áp lực vận hành.</h2><p>Chúng tôi không chỉ lắp đặt thiết bị. Điện 24H giúp doanh nghiệp xây dựng một hệ thống điện an toàn, ổn định và sẵn sàng cho tăng trưởng.</p><ul>
          <li><b>01</b><span><strong>Đúng tiêu chuẩn kỹ thuật</strong>Thiết kế theo IEC, TCVN và yêu cầu ngành.</span></li><li><b>02</b><span><strong>Minh bạch từ đầu</strong>Báo giá rõ ràng, tiến độ và phạm vi cụ thể.</span></li><li><b>03</b><span><strong>Đồng hành sau bàn giao</strong>Bảo hành, bảo trì và xử lý sự cố 24/7.</span></li>
        </ul></div>
      </div></section>

      <section className="section" id="projects"><div className="container">
        <div className="section-head compact"><div><div className="eyebrow"><i /> DỰ ÁN TIÊU BIỂU</div><h2>Năng lực được chứng minh<br />bằng công trình thực tế</h2></div><button className="text-link">Xem tất cả dự án →</button></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><div className="project-img" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: project.pos }}><span>{project.tag}</span></div><div><h3>{project.title}</h3><p>⌖ {project.meta}</p><button>Chi tiết dự án →</button></div></article>)}</div>
      </div></section>

      <section className="process section" id="process"><div className="container">
        <div className="center-head"><div className="eyebrow"><i /> QUY TRÌNH LÀM VIỆC</div><h2>Nhanh chóng. Rõ ràng. Trách nhiệm.</h2></div>
        <div className="process-line">{['Tiếp nhận yêu cầu', 'Khảo sát hiện trường', 'Đề xuất giải pháp', 'Thi công & lắp đặt', 'Nghiệm thu & bàn giao'].map((x, i) => <div key={x}><b>0{i + 1}</b><span>{['☎', '⌖', '▤', '⚙', '✓'][i]}</span><h3>{x}</h3><p>{['Phản hồi trong 15 phút', 'Đánh giá thực tế', 'Báo giá minh bạch', 'An toàn, đúng tiến độ', 'Hồ sơ đầy đủ'][i]}</p></div>)}</div>
      </div></section>

      <section className="section quote-section" id="contact"><div className="container quote-grid">
        <div className="quote-copy"><div className="eyebrow light"><i /> TƯ VẤN MIỄN PHÍ</div><h2>Bạn đang có dự án<br />cần triển khai?</h2><p>Gửi yêu cầu để nhận tư vấn kỹ thuật và báo giá sơ bộ trong vòng 24 giờ.</p><div className="contact-points"><span>☎ <b>0888.979.111</b></span><span>✉ <b>contact@dien24h.vn</b></span></div></div>
        <form onSubmit={e => { e.preventDefault(); setSent(true) }}><h3>{sent ? 'Đã nhận yêu cầu!' : 'Yêu cầu báo giá nhanh'}</h3>{sent ? <div className="success">✓ Cảm ơn bạn. Kỹ sư Điện 24H sẽ liên hệ trong vòng 15 phút.</div> : <><div className="form-row"><label>Họ và tên<input required placeholder="Nguyễn Văn A" /></label><label>Số điện thoại<input required type="tel" placeholder="09xx xxx xxx" /></label></div><label>Nhu cầu<select defaultValue=""><option value="" disabled>Chọn hạng mục cần tư vấn</option><option>Trạm biến áp</option><option>Điện nhà xưởng</option><option>Tủ điện công nghiệp</option><option>Sửa chữa sự cố</option></select></label><label>Mô tả ngắn<textarea placeholder="Công suất, địa điểm, thời gian dự kiến..." /></label><button className="button orange submit">GỬI YÊU CẦU BÁO GIÁ →</button></>}</form>
      </div></section>

      <section className="section faq-section"><div className="container faq-grid">
        <div><div className="eyebrow"><i /> CÂU HỎI THƯỜNG GẶP</div><h2>Thông tin bạn<br />có thể cần</h2><p>Chưa tìm thấy câu trả lời? Hãy gọi cho đội kỹ thuật để được tư vấn trực tiếp.</p></div>
        <div className="faqs">{faqs.map(([q, a], i) => <button key={q} onClick={() => setActiveFaq(activeFaq === i ? null : i)} className={activeFaq === i ? 'active' : ''}><span>{q}<b>{activeFaq === i ? '−' : '+'}</b></span>{activeFaq === i && <p>{a}</p>}</button>)}</div>
      </div></section>

      <footer><div className="container footer-grid">
        <div><div className="logo footer-logo"><span>Điện</span> <em>24H</em><small>ĐỒNG NAI</small></div><p>Giải pháp điện công nghiệp an toàn, tin cậy, đồng hành cùng doanh nghiệp.</p></div>
        <div><h4>Liên kết nhanh</h4><button onClick={() => scrollTo('services')}>Dịch vụ</button><button onClick={() => scrollTo('projects')}>Dự án</button><button onClick={() => scrollTo('about')}>Về chúng tôi</button></div>
        <div><h4>Liên hệ</h4><p>Trảng Dài, TP. Biên Hòa<br />contact@dien24h.vn<br />T2 – T7: 07:30 – 17:30</p></div><div><h4>Hotline 24/7</h4><a className="hotline footer-hotline" href="tel:0888979111">☎ 0888.979.111</a></div>
      </div><div className="container copyright">© 2026 Điện 24H Đồng Nai. All rights reserved.</div></footer>
    </main>
  )
}

export default App
