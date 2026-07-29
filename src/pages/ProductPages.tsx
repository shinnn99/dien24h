import { useState } from 'react'
import type { Navigate } from '../App'
import { Breadcrumb, DarkCta, Eyebrow, FaqBlock, LinkButton, QuoteForm } from '../components/Blocks'
import { CustomSelect } from '../components/CustomSelect'
import heroImg from '../assets/dien24h-hero.png'
import { phoneHref, products } from '../data'

const categories = [
  ['Máy biến áp', 'Xem danh mục', '52% 44%'],
  ['Dây cáp điện', 'Xem danh mục', '20% 62%'],
  ['Thiết bị đóng cắt', 'Xem danh mục', '84% 36%'],
  ['Tủ điện & tủ tụ bù', 'Xem danh mục', '91% 50%'],
  ['Solar', 'Xem danh mục', '9% 54%'],
  ['Chống sét', 'Xem danh mục', '72% 28%'],
]

const productCategoryOptions = ['Tất cả danh mục', 'Máy biến áp', 'Thiết bị đóng cắt']
const productBrandOptions = ['Tất cả hãng', 'Schneider', 'THIBIDI']
const productAvailabilityOptions = ['Tất cả', 'Sẵn hàng', 'Đặt hàng']

export function ProductsPage({ navigate }: { navigate: Navigate }) {
  const [query, setQuery] = useState('')
  const visible = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
  return <>
    <section className="listing-hero" style={{backgroundImage:`url(${heroImg})`}}><div className="listing-overlay"/><div className="container"><Breadcrumb navigate={navigate} light items={[['Trang chủ','/'],['Sản phẩm']]}/><Eyebrow light>DANH MỤC THIẾT BỊ</Eyebrow><h1>Thiết bị điện công nghiệp<br /><span>chính hãng</span></h1><p>Đầy đủ CO-CQ, hỗ trợ kỹ thuật và tư vấn lựa chọn cấu hình phù hợp.</p><div className="hero-actions"><LinkButton href="/lien-he" navigate={navigate}>Yêu cầu báo giá</LinkButton><LinkButton href={phoneHref} navigate={navigate} className="button secondary">Liên hệ kỹ thuật</LinkButton></div></div></section>
    <div className="container product-promises">{[['◎','100% chính hãng','Cam kết từ nhà sản xuất'],['▤','Đầy đủ CO-CQ','Chứng từ rõ ràng'],['♙','Hỗ trợ kỹ thuật','Tư vấn đúng cấu hình'],['▣','Giao hàng nhanh','Kho hàng sẵn']].map(([i,t,s])=><div key={t}><span>{i}</span><b>{t}<small>{s}</small></b></div>)}</div>
    <section className="section container products-main">
      <div className="filter-bar">
        <CustomSelect label="Danh mục" options={productCategoryOptions} />
        <CustomSelect label="Hãng" options={productBrandOptions} />
        <label className="grow">Công suất / Model<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nhập công suất hoặc model"/></label>
        <CustomSelect label="Tình trạng" options={productAvailabilityOptions} />
        <button className="button navy">⌕ Tìm kiếm</button>
      </div>
      <div className="category-grid">{categories.map(([t,n,pos])=><article key={t}><div style={{backgroundImage:`url(${heroImg})`,backgroundPosition:pos}}/><span>▣</span><h3>{t}</h3><p>{n}</p><button onClick={()=>setQuery(t==='Máy biến áp'?'máy biến áp':'')}>Xem danh mục →</button></article>)}</div>
        <div className="section-title row-title product-title"><div><h2>Sản phẩm nổi bật</h2><small>Thông tin cấu hình đang chờ đối chiếu catalog chính thức.</small></div><button className="text-link">Xem tất cả sản phẩm →</button></div>
      <div className="product-grid four">{visible.map(p=><article className="product-card" key={p.title}><div className="product-visual" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:p.pos}}/><span>{p.category}</span><h3>{p.title}</h3><p>{p.detail}</p><button onClick={()=>navigate(p.href)}>Xem chi tiết</button></article>)}</div>
      {visible.length===0&&<div className="empty-state">Không tìm thấy sản phẩm phù hợp. Hãy gửi BOM để được tư vấn cấu hình.</div>}
    </section>
    <section className="section surface"><div className="container"><div className="section-title row-title"><div><Eyebrow>THƯƠNG HIỆU THAM KHẢO</Eyebrow><h2>Cấu hình theo yêu cầu dự án</h2><p>Việc sử dụng logo và quan hệ phân phối chỉ công bố sau khi có xác nhận chính thức.</p></div></div><div className="brand-strip">{['Schneider Electric','ABB','SIEMENS','MITSUBISHI','LS ELECTRIC','HYUNDAI','CADIVI','SMA'].map(x=><b key={x}>{x}</b>)}</div><FaqBlock title="Câu hỏi khi chọn thiết bị"/></div></section>
    <div className="container cta-spacing"><DarkCta navigate={navigate} title="Gửi danh sách vật tư / BOM" text="Gửi file Excel, PDF hoặc ảnh để nhận cấu hình và báo giá chính xác." /></div>
  </>
}

const specs = [
  ['Công suất','1000 kVA','Hiệu suất','≥ 98.2%'],['Điện áp sơ cấp','22 ± 2x2.5% kV','Cấp cách điện','22/0.4 kV'],['Điện áp thứ cấp','0.4 kV','Cấp chịu nhiệt','A'],['Tần số','50 Hz','Cấp bảo vệ','IP20'],['Kiểu đấu dây','Dyn11','Phương pháp làm mát','ONAN'],['Tổn hao không tải','1200 W','Dầu cách điện','Mineral Oil'],['Tổn hao có tải','11800 W','Kích thước','2050 × 1150 × 1850 mm'],['Điện áp ngắn mạch','6%','Khối lượng','~2550 kg'],
]

export function ProductDetailPage({ navigate }: { navigate: Navigate }) {
  const [tab, setTab] = useState('Mô tả')
  const [thumb, setThumb] = useState(0)
  return <>
    <section className="section product-detail container">
      <Breadcrumb navigate={navigate} items={[['Trang chủ','/'],['Sản phẩm','/san-pham'],['Máy biến áp'],['Máy biến áp 1000kVA']]}/>
      <div className="product-top">
        <div className="gallery"><div className="gallery-main" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:['70% 48%','78% 38%','61% 57%','84% 52%'][thumb]}}><span>Ảnh minh họa</span><button className="prev" onClick={()=>setThumb((thumb+3)%4)}>‹</button><button className="next" onClick={()=>setThumb((thumb+1)%4)}>›</button></div><div className="thumbs">{[0,1,2,3].map(i=><button className={thumb===i?'active':''} onClick={()=>setThumb(i)} key={i} style={{backgroundImage:`url(${heroImg})`,backgroundPosition:['70% 48%','78% 38%','61% 57%','84% 52%'][i]}}/>)}</div></div>
        <div className="product-summary"><span className="verified">✓ Sản phẩm chính hãng</span><h1>Máy biến áp dầu 1000kVA</h1><div className="spec-badges">{[['▣','Công suất','1000 kVA'],['ϟ','Điện áp','22/0.4 kV'],['△','Hãng','THIBIDI'],['◇','Tiêu chuẩn','IEC 60076'],['⌾','Bảo hành','36 tháng']].map(([i,t,v])=><div key={t}><span>{i}</span><small>{t}</small><b>{v}</b></div>)}</div><p>Máy biến áp dầu 1000kVA 22/0.4kV được thiết kế vận hành ổn định, hiệu suất cao và phù hợp cho trạm biến áp khu công nghiệp, tòa nhà, nhà máy.</p><div className="benefit-row">{['Hiệu suất cao','Vận hành ổn định','Tiết kiệm điện','Dễ bảo trì'].map(x=><span key={x}>✓ {x}</span>)}</div><div className="hero-actions"><LinkButton href="/lien-he" navigate={navigate}>Yêu cầu báo giá</LinkButton><LinkButton href={phoneHref} navigate={navigate} className="button outline">☎ Gọi tư vấn</LinkButton></div></div>
      </div>
      <div className="product-content-grid">
        <div>
          <div className="tabs">{['Mô tả','Ứng dụng','Thông số kỹ thuật','Hồ sơ / CO-CQ'].map(x=><button className={tab===x?'active':''} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>
          <article className="tab-content"><p>{tab==='Mô tả'?'Máy biến áp sử dụng dầu cách điện và làm mát tự nhiên, cuộn dây bằng đồng hoặc nhôm chất lượng cao. Sản phẩm được sản xuất và thử nghiệm theo tiêu chuẩn IEC 60076.':tab==='Ứng dụng'?'Phù hợp trạm phân phối cho nhà máy, khu công nghiệp, kho vận, trung tâm thương mại và công trình có phụ tải liên tục.':tab==='Hồ sơ / CO-CQ'?'Hồ sơ có thể bao gồm catalogue, bản vẽ kích thước, CO, CQ, biên bản thí nghiệm xuất xưởng và hướng dẫn vận hành.':'Bảng dữ liệu dưới đây là cấu hình tham khảo; thông số cuối cùng xác nhận theo báo giá kỹ thuật.'}</p><h2>Thông số kỹ thuật</h2><div className="spec-table">{specs.map((r,i)=><div key={i}>{r.map((c,j)=><span className={j%2===0?'label':''} key={j}>{c}</span>)}</div>)}</div></article>
          <section className="related-products"><div className="section-title row-title"><h2>Sản phẩm liên quan</h2><button className="text-link" onClick={()=>navigate('/san-pham')}>Xem tất cả →</button></div><div className="product-grid three">{products.slice(1,4).map(p=><article className="product-card" key={p.title}><div className="product-visual" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:p.pos}}/><h3>{p.title}</h3><p>{p.detail}</p><button onClick={()=>navigate(p.href)}>Xem chi tiết</button></article>)}</div></section>
        </div>
        <aside><QuoteForm title="Yêu cầu báo giá nhanh" compact/><div className="aside-benefits">{['Phản hồi trong giờ trực','Tư vấn kỹ thuật miễn phí','Báo giá theo cấu hình','Hỗ trợ sau bán hàng'].map(x=><span key={x}>✓ {x}</span>)}</div></aside>
      </div>
      <section className="selection-advice"><h2>Tư vấn lựa chọn máy biến áp</h2>{[['♙','Đúng nhu cầu'],['☀','Hiệu suất cao'],['◇','Vận hành ổn định'],['⚙','Hỗ trợ kỹ thuật']].map(([i,t])=><div key={t}><span>{i}</span><b>{t}</b></div>)}<LinkButton navigate={navigate} href="/lien-he" className="button outline">Gọi tư vấn miễn phí</LinkButton></section>
      <section className="documents"><h2>Tài liệu & chứng chỉ</h2><div>{['Catalogue máy biến áp dầu','Bản vẽ kích thước 1000kVA','CO – Certificate of Origin','CQ – Certificate of Quality'].map(x=><article key={x}><span>PDF</span><b>{x}</b><button>Tải xuống</button></article>)}</div></section>
      <FaqBlock title="Câu hỏi về máy biến áp 1000kVA"/>
    </section>
  </>
}
