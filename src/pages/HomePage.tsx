import type { ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Clock3,
  Factory,
  FileText,
  MapPinned,
  PackageCheck,
  PhoneCall,
  Power,
  ShieldCheck,
  Sun,
  UserCog,
  UtilityPole,
  Wrench,
} from 'lucide-react'
import type { Navigate } from '../App'
import heroImg from '../assets/dien24h-hero.png'
import serviceSheet from '../assets/service-grid-v2.png'
import projectSheet from '../assets/project-grid-v2.png'
import productSheet from '../assets/product-grid-v2.png'
import engineerImg from '../assets/engineer-form-v2.png'

type IconType = (props: { size?: number; strokeWidth?: number; className?: string }) => ReactNode

const services: [IconType, string, string, string, string][] = [
  [UtilityPole, 'Đường dây & trạm biến áp', 'Tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp.', 'sg-1', '/dich-vu/tram-bien-ap'],
  [Wrench, 'Sửa chữa điện 24H', 'Xử lý chập điện, cháy điện, mất pha, cân pha, đảo pha và sự cố điện nhà xưởng, dân dụng.', 'sg-2', '/dich-vu/sua-chua-dien-24h'],
  [PackageCheck, 'Thiết bị điện 24H', 'Cung cấp tận nơi và lắp đặt thiết bị chiếu sáng, đóng cắt, tủ điện điều khiển.', 'sg-3', '/dich-vu/dien-cong-nghiep'],
  [Sun, 'Solar 24H', 'Tư vấn và thi công điện mặt trời hòa lưới, bám tải hoặc có lưu trữ.', 'sg-4', '/dich-vu/solar'],
  [ShieldCheck, 'Chống sét 24H', 'Thi công chống sét trực tiếp, lan truyền, tiếp địa và đo điện trở đất.', 'sg-5', '/dich-vu/chong-set'],
  [Power, 'Máy phát điện 24H', 'Cho thuê, cung cấp máy mới hoặc đã qua sử dụng và bảo trì định kỳ.', 'sg-6', '/dich-vu/may-phat-dien'],
]

const customerNeeds = [
  ['Nhà máy & khu công nghiệp', 'Đường dây & trạm biến áp', 'Nguồn điện ổn định cho sản xuất', 'pg-1', '/dich-vu/tram-bien-ap'],
  ['Nhà xưởng & doanh nghiệp', 'Sửa chữa điện 24H', 'Giảm thời gian gián đoạn sản xuất', 'pg-2', '/dich-vu/sua-chua-dien-24h'],
  ['Hộ kinh doanh & nhà ở', 'Chống sét & tiếp địa', 'Bảo vệ công trình và thiết bị điện', 'pg-3', '/dich-vu/chong-set'],
]

const products = [
  ['Máy biến áp 22 kV', 'pd-1'],
  ['Dây cáp hạ thế & trung thế', 'pd-2'],
  ['Thiết bị đóng cắt', 'pd-3'],
  ['Tủ điện & tủ tụ bù', 'pd-4'],
]

const assurances: [IconType, string, string][] = [
  [UserCog, 'Hơn 10 năm kinh nghiệm', 'Đội ngũ kỹ thuật viên lành nghề.'],
  [Clock3, 'Luôn sẵn sàng 24/7', 'Túc trực xử lý sự cố cả ngày lẫn đêm.'],
  [PackageCheck, 'Cung cấp tận công trình', 'Giao thiết bị và lắp đặt trọn gói.'],
  [ShieldCheck, 'Bảo hành tại chỗ', 'Hỗ trợ trực tiếp tại địa điểm khách hàng.'],
]

export function HomePage({ navigate }: { navigate: Navigate }) {
  return <div className="home-v2">
    <section className="hv2-hero" style={{ backgroundImage: `url(${heroImg})` }} aria-labelledby="home-hero-title">
      <div className="hv2-hero-overlay" />
      <div className="hv2-container hv2-hero-inner">
        <span className="hv2-eyebrow hv2-eyebrow-light">Hơn 10 năm kinh nghiệm thực tế</span>
        <h1 id="home-hero-title">Giải pháp điện <span>công nghiệp & dân dụng</span></h1>
        <p>Tư vấn, thiết kế, thi công, lắp đặt, sửa chữa và bảo trì hệ thống điện tại Biên Hòa – Đồng Nai.</p>
        <div className="hv2-hero-actions">
          <a className="hv2-button hv2-button-primary" href="tel:0888979111"><PhoneCall size={19} /> Gọi kỹ thuật 0888.979.111</a>
          <button className="hv2-button hv2-button-light" type="button" onClick={() => navigate('/lien-he')}><FileText size={19} /> Đăng ký tư vấn</button>
        </div>
      </div>
    </section>

    <section className="hv2-container hv2-stats" aria-label="Năng lực nổi bật">
      {[
        [Clock3, '24/7', 'Túc trực xử lý sự cố'],
        [ClipboardCheck, '6 nhóm', 'Dịch vụ điện chính'],
        [Factory, 'Nhà máy & KCN', 'Nhóm khách hàng'],
        [MapPinned, 'Đồng Nai', 'Hoạt động tại Biên Hòa'],
      ].map(([Icon, value, label]) => <div key={String(label)}>
        <Icon size={30} strokeWidth={1.7} />
        <span><strong>{String(value)}</strong><small>{String(label)}</small></span>
      </div>)}
    </section>

    <section className="hv2-section hv2-intro-section" aria-labelledby="home-intro-title">
      <div className="hv2-container hv2-intro">
        <div className="hv2-intro-media"><img src={engineerImg} alt="Hình minh họa kỹ thuật viên làm việc tại hệ thống tủ điện" width="1024" height="1536" loading="lazy" decoding="async" /></div>
        <div className="hv2-intro-content">
          <span className="hv2-eyebrow">Điện 24H Đồng Nai</span>
          <h2 id="home-intro-title">Giải pháp toàn diện cho hệ thống điện</h2>
          <p>Điện 24H cung cấp dịch vụ tư vấn, thiết kế, thi công, lắp đặt, sửa chữa, bảo trì và thí nghiệm hệ thống điện. Đội ngũ kỹ thuật viên lành nghề phục vụ nhà máy, nhà xưởng, doanh nghiệp, hộ kinh doanh và khách hàng dân dụng.</p>
          <button className="hv2-text-link" type="button" onClick={() => navigate('/gioi-thieu')}>Tìm hiểu về Điện 24H <ArrowRight size={18} /></button>
        </div>
      </div>
    </section>

    <section className="hv2-section hv2-services-section" aria-labelledby="home-services-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-center">
          <span className="hv2-eyebrow">Dịch vụ</span>
          <h2 id="home-services-title">Giải pháp đúng với nhu cầu công trình</h2>
          <p>Từ nguồn trung thế đến hệ thống phân phối, bảo trì và xử lý sự cố tại công trình.</p>
        </div>
        <div className="hv2-services">
          {services.map(([Icon, title, text, crop, href]) => <article key={title}>
            <div className={`hv2-photo hv2-service-photo ${crop}`} style={{ backgroundImage: `url(${serviceSheet})` }} aria-hidden="true">
              <span><Icon size={25} strokeWidth={1.7} /></span>
            </div>
            <div className="hv2-service-body">
              <h3>{title}</h3>
              <p>{text}</p>
              <button type="button" onClick={() => navigate(href)}>Xem chi tiết <ArrowRight size={17} /></button>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="hv2-section hv2-projects-section" aria-labelledby="home-projects-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-row">
          <div><span className="hv2-eyebrow">Khách hàng phục vụ</span><h2 id="home-projects-title">Giải pháp theo từng nhu cầu sử dụng</h2></div>
          <button className="hv2-text-link" type="button" onClick={() => navigate('/lien-he')}>Tư vấn nhu cầu phù hợp <ArrowRight size={18} /></button>
        </div>
        <div className="hv2-project-grid">
          {customerNeeds.map(([title, scope, need, crop, href]) => <button key={title} type="button" onClick={() => navigate(href)}>
            <span className={`hv2-photo hv2-project-photo ${crop}`} style={{ backgroundImage: `url(${projectSheet})` }}><em>Hình minh họa</em></span>
            <span className="hv2-project-copy"><small>{scope}</small><strong>{title}</strong><span>{need}</span></span>
            <ArrowUpRight className="hv2-project-arrow" size={20} />
          </button>)}
        </div>
      </div>
    </section>

    <section className="hv2-section hv2-products-section" aria-labelledby="home-products-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-row hv2-section-head-compact">
          <div><h2 id="home-products-title">Danh mục thiết bị điện</h2></div>
          <button className="hv2-text-link" type="button" onClick={() => navigate('/san-pham')}>Xem tất cả sản phẩm <ArrowRight size={18} /></button>
        </div>
        <div className="hv2-product-grid">
          {products.map(([title, crop]) => <button key={title} type="button" onClick={() => navigate('/san-pham')}>
            <span className={`hv2-photo hv2-product-photo ${crop}`} style={{ backgroundImage: `url(${productSheet})` }} aria-hidden="true" />
            <span><strong>{title}</strong><ArrowRight size={18} /></span>
          </button>)}
        </div>
      </div>
    </section>

    <section className="hv2-section hv2-assurance-section" aria-labelledby="home-assurance-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-row hv2-section-head-compact">
          <div><h2 id="home-assurance-title">Lý do lựa chọn Điện 24H</h2></div>
          <button className="hv2-text-link" type="button" onClick={() => navigate('/gioi-thieu')}>Tìm hiểu về Điện 24H <ArrowRight size={18} /></button>
        </div>
        <div className="hv2-assurances">
          {assurances.map(([Icon, title, text]) => <article key={title}>
            <Icon size={30} strokeWidth={1.7} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="hv2-cta-section" aria-labelledby="home-cta-title">
      <div className="hv2-container hv2-cta">
        <div>
          <span className="hv2-eyebrow hv2-eyebrow-light">Đăng ký tư vấn</span>
          <h2 id="home-cta-title">Cần xử lý sự cố hoặc tư vấn giải pháp điện?</h2>
          <p>Để lại thông tin để đội kỹ thuật Điện 24H liên hệ hỗ trợ.</p>
        </div>
        <div className="hv2-cta-actions">
          <a className="hv2-button hv2-button-primary" href="tel:0888979111"><PhoneCall size={19} /> 0888.979.111</a>
          <button className="hv2-button hv2-button-outline-light" type="button" onClick={() => navigate('/lien-he')}>Đăng ký tư vấn</button>
        </div>
      </div>
    </section>
  </div>
}
