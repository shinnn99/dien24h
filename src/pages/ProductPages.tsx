import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  Building2,
  Boxes,
  Cable,
  Check,
  CircuitBoard,
  ClipboardList,
  ExternalLink,
  Factory,
  FileCheck2,
  MapPin,
  Package,
  PhoneCall,
  SearchCheck,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  SolarPanel,
  Tags,
  ToggleRight,
  Truck,
  UtilityPole,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Navigate } from '../App'
import { Breadcrumb, DarkCta, Eyebrow, FaqBlock, LinkButton } from '../components/Blocks'
import { CustomSelect } from '../components/CustomSelect'
import heroImg from '../assets/dien24h-hero.png'
import emcTransformerImg from '../assets/transformers/emc-oil-transformer.jpg'
import mbtTransformerImg from '../assets/transformers/mbt-oil-transformer.png'
import shihlinTransformerImg from '../assets/transformers/shihlin-distribution-transformer.png'
import thibidiTransformerImg from '../assets/transformers/thibidi-oil-transformer.webp'
import { email, phoneDisplay, phoneHref } from '../data'

type ProductCategory = {
  icon: LucideIcon
  title: string
  href: string
  summary: string
  detail: string
  brands?: string
  pos: string
}

const categories: ProductCategory[] = [
  {
    icon: UtilityPole,
    title: 'Máy biến áp',
    href: '/san-pham/may-bien-ap',
    summary: 'Các dòng máy biến áp 22 kV',
    detail: 'Điện 24H tiếp nhận yêu cầu máy biến áp 22 kV của THIBIDI, SHIHLIN, EMC và MBT. Cấu hình được đối chiếu theo hồ sơ kỹ thuật của từng hãng.',
    brands: 'THIBIDI · SHIHLIN · EMC · MBT',
    pos: '52% 44%',
  },
  {
    icon: Cable,
    title: 'Dây cáp điện',
    href: '/san-pham/day-cap-dien',
    summary: 'Cáp hạ thế và cáp trung thế',
    detail: 'Đối chiếu cấp điện áp, cấu tạo ruột dẫn, cách điện, vỏ, giáp và điều kiện lắp đặt theo đúng mã cáp cùng hồ sơ hãng.',
    brands: 'CADIVI · LS VINA · Trần Phú · TAYA',
    pos: '20% 62%',
  },
  {
    icon: ToggleRight,
    title: 'Thiết bị đóng cắt',
    href: '/san-pham/thiet-bi-dong-cat',
    summary: 'MCB, MCCB, ACB và thiết bị bảo vệ',
    detail: 'Đối chiếu dòng định mức, số cực, khả năng cắt, trip unit và phụ kiện theo đúng model cùng sơ đồ hệ thống.',
    brands: 'Schneider Electric · LS ELECTRIC · Mitsubishi Electric · CHINT',
    pos: '84% 36%',
  },
  {
    icon: CircuitBoard,
    title: 'Tủ điện & tủ tụ bù',
    href: '/san-pham/tu-dien-tu-tu-bu',
    summary: 'Tủ MSB, tủ điều khiển và tủ tụ bù hạ thế',
    detail: 'Đối chiếu nền tảng tủ phân phối, MCC và tủ tụ bù theo dòng định mức, Icw, cấp IP, kết cấu cùng sơ đồ công trình.',
    brands: 'Schneider Electric · ABB · Siemens',
    pos: '91% 50%',
  },
  {
    icon: SolarPanel,
    title: 'Solar',
    href: '/san-pham/solar',
    summary: 'Thiết bị cho hệ thống điện mặt trời',
    detail: 'Module quang điện và inverter được đối chiếu theo đúng model, dữ liệu tải, diện tích mái và điểm đấu nối.',
    brands: 'LONGi · JinkoSolar · Huawei FusionSolar · Sungrow',
    pos: '9% 54%',
  },
  {
    icon: ShieldCheck,
    title: 'Thiết bị chống sét',
    href: '/san-pham/thiet-bi-chong-set',
    summary: 'Thiết bị cho hệ thống chống sét',
    detail: 'Tách rõ chống sét trực tiếp, SPD nguồn, SPD tín hiệu và tiếp địa để phối hợp đúng lớp bảo vệ cho công trình.',
    brands: 'Schneider Electric · DEHN · OBO Bettermann · LPI',
    pos: '72% 28%',
  },
]

const publishedBrands = [
  'THIBIDI',
  'SHIHLIN',
  'EMC',
  'MBT',
  'CADIVI',
  'LS VINA',
  'TRẦN PHÚ',
  'TAYA',
  'Schneider Electric',
  'LS ELECTRIC',
  'Mitsubishi Electric',
  'CHINT',
  'ABB',
  'Siemens',
  'LONGi',
  'JinkoSolar',
  'Huawei FusionSolar',
  'Sungrow',
  'DEHN',
  'OBO Bettermann',
  'LPI',
]

const productQuestions = [
  ['Điện 24H có những nhóm sản phẩm nào?', 'Danh mục gồm máy biến áp, dây cáp điện, thiết bị đóng cắt, tủ điện và tủ tụ bù, Solar và thiết bị chống sét.'],
  ['Làm sao để nhận báo giá?', 'Hãy gửi nhu cầu hoặc gọi hotline 0888.979.111 để Điện 24H tư vấn và báo giá.'],
  ['Cần cung cấp thông tin gì?', 'Bạn nên cho biết nhóm sản phẩm, công suất dự kiến, địa điểm công trình và yêu cầu kỹ thuật đang có.'],
]

const productPromises: [LucideIcon, string, string][] = [
  [Boxes, '6 nhóm sản phẩm', 'Cho hệ thống điện công trình'],
  [SearchCheck, 'Dữ liệu đối chiếu', 'Theo đúng dòng và model'],
  [Truck, 'Tiến độ cung ứng', 'Xác nhận theo từng đơn hàng'],
  [ShieldCheck, 'Hồ sơ & bảo hành', 'Chốt trong báo giá thực tế'],
]

type TransformerBrand = {
  name: string
  maker: string
  image: string
  imageAlt: string
  sourceHref: string
  sourceLabel: string
  families: string[]
  filters: string[]
  facts: [string, string][]
  note: string
}

const transformerBrands: TransformerBrand[] = [
  {
    name: 'THIBIDI',
    maker: 'Công ty Cổ phần Thiết bị Điện',
    image: thibidiTransformerImg,
    imageAlt: 'Máy biến áp dầu ba pha THIBIDI',
    sourceHref: 'https://thibidi.com/gioi-thieu/',
    sourceLabel: 'Năng lực sản phẩm THIBIDI',
    families: ['Máy biến áp dầu', 'Máy biến áp khô', 'Amorphous', 'Pad-mounted'],
    filters: ['Máy dầu', 'Máy khô', 'Amorphous', 'Pad-mounted'],
    facts: [
      ['Năng lực sản phẩm chung', '10–20.000 kVA; điện áp đến 35 kV'],
      ['Dòng được hãng công bố', 'Dầu 1 pha, dầu 3 pha, khô và pad-mounted'],
      ['Tiêu chuẩn tham chiếu', 'IEC 60076 hoặc theo yêu cầu khách hàng'],
    ],
    note: 'Công suất, điện áp thứ cấp, tổ đấu dây và tổn hao của cấu hình 22 kV cần chốt theo catalogue hoặc hồ sơ chào hàng.',
  },
  {
    name: 'SHIHLIN',
    maker: 'Shihlin Electric & Engineering Corp.',
    image: shihlinTransformerImg,
    imageAlt: 'Các dòng máy biến áp phân phối SHIHLIN',
    sourceHref: 'https://www.shihlin-electric.com/distribution-transformers',
    sourceLabel: 'Danh mục phân phối SHIHLIN',
    families: ['Station type', 'Pad-mounted 3 pha', 'Pad-mounted 1 pha', 'Pole-mounted'],
    filters: ['Pad-mounted', 'Trạm / treo trụ'],
    facts: [
      ['Dải phân phối toàn cầu', '1 pha và 3 pha, đến 44 kV / 5 MVA'],
      ['Pad-mounted 3 pha', '112,5–5.000 kVA; đến 34,5 kV'],
      ['Tiêu chuẩn công bố', 'IEEE và CSA cho danh mục Bắc Mỹ'],
    ],
    note: 'Đây là năng lực danh mục toàn cầu của hãng. Cấu hình 22/0,4 kV, tiêu chuẩn áp dụng và thời gian giao tại Việt Nam phải được xác nhận riêng.',
  },
  {
    name: 'EMC',
    maker: 'Công ty Cổ phần Cơ Điện Thủ Đức',
    image: emcTransformerImg,
    imageAlt: 'Máy biến áp dầu ba pha EMC',
    sourceHref: 'https://codientd.com/san-pham/may-bien-ap-dau-3-pha-tole-silic/',
    sourceLabel: 'Trang sản phẩm EMC',
    families: ['Máy dầu 3 pha', 'Máy khô đúc', 'Amorphous', 'Kiểu kín hoặc kiểu hở'],
    filters: ['Máy dầu', 'Máy khô', 'Amorphous'],
    facts: [
      ['Cấu hình được công bố', '22/0,4 kV, 3 pha, Dyn11'],
      ['Dòng dầu', 'Làm mát ONAN; lắp trong nhà hoặc ngoài trời'],
      ['Tiêu chuẩn chế tạo', 'TCVN 6306, tương đương IEC 60076'],
    ],
    note: 'Kích thước, khối lượng, vật liệu cuộn dây và tổn hao thay đổi theo công suất; sử dụng bảng thông số của đúng model khi chào giá.',
  },
  {
    name: 'MBT',
    maker: 'Công ty Cổ phần Thiết bị Điện MBT',
    image: mbtTransformerImg,
    imageAlt: 'Máy biến áp dầu ba pha MBT 1000 kVA',
    sourceHref: 'https://mbt.com.vn/san-pham/may-bien-ap-dau-3-pha-kieu-kin-1000kva/',
    sourceLabel: 'Sản phẩm 1000 kVA MBT',
    families: ['Máy dầu kiểu kín', 'Máy dầu kiểu hở', 'Máy khô 3 pha'],
    filters: ['Máy dầu', 'Máy khô'],
    facts: [
      ['Model mẫu trên nguồn hãng', 'Dầu 3 pha kiểu kín 1.000 kVA'],
      ['Điện áp / tổ đấu dây', '22/0,4 kV; Dyn11 hoặc Yyn0'],
      ['Tiêu chuẩn model mẫu', 'TCVN 6306 (IEC 60076); QĐ 62/QĐ-EVN'],
    ],
    note: 'Tổ đấu dây, điện áp ngắn mạch và mức tổn hao khác nhau theo từng công suất; không dùng thông số của một model cho toàn bộ dải.',
  },
]

const transformerQuickFacts: [LucideIcon, string, string][] = [
  [Zap, 'Cấp trung áp', '22 kV'],
  [CircuitBoard, 'Hạ áp thường gặp', '0,4 kV'],
  [Package, 'Kiểu máy', 'Dầu hoặc khô'],
  [Tags, 'Thương hiệu', '4 hãng đã đối chiếu'],
]

const transformerApplications: [LucideIcon, string, string][] = [
  [Factory, 'Nhà máy & nhà xưởng', 'Hạ áp từ lưới trung áp cho dây chuyền và phụ tải sản xuất.'],
  [Building2, 'Tòa nhà & thương mại', 'Cấp điện cho hệ thống kỹ thuật, điều hòa, thang máy và phụ tải chung.'],
  [UtilityPole, 'Trạm biến áp doanh nghiệp', 'Tích hợp vào phương án trạm phù hợp điểm đấu nối và mặt bằng công trình.'],
  [SolarPanel, 'Năng lượng & hạ tầng', 'Cấu hình riêng cho dự án năng lượng hoặc hệ thống phân phối nội bộ.'],
]

const transformerSelectionSteps: [LucideIcon, string, string][] = [
  [ClipboardList, 'Xác định tổng phụ tải', 'Tổng hợp thiết bị, hệ số sử dụng và phụ tải dự kiến vận hành đồng thời.'],
  [Zap, 'Xác nhận cấp điện áp', 'Cung cấp điện áp nguồn, điện áp sử dụng và yêu cầu của điểm đấu nối.'],
  [MapPin, 'Kiểm tra nơi lắp đặt', 'Trong nhà hay ngoài trời, diện tích trạm, thông gió, tiếng ồn và yêu cầu phòng cháy.'],
  [SearchCheck, 'Kỹ sư chốt cấu hình', 'Đối chiếu hồ sơ hãng, tiêu chuẩn dự án và phương án bảo vệ trước khi báo giá.'],
]

const transformerSpecGroups: [string, string[]][] = [
  ['Thông số điện', ['Công suất định mức (kVA)', 'Điện áp sơ cấp và thứ cấp', 'Số pha, tần số, dải điều chỉnh', 'Tổ đấu dây và điện áp ngắn mạch', 'Tổn hao không tải, có tải và dòng không tải']],
  ['Cấu tạo & vận hành', ['Máy dầu hoặc máy khô', 'Phương thức làm mát', 'Vật liệu cuộn dây theo hồ sơ hãng', 'Cấp cách điện và cấp bảo vệ', 'Điều kiện lắp đặt, nhiệt độ và độ ồn']],
  ['Kích thước & lắp đặt', ['Dài, rộng, cao và tổng khối lượng', 'Khối lượng dầu nếu là máy dầu', 'Khoảng cách tâm bánh xe', 'Kích thước móng và lối vận chuyển', 'Bản vẽ bố trí đầu cáp và phụ kiện']],
  ['Hồ sơ cần nhận', ['Catalogue hoặc datasheet đúng model', 'Bản vẽ kích thước và sơ đồ đấu nối', 'Chứng nhận xuất xưởng', 'Biên bản thí nghiệm khi được cung cấp', 'Điều kiện bảo hành và thời gian giao']],
]

const transformerScope = [
  'Tư vấn lựa chọn máy theo nhu cầu',
  'Cung cấp thiết bị theo cấu hình xác nhận',
  'Giao thiết bị đến công trình theo đơn hàng',
  'Hỗ trợ lắp đặt và đấu nối',
  'Thi công đường dây và trạm biến áp',
  'Thí nghiệm, bảo trì theo phạm vi thống nhất',
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
            <button type="button" onClick={() => navigate(category.href)}>Xem danh mục <ArrowRight size={17} aria-hidden="true" /></button>
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
          <button type="button" onClick={() => navigate(category.href)}>Xem chi tiết</button>
        </article>)}
      </div>
    </section>

    <section className="section surface">
      <div className="container">
        <div className="section-title row-title">
          <div>
            <Eyebrow>THƯƠNG HIỆU TRONG DANH MỤC</Eyebrow>
            <h2>Các thương hiệu đã được đối chiếu</h2>
            <p>Thông tin được dẫn từ nguồn hãng; model, khả năng cung ứng và điều kiện thương mại được xác nhận theo từng yêu cầu.</p>
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
  ['Điện 24H đang tiếp nhận yêu cầu những hãng nào?', 'Trang hiện đối chiếu bốn thương hiệu riêng biệt: THIBIDI, SHIHLIN, EMC và MBT. Khả năng cung ứng, model và thời gian giao được xác nhận theo từng yêu cầu.'],
  ['Vì sao trang không niêm yết sẵn công suất và giá?', 'Máy biến áp là thiết bị cấu hình theo phụ tải, điện áp, tổ đấu dây, mức tổn hao, điều kiện lắp đặt và hồ sơ dự án. Điện 24H chỉ báo giá sau khi kỹ sư xác nhận đúng cấu hình.'],
  ['Có thể chọn công suất chỉ bằng cách cộng tổng tải không?', 'Không nên dùng một phép cộng đơn giản làm kết luận kỹ thuật. Cần xem xét tải vận hành đồng thời, khả năng mở rộng, đặc tính khởi động và điều kiện của hệ thống điện hiện hữu.'],
  ['Tài liệu kỹ thuật nào được cung cấp?', 'Catalogue, datasheet, bản vẽ, sơ đồ đấu nối, hồ sơ xuất xưởng, biên bản thí nghiệm và chính sách bảo hành chỉ được gửi khi tài liệu của đúng model thực sự có sẵn.'],
]

const transformerRelated: [LucideIcon, string, string, string][] = [
  [Cable, 'Cáp điện trung thế', 'Đối chiếu tiết diện, cấp điện áp và phương án đầu cáp.', '/san-pham/day-cap-dien'],
  [CircuitBoard, 'Tủ MSB & tủ tụ bù', 'Phối hợp tủ phân phối và bù công suất phản kháng phía hạ thế.', '/san-pham/tu-dien-tu-tu-bu'],
  [ToggleRight, 'Thiết bị đóng cắt', 'Lựa chọn thiết bị bảo vệ theo sơ đồ và dòng ngắn mạch.', '/san-pham/thiet-bi-dong-cat'],
  [UtilityPole, 'Thi công trạm biến áp', 'Tư vấn, thi công, lắp đặt và thí nghiệm theo phạm vi thống nhất.', '/dich-vu/tram-bien-ap'],
]

function TransformerQuoteForm() {
  const [prepared, setPrepared] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (name: string) => String(data.get(name) || '').trim().replace(/[\r\n]+/g, ' ')
    const requiredFields = ['name', 'phone', 'projectArea', 'capacityOrLoad', 'neededTime']

    for (const fieldName of requiredFields) {
      const field = form.elements.namedItem(fieldName)
      if (!(field instanceof HTMLInputElement)) continue
      field.setCustomValidity('')
      if (!field.value.trim()) {
        field.setCustomValidity('Vui lòng điền thông tin này.')
        field.reportValidity()
        field.focus()
        return
      }
    }

    const name = value('name')
    const subject = encodeURIComponent(`Yêu cầu báo giá máy biến áp - ${name}`)
    const body = encodeURIComponent([
      'YÊU CẦU TƯ VẤN MÁY BIẾN ÁP',
      '',
      `Họ tên: ${name}`,
      `Số điện thoại: ${value('phone')}`,
      `Khu vực công trình: ${value('projectArea')}`,
      `Công suất dự kiến / tổng tải: ${value('capacityOrLoad')}`,
      `Thời gian cần thiết bị: ${value('neededTime')}`,
      `Thương hiệu mong muốn: ${value('preferredBrand') || 'Chưa xác định'}`,
      `Điện áp đầu vào: ${value('inputVoltage') || 'Chưa cung cấp'}`,
      `Điện áp đầu ra: ${value('outputVoltage') || 'Chưa cung cấp'}`,
      `Loại máy: ${value('transformerType') || 'Chưa xác định'}`,
      `Vị trí lắp đặt: ${value('installation') || 'Chưa xác định'}`,
      `Ghi chú: ${value('note') || 'Chưa cung cấp'}`,
      '',
      'Nếu có, vui lòng đính kèm sơ đồ một sợi, bảng tải hoặc ảnh trạm hiện tại trước khi gửi email.',
    ].join('\n'))

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setPrepared(true)
  }

  return <form className="transformer-category-form" onSubmit={submit} aria-labelledby="transformer-form-title">
    <div className="transformer-category-form-heading">
      <span><Send size={20} aria-hidden="true" /></span>
      <div>
        <small>PHIẾU NHẬN YÊU CẦU KỸ THUẬT</small>
        <h3 id="transformer-form-title">Gửi yêu cầu cho kỹ sư</h3>
      </div>
    </div>
    <p className="transformer-category-required-note"><b>*</b> Trường bắt buộc</p>
    {prepared && <div className="transformer-category-form-status" role="status" aria-live="polite">Email đã được chuẩn bị. Hãy kiểm tra ứng dụng email và bấm Gửi; dữ liệu trong biểu mẫu vẫn được giữ lại.</div>}

    <div className="transformer-category-form-grid two">
      <label>Họ và tên *<input name="name" required autoComplete="name" maxLength={100} placeholder="Nguyễn Văn A" /></label>
      <label>Số điện thoại *<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="090..." /></label>
    </div>
    <div className="transformer-category-form-grid two">
      <label>Khu vực công trình *<input name="projectArea" required maxLength={160} placeholder="Tỉnh/thành, quận/huyện" /></label>
      <label>Công suất dự kiến hoặc tổng tải *<input name="capacityOrLoad" required maxLength={100} placeholder="Ví dụ: khoảng 800 kVA hoặc tổng tải 650 kW" /></label>
    </div>
    <div className="transformer-category-form-grid two">
      <label>Thời gian cần thiết bị *<input name="neededTime" required maxLength={100} placeholder="Ví dụ: quý IV/2026" /></label>
      <CustomSelect
        label="Thương hiệu mong muốn"
        name="preferredBrand"
        defaultValue=""
        options={[{ label: 'Chưa xác định', value: '' }, 'THIBIDI', 'SHIHLIN', 'EMC', 'MBT']}
      />
    </div>
    <div className="transformer-category-form-grid two">
      <label>Điện áp đầu vào<input name="inputVoltage" maxLength={60} placeholder="Ví dụ: 22 kV" /></label>
      <label>Điện áp đầu ra<input name="outputVoltage" maxLength={60} placeholder="Ví dụ: 0,4 kV" /></label>
    </div>
    <div className="transformer-category-form-grid two">
      <CustomSelect
        label="Loại máy"
        name="transformerType"
        defaultValue=""
        options={[{ label: 'Chưa xác định', value: '' }, 'Máy dầu', 'Máy khô']}
      />
      <CustomSelect
        label="Vị trí lắp đặt"
        name="installation"
        defaultValue=""
        options={[{ label: 'Chưa xác định', value: '' }, 'Trong nhà', 'Ngoài trời']}
      />
    </div>
    <label>Ghi chú yêu cầu<textarea name="note" maxLength={700} placeholder="Yêu cầu kỹ thuật, hiện trạng trạm hoặc thông tin cần kỹ sư lưu ý..." /></label>
    <div className="transformer-category-attachment-note"><FileCheck2 size={18} aria-hidden="true" /><span>Sau khi email mở, bạn có thể đính kèm sơ đồ một sợi, bảng tải hoặc ảnh trạm hiện tại trước khi bấm Gửi.</span></div>
    <button className="button primary" type="submit"><Send size={18} aria-hidden="true" />{prepared ? 'MỞ LẠI EMAIL' : 'GỬI YÊU CẦU CHO KỸ SƯ'}</button>
    <small>Nút này mở ứng dụng email trên thiết bị. Cần hỗ trợ ngay, gọi <a href={phoneHref}>{phoneDisplay}</a>.</small>
  </form>
}

export function ProductDetailPage({ navigate }: { navigate: Navigate }) {
  const [brandFilter, setBrandFilter] = useState('Tất cả')
  const [typeFilter, setTypeFilter] = useState('Tất cả')
  const visibleBrands = transformerBrands.filter(brand =>
    (brandFilter === 'Tất cả' || brand.name === brandFilter)
    && (typeFilter === 'Tất cả' || brand.filters.includes(typeFilter)),
  )

  return <main className="transformer-category-page">
    <section className="transformer-category-hero">
      <div className="container">
        <Breadcrumb navigate={navigate} items={[["Trang chủ", '/'], ['Sản phẩm', '/san-pham'], ['Máy biến áp']]} />
        <div className="transformer-category-hero-grid">
          <div className="transformer-category-hero-copy">
            <Eyebrow>DANH MỤC KỸ THUẬT • 22 KV</Eyebrow>
            <h1>Máy biến áp cho<br /><span>nhà xưởng & công trình</span></h1>
            <p>Đối chiếu thương hiệu, loại máy và hồ sơ kỹ thuật theo nhu cầu thực tế. Công suất, điện áp ra, tổ đấu dây, tổn hao và tiến độ giao được xác nhận theo đúng model trước khi báo giá.</p>
            <div className="hero-actions">
              <a className="button primary" href="#transformer-request">Nhận tư vấn cấu hình</a>
              <a className="button outline" href={phoneHref}><PhoneCall size={18} aria-hidden="true" /> Gọi kỹ sư</a>
            </div>
            <div className="transformer-category-hero-services">
              {['Tư vấn kỹ thuật', 'Giao tại công trình', 'Hỗ trợ lắp đặt'].map(item => <span key={item}><Check size={17} aria-hidden="true" />{item}</span>)}
            </div>
          </div>

          <div className="transformer-category-gallery" aria-label="Ảnh sản phẩm từ các nhà sản xuất">
            <figure className="transformer-category-gallery-main">
              <img src={thibidiTransformerImg} alt="Máy biến áp dầu ba pha THIBIDI" />
              <figcaption><b>THIBIDI</b><span>Máy biến áp dầu ba pha</span></figcaption>
            </figure>
            <div className="transformer-category-gallery-thumbs">
              {transformerBrands.slice(1).map(brand => <figure key={brand.name}>
                <img src={brand.image} alt={brand.imageAlt} />
                <figcaption>{brand.name}</figcaption>
              </figure>)}
            </div>
            <small>Ảnh được lấy từ trang nhà sản xuất; hình dáng thực tế thay đổi theo model và cấu hình.</small>
          </div>
        </div>
      </div>
    </section>

    <div className="container transformer-category-quick-facts">
      {transformerQuickFacts.map(([Icon, label, value]) => <div key={label}><span><Icon size={23} aria-hidden="true" /></span><small>{label}</small><b>{value}</b></div>)}
    </div>

    <section className="section container transformer-category-catalog" id="transformer-brands">
      <div className="section-title row-title">
        <div><Eyebrow>DỮ LIỆU ĐÃ ĐỐI CHIẾU</Eyebrow><h2>Chọn theo thương hiệu và dòng máy</h2></div>
        <p>Trang này là danh mục, không phải một model cụ thể. Những giá trị chưa có hồ sơ hãng đều được để ở trạng thái cần xác nhận.</p>
      </div>

      <div className="transformer-category-filter">
        <span className="transformer-category-filter-icon"><SlidersHorizontal size={22} aria-hidden="true" /></span>
        <CustomSelect label="Thương hiệu" value={brandFilter} onChange={setBrandFilter} options={['Tất cả', ...transformerBrands.map(brand => brand.name)]} />
        <CustomSelect label="Dòng máy" value={typeFilter} onChange={setTypeFilter} options={['Tất cả', 'Máy dầu', 'Máy khô', 'Amorphous', 'Pad-mounted', 'Trạm / treo trụ']} />
        {(brandFilter !== 'Tất cả' || typeFilter !== 'Tất cả') && <button className="button outline" type="button" onClick={() => { setBrandFilter('Tất cả'); setTypeFilter('Tất cả') }}>Xóa bộ lọc</button>}
        <small>{visibleBrands.length} nhóm phù hợp • Chưa lọc theo công suất khi chưa có danh sách model đã xác nhận.</small>
      </div>

      <div className="transformer-category-brand-grid">
        {visibleBrands.map(brand => <article className="transformer-category-brand-card" key={brand.name}>
          <figure><img src={brand.image} alt={brand.imageAlt} loading="lazy" /></figure>
          <div className="transformer-category-brand-body">
            <div className="transformer-category-brand-head"><span>{brand.name}</span><small>{brand.maker}</small></div>
            <h3>Dòng máy biến áp {brand.name}</h3>
            <div className="transformer-category-brand-tags">{brand.families.map(item => <span key={item}>{item}</span>)}</div>
            <dl>{brand.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <p>{brand.note}</p>
            <div className="transformer-category-brand-actions">
              <a href="#transformer-request">Nhờ kỹ sư chọn máy <ArrowRight size={16} aria-hidden="true" /></a>
              <a href={brand.sourceHref} target="_blank" rel="noreferrer">{brand.sourceLabel} <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </article>)}
      </div>
      {!visibleBrands.length && <div className="transformer-category-empty">Chưa có nhóm hãng khớp hai tiêu chí này. Hãy đổi bộ lọc hoặc gửi yêu cầu để kỹ sư kiểm tra.</div>}
    </section>

    <section className="section transformer-category-specs">
      <div className="container">
        <div className="section-title row-title">
          <div><Eyebrow>CHECKLIST HỒ SƠ</Eyebrow><h2>Thông số phải chốt cho từng model</h2></div>
          <p>Không lấy thông số của một công suất để áp cho toàn bộ dải sản phẩm. Mỗi báo giá cần đi kèm cấu hình và hồ sơ tương ứng.</p>
        </div>
        <div className="transformer-category-spec-grid">
          {transformerSpecGroups.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></article>)}
        </div>
      </div>
    </section>

    <section className="section container transformer-category-applications">
      <div className="section-title center"><Eyebrow>ỨNG DỤNG</Eyebrow><h2>Nhóm nhu cầu thường gặp</h2><p>Ứng dụng chỉ giúp định hướng bước đầu; cấu hình cuối cùng cần được kỹ sư kiểm tra theo phụ tải và hệ thống điện.</p></div>
      <div className="transformer-category-application-grid">
        {transformerApplications.map(([Icon, title, text]) => <article key={title}><span><Icon size={25} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section transformer-category-guide">
      <div className="container">
        <div className="section-title center"><Eyebrow>HƯỚNG DẪN LỰA CHỌN</Eyebrow><h2>Bốn bước trước khi yêu cầu báo giá</h2><p>Thông tin rõ giúp đối chiếu cấu hình và hồ sơ hãng nhanh hơn.</p></div>
        <ol className="transformer-category-step-grid">
          {transformerSelectionSteps.map(([Icon, title, text], index) => <li key={title}><span className="transformer-category-step-number">0{index + 1}</span><span className="transformer-category-step-icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </div>
    </section>

    <section className="section container transformer-category-scope">
      <div className="transformer-category-scope-copy"><Eyebrow>PHẠM VI ĐIỆN 24H</Eyebrow><h2>Từ tiếp nhận nhu cầu đến hỗ trợ tại công trình</h2><p>Phạm vi cụ thể, tiến độ và điều kiện thực hiện được xác nhận trong báo giá hoặc hồ sơ công việc.</p><a className="button navy" href="#transformer-request">Gửi thông tin công trình</a></div>
      <div className="transformer-category-scope-grid">{transformerScope.map(item => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}</div>
    </section>

    <section className="section transformer-category-request" id="transformer-request">
      <div className="container">
        <div className="section-title row-title"><div><Eyebrow>YÊU CẦU KỸ THUẬT</Eyebrow><h2>Nhận cấu hình và báo giá theo công trình</h2></div><p>Không cần biết sẵn toàn bộ thông số. Hãy gửi những gì đang có; kỹ sư sẽ xác định phần còn thiếu cần kiểm tra.</p></div>
        <div className="transformer-category-request-grid">
          <aside>
            <h3>Chuẩn bị nhanh trước khi gửi</h3>
            {['Tổng tải hoặc công suất dự kiến', 'Điện áp nguồn và điện áp sử dụng', 'Khu vực, vị trí lắp đặt', 'Thời điểm cần thiết bị', 'Sơ đồ một sợi hoặc bảng tải nếu có'].map(item => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}
            <div><PhoneCall size={23} aria-hidden="true" /><small>Hotline kỹ thuật</small><a href={phoneHref}>{phoneDisplay}</a></div>
          </aside>
          <TransformerQuoteForm />
        </div>
      </div>
    </section>

    <section className="section container transformer-category-related">
      <div className="section-title row-title"><div><Eyebrow>GIẢI PHÁP LIÊN QUAN</Eyebrow><h2>Thiết bị và dịch vụ đi cùng hệ thống</h2></div><button className="text-link" type="button" onClick={() => navigate('/san-pham')}>Xem danh mục <ArrowRight size={17} aria-hidden="true" /></button></div>
      <div className="transformer-category-related-grid">
        {transformerRelated.map(([Icon, title, text, href]) => <button key={title} type="button" onClick={() => navigate(href)}><span><Icon size={23} aria-hidden="true" /></span><b>{title}</b><small>{text}</small><ArrowRight size={18} aria-hidden="true" /></button>)}
      </div>
    </section>

    <section className="section transformer-category-sources">
      <div className="container">
        <div className="section-title row-title"><div><Eyebrow>NGUỒN ĐỐI CHIẾU</Eyebrow><h2>Thông tin từ nhà sản xuất</h2></div><p>Cập nhật ngày 02/08/2026. Các đường dẫn dưới đây dùng để kiểm tra lại phạm vi sản phẩm và thông số đã nêu.</p></div>
        <div className="transformer-category-source-grid">{transformerBrands.map(brand => <a key={brand.name} href={brand.sourceHref} target="_blank" rel="noreferrer"><span>{brand.name}</span><b>{brand.sourceLabel}</b><ExternalLink size={18} aria-hidden="true" /></a>)}</div>
        <FaqBlock title="Câu hỏi khi chọn máy biến áp" questions={transformerQuestions} initialActive={null} />
      </div>
    </section>
  </main>
}
