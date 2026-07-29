import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import {
  Award, BadgeCheck, BadgeDollarSign, BriefcaseBusiness, Building2, CircuitBoard,
  ClipboardList, Clock3, Download, Factory, FileText, Handshake, HardHat, Headphones,
  Medal, Minus, PackageCheck, PhoneCall, Plus, Power, Quote, Search, Send,
  Shield, ShieldCheck, Sun, UserCog, UtilityPole, Wrench, Zap,
} from 'lucide-react'
import type { Navigate } from '../App'
import heroImg from '../assets/dien24h-hero.png'
import serviceSheet from '../assets/service-grid-v2.png'
import projectSheet from '../assets/project-grid-v2.png'
import productSheet from '../assets/product-grid-v2.png'
import engineerImg from '../assets/engineer-form-v2.png'
import { CustomSelect } from '../components/CustomSelect'

type IconType = (props: { size?: number; strokeWidth?: number; className?: string }) => ReactNode

const services: [IconType, string, string, string, string][] = [
  [UtilityPole, 'Trạm biến áp', 'Tư vấn, thiết kế, thi công trạm biến áp 22kV/0.4kV đạt chuẩn EVN.', 'sg-1', '/dich-vu/tram-bien-ap'],
  [Wrench, 'Sửa chữa điện 24H', 'Xử lý sự cố nhanh chóng, khắc phục mất điện, chập cháy, nhảy Aptomat...', 'sg-2', '/dich-vu/sua-chua-dien-24h'],
  [Factory, 'Điện nhà xưởng', 'Thi công hệ thống điện nhà xưởng, chiếu sáng, MCC, tủ điện phân phối.', 'sg-3', '/dich-vu/dien-cong-nghiep'],
  [CircuitBoard, 'Thiết bị điện', 'Cung cấp thiết bị điện chính hãng, CO–CQ đầy đủ.', 'sg-4', '/san-pham'],
  [Sun, 'Solar', 'Giải pháp điện mặt trời cho nhà máy, doanh nghiệp.', 'sg-5', '/dich-vu/solar'],
  [Power, 'Máy phát điện', 'Cung cấp, lắp đặt và bảo trì máy phát điện dự phòng cho nhà máy.', 'sg-6', '/dich-vu/may-phat-dien'],
]

const projects = [
  ['Nhà máy giày Dona Standard', 'Trạm biến áp 1600kVA · Biên Hòa', 'pg-1'],
  ['Nhà máy AMATA', 'Thi công hệ thống điện nhà xưởng', 'pg-2'],
  ['Nhà máy SLP Vietnam', 'Tủ điện MSB, DB & hệ thống MCC', 'pg-3'],
  ['Kho lạnh CJ Logistics', 'Thi công trạm biến áp 1000kVA', 'pg-4'],
]

const products = [
  ['Máy biến áp', 'pd-1'],
  ['Dây cáp điện', 'pd-2'],
  ['Thiết bị đóng cắt', 'pd-3'],
  ['Tủ điện & tủ tụ bù', 'pd-4'],
]

const faqs = [
  ['Thời gian có mặt khi sự cố là bao lâu?', 'Tại Biên Hòa, đội kỹ thuật có thể có mặt sau 30–60 phút tùy vị trí.'],
  ['Điện 24H có làm việc vào ban đêm và ngày lễ không?', 'Có. Hotline kỹ thuật tiếp nhận yêu cầu 24/7, kể cả cuối tuần và ngày lễ.'],
  ['Các khu vực phục vụ của Điện 24H?', 'Biên Hòa, các khu công nghiệp tại Đồng Nai và khu vực lân cận.'],
  ['Chính sách bảo hành như thế nào?', 'Hạng mục thi công và thiết bị được bảo hành theo hợp đồng.'],
  ['Có cung cấp thiết bị điện chính hãng không?', 'Có. Thiết bị có đầy đủ hồ sơ xuất xứ, CO–CQ theo phạm vi cung cấp.'],
]

const homeNeedOptions = [
  'Khảo sát & báo giá',
  'Sửa chữa sự cố',
  'Mua thiết bị điện',
]

export function HomePage({ navigate }: { navigate: Navigate }) {
  const [faq, setFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true) }

  return <div className="home-v2">
    <section className="hv2-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hv2-hero-overlay" />
      <div className="hv2-container hv2-hero-inner">
        <h1>Giải pháp<br />điện công nghiệp <span>24/7</span></h1>
        <p>Chuyên thi công trạm biến áp, điện nhà xưởng,<br />sửa chữa sự cố 24/7 và cung cấp thiết bị điện<br />cho nhà máy, khu công nghiệp tại Đồng Nai.</p>
        <div className="hv2-hero-actions">
          <a href="tel:0888979111"><PhoneCall size={17} /> Gọi kỹ sư 0888.979.111</a>
          <button onClick={() => navigate('/lien-he')}><FileText size={17} /> Yêu cầu báo giá</button>
        </div>
        <div className="hv2-proof-row">
          {[
            [ShieldCheck, 'Có mặt nhanh', '30 – 60 phút'],
            [UserCog, 'Kỹ sư', 'kinh nghiệm'],
            [BadgeCheck, 'An toàn tuyệt đối', 'Đúng tiêu chuẩn'],
            [Shield, 'Bảo hành', 'Uy tín dài hạn'],
          ].map(([Icon, title, sub]) => <div key={String(title)}><Icon size={26} strokeWidth={1.8} /><span><b>{String(title)}</b><small>{String(sub)}</small></span></div>)}
        </div>
      </div>
    </section>

    <section className="hv2-container hv2-kpis">
      {[
        [Award, '10+', 'năm kinh nghiệm', 'Trong lĩnh vực điện công nghiệp'],
        [Clock3, '24/7', 'hỗ trợ sự cố', 'Kể cả ngày lễ, cuối tuần'],
        [Zap, '22kV', 'năng lực thi công', 'Trạm biến áp & hệ thống điện'],
        [BriefcaseBusiness, '300+', 'Dự án thực tế', 'Nhà máy, KCN tại Đồng Nai'],
      ].map(([Icon, number, label, sub]) => <article key={String(number)}><Icon size={43} strokeWidth={1.6} /><div><strong>{String(number)}</strong><b>{String(label)}</b><small>{String(sub)}</small></div></article>)}
    </section>

    <section className="hv2-container hv2-section hv2-services-section">
      <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
      <div className="hv2-services">
        {services.map(([Icon, title, text, crop, href]) => <article key={title}>
          <div className={`hv2-photo hv2-service-photo ${crop}`} style={{ backgroundImage: `url(${serviceSheet})` }}><span><Icon size={23} strokeWidth={1.8} /></span></div>
          <div className="hv2-service-body"><h3>{title}</h3><p>{text}</p><button aria-label={`Xem ${title}`} onClick={() => navigate(href)}>››</button></div>
        </article>)}
      </div>
    </section>

    <section className="hv2-container hv2-feature-row">
      <div className="hv2-project-panel">
        <div className="hv2-panel-title"><h2>DỰ ÁN TIÊU BIỂU</h2><button onClick={() => navigate('/du-an')}>Xem tất cả dự án →</button></div>
        <div className="hv2-project-grid">
          {projects.map(([title, sub, crop]) => <article key={title}>
            <div className={`hv2-photo hv2-project-photo ${crop}`} style={{ backgroundImage: `url(${projectSheet})` }} />
            <h3>{title}</h3><p>{sub}</p><button onClick={() => navigate('/du-an')}>Xem chi tiết <span>→</span></button>
          </article>)}
        </div>
      </div>
      <div className="hv2-product-panel">
        <div className="hv2-panel-title"><h2>SẢN PHẨM NỔI BẬT</h2><button onClick={() => navigate('/san-pham')}>Xem tất cả →</button></div>
        <div className="hv2-product-grid">
          {products.map(([title, crop]) => <article key={title}><div className={`hv2-photo hv2-product-photo ${crop}`} style={{ backgroundImage: `url(${productSheet})` }} /><b>{title}</b></article>)}
        </div>
      </div>
    </section>

    <section className="hv2-container hv2-section hv2-process-section">
      <h2>QUY TRÌNH LÀM VIỆC NHANH CHÓNG - MINH BẠCH</h2>
      <div className="hv2-process">
        {[
          [Headphones, '01', 'Tiếp nhận yêu cầu', 'Tiếp nhận thông tin 24/7 qua hotline.'],
          [Search, '02', 'Khảo sát hiện trường', 'Kỹ sư khảo sát, đánh giá hiện trạng.'],
          [ClipboardList, '03', 'Báo giá chi tiết', 'Đề xuất giải pháp tối ưu, báo giá minh bạch.'],
          [HardHat, '04', 'Thi công - Lắp đặt', 'Thi công an toàn, đúng tiến độ.'],
          [ShieldCheck, '05', 'Bàn giao - Bảo hành', 'Nghiệm thu, bàn giao và bảo hành uy tín.'],
        ].map(([Icon, n, title, text]) => <article key={String(n)}><Icon size={41} strokeWidth={1.7} /><div><strong>{String(n)}</strong><h3>{String(title)}</h3><p>{String(text)}</p></div></article>)}
      </div>
    </section>

    <section className="hv2-container hv2-section hv2-why-section">
      <h2>VÌ SAO CHỌN ĐIỆN 24H</h2>
      <div className="hv2-why">
        {[
          [Zap, 'Phản ứng nhanh 24/7', 'Có mặt nhanh chóng 30 – 60 phút.'],
          [UserCog, 'Kỹ sư chuyên môn cao', 'Đội ngũ giàu kinh nghiệm, đào tạo bài bản.'],
          [ShieldCheck, 'An toàn tuyệt đối', 'Thi công đúng tiêu chuẩn EVN & ISO.'],
          [PackageCheck, 'Thiết bị chính hãng', 'CO–CQ đầy đủ, nguồn gốc rõ ràng.'],
          [BadgeDollarSign, 'Giá cả cạnh tranh', 'Giải pháp tối ưu chi phí hiệu quả lâu dài.'],
          [Handshake, 'Bảo hành uy tín', 'Hậu mãi chu đáo, hỗ trợ tận tâm.'],
        ].map(([Icon, title, text], i) => <article key={String(title)} className={i === 0 || i === 4 ? 'accent' : ''}><Icon size={35} strokeWidth={1.7} /><b>{String(title)}</b><p>{String(text)}</p></article>)}
      </div>
    </section>

    <section className="hv2-container hv2-trust-row">
      <article className="hv2-capacity"><h2>NĂNG LỰC & NIỀM TIN</h2>{[
        [FileText, 'Hồ sơ năng lực', 'Tài liệu hồ sơ năng lực chi tiết'],
        [Medal, 'Chứng chỉ & chứng nhận', 'Đầy đủ chứng chỉ hành nghề, an toàn lao động.'],
        [Building2, 'Dự án thực tế', '300+ dự án nhà máy, KCN đã triển khai thành công.'],
      ].map(([Icon, title, text]) => <div key={String(title)}><Icon size={27} /><span><b>{String(title)}</b><small>{String(text)}</small></span><Download size={18} /></div>)}</article>
      <article className="hv2-partners"><h2>ĐỐI TÁC - THƯƠNG HIỆU CHÚNG TÔI PHÂN PHỐI</h2><div><b className="schneider">Schneider<br /><small>Electric</small></b><b className="abb">ABB</b><b className="siemens">SIEMENS</b><b className="mitsubishi">MITSUBISHI<br /><small>ELECTRIC</small></b><b className="ls">LS<small> ELECTRIC</small></b><b className="hyundai">HYUNDAI<br /><small>ELECTRIC</small></b></div></article>
      <article className="hv2-testimonial"><h2>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h2><Quote size={27} fill="currentColor" /><p>Điện 24H hỗ trợ rất nhanh khi nhà máy chúng tôi gặp sự cố mất điện. Đội ngũ kỹ sư chuyên nghiệp, xử lý triệt để vấn đề và tư vấn giải pháp rất hiệu quả.</p><div className="hv2-client"><span>NH</span><div><b>Ông Nguyễn Văn Hùng</b><small>Giám đốc kỹ thuật - Nhà máy AMATA</small></div></div><div className="hv2-dots"><i /><i /><i /><i /></div></article>
    </section>

    <section className="hv2-container hv2-bottom-row">
      <div className="hv2-faq"><h2>CÂU HỎI THƯỜNG GẶP</h2>{faqs.map(([q, a], i) => <button className={faq === i ? 'open' : ''} onClick={() => setFaq(faq === i ? null : i)} key={q}><span>{q}{faq === i ? <Minus size={16} /> : <Plus size={16} />}</span>{faq === i && <p>{a}</p>}</button>)}</div>
      <form className="hv2-quote-form" onSubmit={submit}><h2>YÊU CẦU BÁO GIÁ NHANH</h2><p>Vui lòng để lại thông tin, chúng tôi sẽ liên hệ và báo giá trong thời gian sớm nhất!</p>{sent ? <div className="hv2-success">Đã tiếp nhận yêu cầu. Kỹ sư Điện 24H sẽ liên hệ sớm nhất.</div> : <>
        <div className="hv2-form-grid">
          <input required placeholder="Họ tên *" />
          <input required type="tel" placeholder="Số điện thoại *" />
          <CustomSelect
            label="Nhu cầu *"
            hideLabel
            name="need"
            required
            placeholder="Nhu cầu *"
            options={homeNeedOptions}
          />
          <input placeholder="Địa điểm *" />
        </div>
        <textarea placeholder="Ghi chú thêm (nếu có)" />
        <button>GỬI YÊU CẦU BÁO GIÁ <Send size={15} /></button>
      </>}</form>
      <div className="hv2-engineer" style={{ backgroundImage: `url(${engineerImg})` }}><div><span>Tư vấn miễn phí<br /><b>100%</b></span><span>Báo giá nhanh<br /><b>&lt; 2 giờ</b></span><span>Hỗ trợ 24/7<br /><b>0888.979.111</b></span></div></div>
    </section>
  </div>
}
