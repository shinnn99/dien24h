import type { ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Factory,
  FileText,
  HardHat,
  Headphones,
  MapPinned,
  Medal,
  PackageCheck,
  PhoneCall,
  Power,
  ScanSearch,
  ShieldCheck,
  Siren,
  Sun,
  Truck,
  UtilityPole,
  Wrench,
} from 'lucide-react'
import type { Navigate } from '../App'
import { FaqBlock, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import serviceSheet from '../assets/service-grid-v2.png'
import projectSheet from '../assets/project-grid-v2.png'
import productSheet from '../assets/product-grid-v2.png'
import engineerImg from '../assets/engineer-form-v2.png'
import lightningProtectionImg from '../assets/service-chong-set.webp'

type IconType = (props: { size?: number; strokeWidth?: number; className?: string }) => ReactNode
type ServiceItem = [IconType, string, string, string, string, string?]

const services: ServiceItem[] = [
  [UtilityPole, 'Đường dây & trạm biến áp', 'Tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp.', 'sg-1', '/dich-vu/tram-bien-ap'],
  [Wrench, 'Sửa chữa điện 24H', 'Xử lý chập điện, cháy điện, mất pha, cân pha, đảo pha và sự cố điện nhà xưởng, dân dụng.', 'sg-2', '/dich-vu/sua-chua-dien-24h'],
  [PackageCheck, 'Thiết bị điện 24H', 'Cung cấp tận nơi và lắp đặt thiết bị chiếu sáng, đóng cắt, tủ điện điều khiển.', 'sg-3', '/dich-vu/dien-cong-nghiep'],
  [Sun, 'Solar 24H', 'Tư vấn và thi công điện mặt trời hòa lưới, bám tải hoặc có lưu trữ.', 'sg-5', '/dich-vu/solar'],
  [ShieldCheck, 'Chống sét 24H', 'Thi công chống sét trực tiếp, lan truyền, tiếp địa và đo điện trở đất.', 'sg-cover sg-lightning', '/dich-vu/chong-set', lightningProtectionImg],
  [Power, 'Máy phát điện 24H', 'Cho thuê, cung cấp máy mới hoặc đã qua sử dụng và bảo trì định kỳ.', 'sg-6', '/dich-vu/may-phat-dien'],
]

const customerNeeds = [
  ['Nhà máy & khu công nghiệp', 'Đường dây & trạm biến áp', 'Nguồn điện ổn định cho sản xuất', 'pg-1', '/dich-vu/tram-bien-ap'],
  ['Nhà xưởng & doanh nghiệp', 'Sửa chữa điện 24H', 'Giảm thời gian gián đoạn sản xuất', 'pg-2', '/dich-vu/sua-chua-dien-24h'],
  ['Hộ kinh doanh & nhà ở', 'Chống sét & tiếp địa', 'Bảo vệ công trình và thiết bị điện', 'pg-3', '/dich-vu/chong-set'],
]

const products = [
  ['Máy biến áp 22 kV', 'pd-1', '/san-pham/may-bien-ap'],
  ['Dây cáp hạ thế & trung thế', 'pd-2', '/san-pham/day-cap-dien'],
  ['Thiết bị đóng cắt', 'pd-3', '/san-pham/thiet-bi-dong-cat'],
  ['Tủ điện & tủ tụ bù', 'pd-4', '/san-pham/tu-dien-tu-tu-bu'],
]

const workflowSteps: [IconType, string, string][] = [
  [Headphones, 'Tiếp nhận yêu cầu', 'Ghi nhận nhu cầu qua hotline hoặc biểu mẫu tư vấn.'],
  [ScanSearch, 'Khảo sát hiện trường', 'Kỹ thuật viên kiểm tra và đánh giá hiện trạng công trình.'],
  [ClipboardList, 'Đề xuất & báo giá', 'Thống nhất giải pháp, phạm vi triển khai và chi phí.'],
  [HardHat, 'Thi công & lắp đặt', 'Triển khai theo phương án và yêu cầu kỹ thuật đã thống nhất.'],
  [BadgeCheck, 'Bàn giao & bảo hành', 'Nghiệm thu, hướng dẫn vận hành và hỗ trợ sau bàn giao.'],
]

const assurances: [IconType, string, string, string][] = [
  [Medal, 'Hơn 10 năm kinh nghiệm', 'Đội ngũ kỹ thuật viên lành nghề.', 'Kinh nghiệm'],
  [Siren, 'Luôn sẵn sàng 24/7', 'Túc trực xử lý sự cố cả ngày lẫn đêm.', 'Phản ứng nhanh'],
  [Truck, 'Cung cấp tận công trình', 'Giao thiết bị và lắp đặt trọn gói.', 'Triển khai tận nơi'],
  [ShieldCheck, 'Bảo hành tại chỗ', 'Hỗ trợ trực tiếp tại địa điểm khách hàng.', 'Hỗ trợ sau bàn giao'],
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
          {services.map(([Icon, title, text, crop, href, image]) => <article key={title}>
            <div className={`hv2-photo hv2-service-photo ${crop}`} style={{ backgroundImage: `url(${image ?? serviceSheet})` }} aria-hidden="true">
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

    <section className="hv2-section hv2-workflow-section" aria-labelledby="home-workflow-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-center hv2-workflow-heading">
          <span className="hv2-eyebrow">Quy trình phối hợp</span>
          <h2 id="home-workflow-title">Quy trình làm việc nhanh chóng – minh bạch</h2>
          <p>Năm bước rõ ràng từ tiếp nhận nhu cầu đến bàn giao và hỗ trợ sau thi công.</p>
        </div>
        <ol className="hv2-workflow-grid">
          {workflowSteps.map(([Icon, title, text], index) => <li key={title}>
            <div className="hv2-workflow-meta">
              <span className="hv2-workflow-icon" aria-hidden="true"><Icon size={27} strokeWidth={1.8} /></span>
              <span className="hv2-workflow-number">Bước {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < workflowSteps.length - 1 && <span className="hv2-workflow-connector" aria-hidden="true"><ArrowRight size={16} strokeWidth={2.2} /></span>}
          </li>)}
        </ol>
      </div>
    </section>

    <section className="hv2-section hv2-products-section" aria-labelledby="home-products-title">
      <div className="hv2-container">
        <div className="hv2-section-head hv2-section-head-row hv2-section-head-compact">
          <div><h2 id="home-products-title">Danh mục thiết bị điện</h2></div>
          <button className="hv2-text-link" type="button" onClick={() => navigate('/san-pham')}>Xem tất cả sản phẩm <ArrowRight size={18} /></button>
        </div>
        <div className="hv2-product-grid">
          {products.map(([title, crop, href]) => <button key={title} type="button" onClick={() => navigate(href)}>
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
          {assurances.map(([Icon, title, text, tag]) => <article key={title}>
            <div className="hv2-assurance-top">
              <span className="hv2-assurance-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.8} /></span>
              <span className="hv2-assurance-tag">{tag}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="hv2-consult-section" aria-labelledby="home-consult-title">
      <div className="hv2-container hv2-consult-card">
        <div className="hv2-consult-faq">
          <h2 id="home-consult-title">Câu hỏi thường gặp</h2>
          <FaqBlock initialActive={null} />
        </div>
        <div className="hv2-consult-form">
          <QuoteForm title="Yêu cầu báo giá nhanh" hideLabels />
        </div>
        <div
          className="hv2-consult-engineer"
          style={{ backgroundImage: `url(${engineerImg})` }}
          role="img"
          aria-label="Hình minh họa kỹ thuật viên Điện 24H"
        >
          <div>
            <span>Kinh nghiệm thực tế<b>10+ năm</b></span>
            <span>Tiếp nhận sự cố<b>24/7</b></span>
            <span>Hotline kỹ thuật<b>0888.979.111</b></span>
          </div>
        </div>
      </div>
    </section>
  </div>
}
