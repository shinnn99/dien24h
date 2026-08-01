import {
  ArrowRight,
  Boxes,
  Cable,
  Check,
  CircuitBoard,
  ClipboardList,
  Clock3,
  MapPin,
  Package,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  SolarPanel,
  Tags,
  ToggleRight,
  Truck,
  UtilityPole,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Navigate } from '../App'
import { Breadcrumb, DarkCta, Eyebrow, FaqBlock, LinkButton, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { phoneHref } from '../data'

type ProductCategory = {
  icon: LucideIcon
  title: string
  summary: string
  detail: string
  brands?: string
  pos: string
}

const categories: ProductCategory[] = [
  {
    icon: UtilityPole,
    title: 'Máy biến áp',
    summary: 'Các dòng máy biến áp 22 kV',
    detail: 'Điện 24H cung cấp máy biến áp 22 kV của Thibidi, Shilin EMC và MBT. Liên hệ hotline để nhận thông tin và báo giá.',
    brands: 'Thibidi · Shilin EMC · MBT',
    pos: '52% 44%',
  },
  {
    icon: Cable,
    title: 'Dây cáp điện',
    summary: 'Cáp hạ thế và cáp trung thế',
    detail: 'Nhiều chủng loại dây và cáp điện phục vụ công trình, với chính sách chiết khấu dành cho công trình.',
    brands: 'Cadivi · Daphaco · Thịnh Phát · Taya',
    pos: '20% 62%',
  },
  {
    icon: ToggleRight,
    title: 'Thiết bị đóng cắt',
    summary: 'MCB, MCCB, ACB, contactor và relay',
    detail: 'Danh mục thiết bị đóng cắt được tư vấn theo yêu cầu kỹ thuật của từng hệ thống điện.',
    brands: 'Schneider · LS · Mitsubishi · Panasonic',
    pos: '84% 36%',
  },
  {
    icon: CircuitBoard,
    title: 'Tủ điện & tủ tụ bù',
    summary: 'Tủ MSB, tủ điều khiển và tủ tụ bù hạ thế',
    detail: 'Thiết kế và lắp đặt tủ điện; giải pháp tủ tụ bù hỗ trợ bù công suất phản kháng cho hệ thống.',
    pos: '91% 50%',
  },
  {
    icon: SolarPanel,
    title: 'Solar',
    summary: 'Thiết bị cho hệ thống điện mặt trời',
    detail: 'Liên hệ Điện 24H để trao đổi giải pháp và sản phẩm Solar phù hợp với nhu cầu của công trình.',
    pos: '9% 54%',
  },
  {
    icon: ShieldCheck,
    title: 'Thiết bị chống sét',
    summary: 'Thiết bị cho hệ thống chống sét',
    detail: 'Liên hệ Điện 24H để trao đổi thiết bị chống sét phù hợp với nhu cầu bảo vệ của công trình.',
    pos: '72% 28%',
  },
]

const publishedBrands = [
  'THIBIDI',
  'Shilin EMC',
  'MBT',
  'CADIVI',
  'Daphaco',
  'Thịnh Phát',
  'Taya',
  'Schneider',
  'LS',
  'Mitsubishi',
  'Panasonic',
]

const productQuestions = [
  ['Điện 24H có những nhóm sản phẩm nào?', 'Danh mục gồm máy biến áp, dây cáp điện, thiết bị đóng cắt, tủ điện và tủ tụ bù, Solar và thiết bị chống sét.'],
  ['Làm sao để nhận báo giá?', 'Hãy gửi nhu cầu hoặc gọi hotline 0888.979.111 để Điện 24H tư vấn và báo giá.'],
  ['Cần cung cấp thông tin gì?', 'Bạn nên cho biết nhóm sản phẩm, công suất dự kiến, địa điểm công trình và yêu cầu kỹ thuật đang có.'],
]

const productPromises: [LucideIcon, string, string][] = [
  [Boxes, '6 nhóm sản phẩm', 'Cho hệ thống điện công trình'],
  [SearchCheck, 'Tư vấn lựa chọn', 'Theo yêu cầu kỹ thuật'],
  [Truck, 'Giao tận công trình', 'Hỗ trợ theo từng đơn hàng'],
  [ShieldCheck, 'Bảo hành tại chỗ', 'Trao đổi điều kiện khi báo giá'],
]

const transformerSpecs: [LucideIcon, string, string][] = [
  [Package, 'Nhóm sản phẩm', 'Máy biến áp'],
  [Zap, 'Cấp điện áp', '22 kV'],
  [Tags, 'Thương hiệu', 'Thibidi'],
  [Tags, 'Thương hiệu khác', 'Shilin EMC · MBT'],
]

const selectionAdvice: [LucideIcon, string][] = [
  [Zap, 'Công suất dự kiến'],
  [MapPin, 'Địa điểm lắp đặt'],
  [ClipboardList, 'Yêu cầu kỹ thuật'],
  [Clock3, 'Tiến độ mong muốn'],
]

export function ProductsPage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="listing-hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="listing-overlay" />
      <div className="container">
        <Breadcrumb navigate={navigate} light items={[["Trang chủ", '/'], ['Sản phẩm']]} />
        <Eyebrow light>DANH MỤC THIẾT BỊ</Eyebrow>
        <h1>Vật tư & thiết bị điện<br /><span>cho công trình</span></h1>
        <p>Máy biến áp, dây cáp điện, thiết bị đóng cắt, tủ điện, Solar và thiết bị chống sét cho nhu cầu công trình.</p>
        <div className="hero-actions">
          <LinkButton href="/lien-he" navigate={navigate}>Yêu cầu báo giá</LinkButton>
          <LinkButton href={phoneHref} navigate={navigate} className="button secondary">Liên hệ kỹ thuật</LinkButton>
        </div>
      </div>
    </section>

    <div className="container product-promises">
      {productPromises.map(([Icon, title, text]) => <div key={title}><span><Icon size={26} strokeWidth={1.8} aria-hidden="true" /></span><b>{title}<small>{text}</small></b></div>)}
    </div>

    <section className="section container products-main">
      <div className="section-title row-title product-title">
        <div>
          <Eyebrow>DANH MỤC SẢN PHẨM</Eyebrow>
          <h2>Danh mục sản phẩm</h2>
          <small>Chọn nhóm phù hợp hoặc gửi yêu cầu để được tư vấn thêm.</small>
        </div>
      </div>

      <div className="category-grid">
        {categories.map(category => {
          const CategoryIcon = category.icon
          return <article key={category.title}>
            <div style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: category.pos }} />
            <span><CategoryIcon size={21} aria-hidden="true" /></span>
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <button type="button" onClick={() => navigate('/lien-he')}>Yêu cầu thông tin <ArrowRight size={17} aria-hidden="true" /></button>
          </article>
        })}
      </div>

      <div className="section-title row-title product-title">
        <div>
          <h2>Thông tin theo từng nhóm</h2>
          <small>Thông tin khái quát về từng nhóm vật tư và thiết bị.</small>
        </div>
      </div>
      <div className="product-grid three">
        {categories.map(category => <article className="product-card" key={category.title}>
          <div className="product-visual" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: category.pos }} />
          <span>{category.title}</span>
          <h3>{category.summary}</h3>
          <p>{category.detail}</p>
          {category.brands && <p><strong>Thương hiệu trong danh mục:</strong> {category.brands}</p>}
          <button type="button" onClick={() => navigate('/lien-he')}>Nhận tư vấn</button>
        </article>)}
      </div>
    </section>

    <section className="section surface">
      <div className="container">
        <div className="section-title row-title">
          <div>
            <Eyebrow>THƯƠNG HIỆU TRONG DANH MỤC</Eyebrow>
            <h2>Các thương hiệu Điện 24H cung cấp</h2>
            <p>Liên hệ để xác nhận sản phẩm phù hợp và nhận báo giá theo nhu cầu công trình.</p>
          </div>
        </div>
        <div className="brand-strip">{publishedBrands.map(brand => <b key={brand}>{brand}</b>)}</div>
        <FaqBlock title="Câu hỏi khi chọn thiết bị" questions={productQuestions} />
      </div>
    </section>

    <div className="container cta-spacing">
      <DarkCta navigate={navigate} title="Gửi nhu cầu vật tư & thiết bị" text="Cho biết nhóm sản phẩm, công suất hoặc yêu cầu kỹ thuật để Điện 24H tư vấn và báo giá phù hợp." />
    </div>
  </>
}

const transformerQuestions = [
  ['Điện 24H có máy biến áp nào?', 'Danh mục hiện có máy biến áp 22 kV của Thibidi, Shilin EMC và MBT.'],
  ['Làm sao để nhận báo giá máy biến áp?', 'Gọi hotline 0888.979.111 hoặc gửi yêu cầu để nhận tư vấn và báo giá theo nhu cầu.'],
  ['Cần chuẩn bị thông tin gì?', 'Bạn nên cho biết công suất dự kiến, địa điểm lắp đặt, yêu cầu kỹ thuật và tiến độ mong muốn.'],
]

export function ProductDetailPage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="section product-detail container">
      <Breadcrumb navigate={navigate} items={[["Trang chủ", '/'], ['Sản phẩm', '/san-pham'], ['Máy biến áp']]} />
      <div className="product-top">
        <div className="gallery">
          <div className="gallery-main" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: '70% 48%' }}>
            <span>Hình minh họa nhóm sản phẩm</span>
          </div>
        </div>
        <div className="product-summary">
          <span className="verified">Danh mục máy biến áp</span>
          <h1>Máy biến áp 22 kV</h1>
          <div className="spec-badges verified-spec-badges">
            {transformerSpecs.map(([Icon, title, value]) => <div key={title}><span><Icon size={22} aria-hidden="true" /></span><small>{title}</small><b>{value}</b></div>)}
          </div>
          <p>Điện 24H cung cấp máy biến áp 22 kV của Thibidi, Shilin EMC và MBT. Gọi hotline hoặc gửi nhu cầu để nhận tư vấn và báo giá.</p>
          <div className="benefit-row verified-benefits">
            {['Tư vấn theo nhu cầu', 'Báo giá qua hotline', 'Ba thương hiệu lựa chọn'].map(item => <span key={item}><Check size={17} aria-hidden="true" />{item}</span>)}
          </div>
          <div className="hero-actions">
            <LinkButton href="/lien-he" navigate={navigate}>Yêu cầu báo giá</LinkButton>
            <LinkButton href={phoneHref} navigate={navigate} className="button outline"><PhoneCall size={18} aria-hidden="true" /> Gọi tư vấn</LinkButton>
          </div>
        </div>
      </div>

      <div className="product-content-grid">
        <div>
          <article className="tab-content product-info-card">
            <Eyebrow>MÁY BIẾN ÁP 22 KV</Eyebrow>
            <h2>Thương hiệu trong danh mục</h2>
            <p>Điện 24H cung cấp máy biến áp 22 kV của Thibidi, Shilin EMC và MBT cho nhu cầu công trình.</p>
            <h2>Thông tin nên chuẩn bị khi liên hệ</h2>
            <p>Cho biết công suất dự kiến, địa điểm lắp đặt, yêu cầu kỹ thuật và tiến độ mong muốn để việc trao đổi được nhanh chóng hơn.</p>
            <div className="spec-table">
              {[
                ['Bạn nên cung cấp', 'Công suất dự kiến', 'Bạn nên cung cấp', 'Địa điểm công trình'],
                ['Bạn nên cung cấp', 'Yêu cầu kỹ thuật', 'Bạn nên cung cấp', 'Tiến độ mong muốn'],
                ['Thương hiệu', 'Thibidi · Shilin EMC · MBT', 'Cấp điện áp', '22 kV'],
                ['Giá bán', 'Liên hệ hotline', 'Hotline', '0888.979.111'],
              ].map((row, index) => <div key={index}>{row.map((cell, cellIndex) => <span className={cellIndex % 2 === 0 ? 'label' : ''} key={cellIndex}>{cell}</span>)}</div>)}
            </div>
          </article>

          <section className="related-products">
            <div className="section-title row-title">
              <h2>Danh mục liên quan</h2>
              <button className="text-link" type="button" onClick={() => navigate('/san-pham')}>Xem tất cả <ArrowRight size={17} aria-hidden="true" /></button>
            </div>
            <div className="product-grid three">
              {categories.slice(1, 4).map(category => <article className="product-card" key={category.title}>
                <div className="product-visual" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: category.pos }} />
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
                <button type="button" onClick={() => navigate('/lien-he')}>Nhận tư vấn</button>
              </article>)}
            </div>
          </section>
        </div>

        <aside>
          <QuoteForm title="Yêu cầu báo giá máy biến áp" compact />
          <div className="aside-benefits">
            {['Tiếp nhận nhu cầu kỹ thuật', 'Tư vấn theo công trình', 'Báo giá qua hotline', 'Trao đổi thông tin sản phẩm'].map(item => <span key={item}><Check size={17} aria-hidden="true" />{item}</span>)}
          </div>
        </aside>
      </div>

      <section className="selection-advice">
        <h2>Thông tin nên chuẩn bị khi yêu cầu báo giá</h2>
        {selectionAdvice.map(([Icon, title]) => <div key={title}><span><Icon size={20} aria-hidden="true" /></span><b>{title}</b></div>)}
        <LinkButton navigate={navigate} href="/lien-he" className="button outline">Gửi yêu cầu tư vấn</LinkButton>
      </section>

      <FaqBlock title="Câu hỏi về máy biến áp" questions={transformerQuestions} />
    </section>
  </>
}
