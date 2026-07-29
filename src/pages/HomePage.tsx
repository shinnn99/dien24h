import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Navigate } from '../App'
import heroImg from '../assets/dien24h-hero.png'

const services = [
  ['⚡', 'Trạm biến áp', 'Tư vấn, thiết kế, thi công trạm biến áp 22kV/0.4kV đạt chuẩn EVN.', '72% 44%'],
  ['🛠', 'Sửa chữa điện 24H', 'Xử lý sự cố nhanh chóng, khắc phục mất điện, chập cháy, nhảy Aptomat...', '58% 47%'],
  ['▦', 'Điện nhà xưởng', 'Thi công hệ thống điện nhà xưởng, chiếu sáng, MCC, tủ điện phân phối.', '86% 48%'],
  ['▤', 'Thiết bị điện', 'Cung cấp thiết bị điện chính hãng, CO–CQ đầy đủ.', '91% 36%'],
  ['☀', 'Solar', 'Giải pháp điện mặt trời cho nhà máy, doanh nghiệp.', '14% 48%'],
  ['▣', 'Máy phát điện', 'Cung cấp, lắp đặt và bảo trì máy phát điện dự phòng.', '68% 54%'],
]

const projects = [
  ['Nhà máy giày Dona Standard', 'Trạm biến áp 1600kVA · Biên Hòa', '73% 42%'],
  ['Nhà máy AMATA', 'Thi công hệ thống điện nhà xưởng', '52% 52%'],
  ['Nhà máy SLP Vietnam', 'Tủ điện MSB, DB & hệ thống MCC', '88% 51%'],
  ['Kho lạnh CJ Logistics', 'Thi công trạm biến áp 1000kVA', '67% 56%'],
]

const products = [
  ['Máy biến áp', '73% 42%'],
  ['Dây cáp điện', '28% 45%'],
  ['Thiết bị đóng cắt', '90% 39%'],
  ['Tủ điện & tủ tụ bù', '84% 54%'],
]

const faqs = [
  ['Thời gian có mặt khi sự cố là bao lâu?', 'Tại Biên Hòa, đội kỹ thuật có thể có mặt sau 30–60 phút tùy vị trí và tình trạng giao thông.'],
  ['Điện 24H có làm việc vào ban đêm và ngày lễ không?', 'Có. Hotline kỹ thuật tiếp nhận yêu cầu 24/7, kể cả cuối tuần và ngày lễ.'],
  ['Các khu vực phục vụ của Điện 24H?', 'Biên Hòa, các khu công nghiệp tại Đồng Nai và khu vực lân cận.'],
  ['Chính sách bảo hành như thế nào?', 'Hạng mục thi công và thiết bị được bảo hành theo hợp đồng và chính sách của nhà sản xuất.'],
  ['Có cung cấp thiết bị điện chính hãng không?', 'Có. Thiết bị có đầy đủ hồ sơ xuất xứ, CO–CQ theo phạm vi cung cấp.'],
]

export function HomePage({ navigate }: { navigate: Navigate }) {
  const [faq, setFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true) }

  return <>
    <section className="ref-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="ref-hero-shade" />
      <div className="container ref-hero-content">
        <h1>Giải pháp<br />điện công nghiệp <span>24/7</span></h1>
        <p>Chuyên thi công trạm biến áp, điện nhà xưởng,<br className="desktop-only" /> sửa chữa sự cố 24/7 và cung cấp thiết bị điện<br className="desktop-only" /> cho nhà máy, khu công nghiệp tại Đồng Nai.</p>
        <div className="ref-actions">
          <a className="ref-btn orange" href="tel:0888979111">☎ &nbsp; Gọi kỹ sư 0888.979.111</a>
          <button className="ref-btn white" onClick={() => navigate('/lien-he')}>✉ &nbsp; Yêu cầu báo giá</button>
        </div>
        <div className="ref-proofs">
          <div><b>✓</b><span>Có mặt nhanh<br /><small>30 – 60 phút</small></span></div>
          <div><b>♙</b><span>Kỹ sư<br /><small>kinh nghiệm</small></span></div>
          <div><b>✦</b><span>An toàn tuyệt đối<br /><small>Đúng tiêu chuẩn</small></span></div>
          <div><b>◇</b><span>Bảo hành<br /><small>Uy tín dài hạn</small></span></div>
        </div>
      </div>
    </section>

    <div className="container ref-stats">
      {[['♕','10+','năm kinh nghiệm','Trong lĩnh vực điện công nghiệp'],['◴','24/7','hỗ trợ sự cố','Kể cả ngày lễ, cuối tuần'],['ϟ','22kV','năng lực thi công','Trạm biến áp & hệ thống điện'],['▱','300+','Dự án thực tế','Nhà máy, KCN tại Đồng Nai']].map(([icon,num,label,sub]) =>
        <div key={num}><i>{icon}</i><span><b>{num}</b><strong>{label}</strong><small>{sub}</small></span></div>)}
    </div>

    <section className="ref-section container">
      <h2 className="ref-heading">DỊCH VỤ CỦA CHÚNG TÔI</h2>
      <div className="ref-services">
        {services.map(([icon,title,text,pos]) => <article key={title}>
          <div className="ref-card-photo" style={{ backgroundImage:`url(${heroImg})`, backgroundPosition:pos }}><i>{icon}</i></div>
          <h3>{title}</h3><p>{text}</p><button onClick={() => navigate('/dich-vu/dien-cong-nghiep')}>››</button>
        </article>)}
      </div>
    </section>

    <section className="container ref-duo">
      <div className="ref-projects">
        <div className="ref-title-row"><h2>DỰ ÁN TIÊU BIỂU</h2><button onClick={() => navigate('/du-an')}>Xem tất cả dự án →</button></div>
        <div className="ref-project-grid">{projects.map(([title,sub,pos]) => <article key={title}>
          <div style={{ backgroundImage:`url(${heroImg})`, backgroundPosition:pos }} />
          <h3>{title}</h3><p>{sub}</p><button onClick={() => navigate('/du-an')}>Xem chi tiết &nbsp;→</button>
        </article>)}</div>
      </div>
      <div className="ref-products">
        <div className="ref-title-row"><h2>SẢN PHẨM NỔI BẬT</h2><button onClick={() => navigate('/san-pham')}>Xem tất cả →</button></div>
        <div className="ref-product-grid">{products.map(([title,pos]) => <article key={title}><div style={{backgroundImage:`url(${heroImg})`,backgroundPosition:pos}} /><b>{title}</b></article>)}</div>
      </div>
    </section>

    <section className="ref-section container">
      <h2 className="ref-heading">QUY TRÌNH LÀM VIỆC NHANH CHÓNG - MINH BẠCH</h2>
      <div className="ref-process">{[
        ['01','◉','Tiếp nhận yêu cầu','Tiếp nhận thông tin 24/7 qua hotline.'],
        ['02','▧','Khảo sát hiện trường','Kỹ sư khảo sát, đánh giá hiện trạng.'],
        ['03','▤','Báo giá chi tiết','Đề xuất giải pháp tối ưu, báo giá minh bạch.'],
        ['04','♙','Thi công - Lắp đặt','Thi công an toàn, đúng tiến độ.'],
        ['05','◇','Bàn giao - Bảo hành','Nghiệm thu, bàn giao và bảo hành uy tín.'],
      ].map(([n,icon,title,text]) => <article key={n}><i>{icon}</i><div><b>{n}</b><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>

    <section className="container ref-why">
      <h2 className="ref-heading">VÌ SAO CHỌN ĐIỆN 24H</h2>
      <div>{[['ϟ','Phản ứng nhanh 24/7','Có mặt nhanh chóng 30 – 60 phút.'],['♧','Kỹ sư chuyên môn cao','Đội ngũ giàu kinh nghiệm, đào tạo bài bản.'],['◇','An toàn tuyệt đối','Thi công đúng tiêu chuẩn EVN & ISO.'],['◎','Thiết bị chính hãng','CO–CQ đầy đủ, nguồn gốc rõ ràng.'],['₫','Giá cả cạnh tranh','Giải pháp tối ưu chi phí hiệu quả lâu dài.'],['♢','Bảo hành uy tín','Hậu mãi chu đáo, hỗ trợ tận tâm.']].map(([icon,title,text]) =>
        <article key={title}><i>{icon}</i><b>{title}</b><p>{text}</p></article>)}</div>
    </section>

    <section className="container ref-trust">
      <article><h2>NĂNG LỰC & NIỀM TIN</h2>{[['▧','Hồ sơ năng lực'],['♙','Chứng chỉ & chứng nhận'],['▦','Dự án thực tế']].map(([i,t])=><div key={t}><i>{i}</i><span><b>{t}</b><small>Tài liệu minh chứng rõ ràng</small></span><em>⇩</em></div>)}</article>
      <article className="ref-brands"><h2>ĐỐI TÁC - THƯƠNG HIỆU CHÚNG TÔI PHÂN PHỐI</h2><div><b>Schneider</b><b>ABB</b><b>SIEMENS</b><b>MITSUBISHI</b><b>LS Electric</b><b>HYUNDAI</b></div></article>
      <article className="ref-testimonial"><h2>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2><blockquote>“<br />Điện 24H hỗ trợ rất nhanh khi nhà máy chúng tôi gặp sự cố mất điện. Đội ngũ kỹ sư chuyên nghiệp, xử lý triệt để vấn đề và tư vấn giải pháp rất hiệu quả.</blockquote><b>Ông Nguyễn Văn Hùng</b><small>Giám đốc kỹ thuật - Nhà máy AMATA</small></article>
    </section>

    <section className="container ref-bottom">
      <div className="ref-faq"><h2>CÂU HỎI THƯỜNG GẶP</h2>{faqs.map(([q,a],i)=><button className={faq===i?'open':''} onClick={()=>setFaq(faq===i?null:i)} key={q}><span>{q}<b>{faq===i?'−':'+'}</b></span>{faq===i&&<p>{a}</p>}</button>)}</div>
      <form className="ref-quote" onSubmit={submit}>
        <h2>YÊU CẦU BÁO GIÁ NHANH</h2><p>Vui lòng để lại thông tin, chúng tôi sẽ liên hệ và báo giá trong thời gian sớm nhất!</p>
        {sent ? <div className="ref-success">✓ Đã tiếp nhận yêu cầu. Kỹ sư Điện 24H sẽ liên hệ với bạn sớm nhất.</div> : <>
          <div className="ref-form-grid"><input required placeholder="Họ tên *" /><input required type="tel" placeholder="Số điện thoại *" /><select required defaultValue=""><option value="" disabled>Nhu cầu *</option><option>Khảo sát & báo giá</option><option>Sửa chữa sự cố</option><option>Mua thiết bị điện</option></select><input placeholder="Địa điểm *" /></div>
          <textarea placeholder="Ghi chú thêm (nếu có)" /><button>GỬI YÊU CẦU BÁO GIÁ &nbsp;➤</button>
        </>}
      </form>
      <div className="ref-engineer" style={{backgroundImage:`url(${heroImg})`}}><span>Tư vấn miễn phí<br /><b>100%</b></span><span>Báo giá nhanh<br /><b>&lt; 2 giờ</b></span><span>Hỗ trợ 24/7<br /><b>0888.979.111</b></span></div>
    </section>
  </>
}
