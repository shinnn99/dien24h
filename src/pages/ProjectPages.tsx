import { useState } from 'react'
import type { Navigate } from '../App'
import { Breadcrumb, CapabilityStrip, DarkCta, Eyebrow, LinkButton } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { phoneHref, projects } from '../data'

export function ProjectsPage({ navigate }: { navigate: Navigate }) {
  const [filter, setFilter] = useState('Tất cả')
  const filtered = filter === 'Tất cả' ? projects : projects.filter(p => p.tag.includes(filter))
  return <>
    <section className="projects-head"><div className="projects-head-bg" style={{backgroundImage:`url(${heroImg})`}}/><div className="container"><Breadcrumb navigate={navigate} items={[['Trang chủ','/'],['Dự án']]}/><Eyebrow>DỰ ÁN ĐIỆN CÔNG NGHIỆP</Eyebrow><h1>Dự án tiêu biểu</h1><p>Các nhóm công trình Điện 24H có năng lực triển khai; hồ sơ dự án chi tiết được cập nhật khi được khách hàng cho phép công bố.</p></div></section>
    <section className="container project-filter"><label>Ngành nghề<select><option>Tất cả ngành nghề</option><option>Nhà máy</option><option>Kho vận</option></select></label><label>Hạng mục<select value={filter} onChange={e=>setFilter(e.target.value)}><option>Tất cả</option><option>TRẠM BIẾN ÁP</option><option>ĐIỆN MẶT TRỜI</option><option>HỆ THỐNG ĐIỆN</option></select></label><label>Công suất<select><option>Chọn công suất</option><option>Dưới 1000kVA</option><option>Trên 1000kVA</option></select></label><label>Khu vực<select><option>Đồng Nai</option><option>Biên Hòa</option><option>Long Thành</option></select></label><button className="button navy">⌕ Lọc dự án</button></section>
    <section className="section container projects-page">
      <article className="featured-project"><div style={{backgroundImage:`url(${heroImg})`}}/><div><span>DỰ ÁN MẪU MINH HỌA</span><h2>Thi công trạm biến áp cho nhà máy tại Đồng Nai</h2><div className="project-meta"><b>⌖ Khu vực: Đồng Nai</b><b>▣ Hạng mục: Trạm biến áp</b><b>⚡ Công suất: Theo hồ sơ</b></div><p>Nội dung chi tiết sẽ sử dụng hồ sơ công trình và ảnh thực tế sau khi doanh nghiệp xác nhận quyền công bố.</p><LinkButton navigate={navigate} href="/du-an/tram-bien-ap-1000kva-bien-hoa" className="button outline">Xem cấu trúc chi tiết →</LinkButton></div></article>
      <CapabilityStrip items={[['10+','Năm kinh nghiệm','Theo nội dung công khai'],['22kV','Năng lực trung thế','Đường dây & trạm biến áp'],['24/7','Tiếp nhận sự cố','Theo thông tin dịch vụ'],['DOBICO','Năng lực pháp nhân','Hệ sinh thái xây lắp']]}/>
      <div className="project-grid listing">{filtered.map(p=><article className="project-card" key={p.title}><div className="project-image" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:p.pos}}><span>{p.tag}</span><i>ẢNH MINH HỌA</i></div><div className="project-body"><h3>{p.title}</h3><p>⌖ {p.location}</p><b>⚡ {p.power}</b><button onClick={()=>navigate(p.href)}>Xem chi tiết →</button></div></article>)}</div>
      <div className="pagination"><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div>
      <DarkCta navigate={navigate} />
    </section>
  </>
}

export function ProjectDetailPage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="project-detail-hero" style={{backgroundImage:`url(${heroImg})`}}><div className="project-detail-overlay"/><div className="container"><Breadcrumb navigate={navigate} items={[['Trang chủ','/'],['Dự án','/du-an'],['Chi tiết dự án']]}/><span className="tag">CẤU TRÚC CASE STUDY</span><h1>Thi công trạm biến áp<br />cho nhà máy tại Biên Hòa</h1><p>Trang mẫu thể hiện cách trình bày hồ sơ dự án: bài toán, giải pháp, phạm vi và kết quả. Dữ liệu chính thức sẽ được thay bằng hồ sơ đã xác minh.</p><div className="hero-actions"><LinkButton href="/lien-he" navigate={navigate}>Yêu cầu báo giá tương tự</LinkButton><LinkButton href={phoneHref} navigate={navigate} className="button secondary">Gọi kỹ sư</LinkButton></div></div></section>
    <div className="container project-facts">{[['Khách hàng','Chờ quyền công bố'],['Địa điểm','Biên Hòa, Đồng Nai'],['Hạng mục','Trạm biến áp & hệ thống điện'],['Công suất','Theo hồ sơ kỹ thuật'],['Thời gian','Chờ xác minh']].map(([t,v])=><div key={t}><small>{t}</small><b>{v}</b></div>)}</div>
    <section className="section container project-story">
      <div className="overview"><div><Eyebrow>TỔNG QUAN DỰ ÁN</Eyebrow><h2>Một hồ sơ dự án cần nói rõ điều gì?</h2><p>Mỗi case study chính thức sẽ mô tả bối cảnh phụ tải, phạm vi công việc, thiết bị, tiêu chuẩn, thời gian và kết quả nghiệm thu — không chỉ là một bộ ảnh đẹp.</p></div><ul><li>✓ Phạm vi và mục tiêu kỹ thuật rõ ràng</li><li>✓ Tiêu chuẩn áp dụng được dẫn chiếu</li><li>✓ Thiết bị và cấu hình theo hồ sơ</li><li>✓ Kết quả nghiệm thu có căn cứ</li></ul></div>
      <div className="challenge-solution"><article><Eyebrow>BÀI TOÁN KHÁCH HÀNG</Eyebrow><h2>Nhu cầu vận hành</h2><ul><li>Phụ tải sản xuất tăng và cần nguồn điện ổn định.</li><li>Yêu cầu an toàn, tiến độ và khả năng bảo trì.</li><li>Hạn chế tối đa gián đoạn trong quá trình triển khai.</li><li>Hồ sơ hoàn công và hướng dẫn vận hành đầy đủ.</li></ul></article><article><Eyebrow>GIẢI PHÁP TRIỂN KHAI</Eyebrow><div className="solution-steps">{['Khảo sát & thiết kế','Cung cấp thiết bị','Thi công lắp đặt','Thí nghiệm & bàn giao'].map((x,i)=><div key={x}><b>0{i+1}</b><h3>{x}</h3><p>{['Ghi nhận hiện trạng','Theo cấu hình duyệt','An toàn và kiểm soát','Nghiệm thu hồ sơ'][i]}</p></div>)}</div></article></div>
      <div className="section-title row-title"><div><Eyebrow>HÌNH ẢNH THI CÔNG</Eyebrow><h2>Trước · Trong · Sau</h2></div><small>Ảnh hiện tại chỉ là minh họa bố cục</small></div>
      <div className="project-gallery">{[42,57,68,76,88,33].map((x,i)=><div key={i} style={{backgroundImage:`url(${heroImg})`,backgroundPosition:`${x}% ${40+i*5}%`}}><span>Ảnh {i+1}</span></div>)}</div>
      <div className="results-grid"><article><Eyebrow>KẾT QUẢ ĐẠT ĐƯỢC</Eyebrow><div>{[['✓','Nghiệm thu','Theo hồ sơ'],['⌁','Vận hành','Theo kết quả đo'],['◇','An toàn','Theo biên bản'],['◷','Tiến độ','Theo hợp đồng']].map(([i,t,s])=><span key={t}><b>{i}</b><strong>{t}</strong><small>{s}</small></span>)}</div></article><article><Eyebrow>THIẾT BỊ SỬ DỤNG</Eyebrow><ul><li>Máy biến áp — theo cấu hình được duyệt</li><li>Tủ trung thế — theo hồ sơ kỹ thuật</li><li>Tủ hạ thế — theo sơ đồ nguyên lý</li><li>Cáp, tiếp địa và phụ kiện đồng bộ</li></ul></article><article className="quote-proof"><b>“</b><p>Testimonial chỉ hiển thị sau khi có nội dung thật và quyền sử dụng từ khách hàng.</p><span>Đại diện khách hàng</span></article></div>
      <section className="related-projects"><div className="section-title row-title"><h2>Dự án liên quan</h2><button onClick={()=>navigate('/du-an')} className="text-link">Xem tất cả →</button></div><div className="project-grid three">{projects.slice(1,4).map(p=><article className="project-card" key={p.title}><div className="project-image" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:p.pos}}/><div className="project-body"><h3>{p.title}</h3><p>{p.location}</p><button onClick={()=>navigate(p.href)}>Xem chi tiết →</button></div></article>)}</div></section>
      <DarkCta navigate={navigate} title="Bạn cần triển khai trạm biến áp tương tự?" text="Gửi công suất dự kiến, địa điểm và bản vẽ nếu có để kỹ sư tư vấn phạm vi phù hợp."/>
    </section>
  </>
}
