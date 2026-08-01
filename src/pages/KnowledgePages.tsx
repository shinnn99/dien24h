import { ArrowRight, Boxes, Cable, ClipboardCheck, Construction, HardHat, Info, PhoneCall, type LucideIcon } from 'lucide-react'
import type { Navigate } from '../App'
import { Breadcrumb, Eyebrow, LinkButton } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { phoneDisplay, phoneHref } from '../data'

const costGroups: [LucideIcon, string][] = [
  [Boxes, 'Thiết bị chính'],
  [Cable, 'Vật tư phụ'],
  [Construction, 'Xây dựng'],
  [HardHat, 'Nhân công'],
  [ClipboardCheck, 'Thí nghiệm'],
]

export function ArticlePage({ navigate, index = false }: { navigate: Navigate; index?: boolean }) {
  if (index) return <KnowledgeIndex navigate={navigate} />

  return <div className="knowledge-page">
    <section className="article-head container">
      <Breadcrumb navigate={navigate} items={[["Trang chủ", "/"], ["Kiến thức", "/kien-thuc"], ["Chi phí lắp trạm biến áp"]]} />
      <span className="tag">KIẾN THỨC KỸ THUẬT</span>
      <small>Cập nhật: 20/05/2024</small>
      <h1>Chi phí lắp trạm biến áp gồm những gì?</h1>
      <p>Tổng hợp các nhóm chi phí từ thiết bị, vật tư, xây dựng đến thí nghiệm để doanh nghiệp chuẩn bị ngân sách và hồ sơ báo giá.</p>
      <div className="author-line"><span>KỸ SƯ</span><div><b>Ban kỹ thuật Điện 24H</b><small>Nội dung cần được chuyên gia doanh nghiệp duyệt trước khi công bố</small></div></div>
    </section>

    <section className="container article-layout">
      <aside className="article-sidebar">
        <div className="toc"><b>MỤC LỤC</b>{['Tổng quan về chi phí', 'Các khoản chi phí chính', 'Chi phí theo công suất', 'Yếu tố ảnh hưởng', 'Quy trình và thời gian', 'Câu hỏi thường gặp'].map((item, index) => <a key={item} href={`#muc-${index + 1}`}>{index + 1}. {item}</a>)}</div>
        <div className="consult-card"><Eyebrow light>TƯ VẤN KỸ THUẬT</Eyebrow><h3>Đội ngũ sẵn sàng hỗ trợ</h3><p>Khảo sát nhu cầu và bóc tách phạm vi trước khi báo giá.</p><a className="button primary" href={phoneHref}><PhoneCall size={17} aria-hidden="true" /> {phoneDisplay}</a></div>
        <div className="related-docs"><b>TÀI LIỆU LIÊN QUAN</b><span>PDF · Checklist khảo sát</span><span>PDF · Hồ sơ nghiệm thu mẫu</span><span>PDF · Danh mục tài liệu kỹ thuật</span></div>
      </aside>

      <article className="article-content">
        <div className="article-cover" style={{ backgroundImage: `url(${heroImg})` }}><span>ẢNH MINH HỌA</span></div>
        <div className="article-note"><Info size={18} aria-hidden="true" /><span>Chi phí phụ thuộc công suất, chủng loại thiết bị, vị trí lắp đặt và yêu cầu đấu nối. Cần khảo sát để lập báo giá chính xác.</span></div>
        <h2 id="muc-1">1. Tổng quan về chi phí lắp trạm biến áp</h2>
        <p>Chi phí không chỉ gồm máy biến áp. Một dự toán đầy đủ thường bao gồm thiết bị chính, vật tư phụ, xây dựng, nhân công, thí nghiệm và hồ sơ nghiệm thu.</p>
        <h2 id="muc-2">2. Các khoản chi phí chính</h2>
        <div className="cost-groups">{costGroups.map(([Icon, title]) => <div key={title}><span><Icon size={24} aria-hidden="true" /></span><b>{title}</b></div>)}</div>
        <h3>2.1. Chi phí thiết bị</h3>
        <ul><li>Máy biến áp theo công suất và cấu hình kỹ thuật.</li><li>Tủ điện trung thế, hạ thế, dao cách ly và bảo vệ.</li><li>Thiết bị đo đếm và hệ thống điều khiển.</li></ul>
        <div className="article-image-right" style={{ backgroundImage: `url(${heroImg})` }} />
        <h3>2.2. Chi phí xây dựng</h3>
        <ul><li>Móng trạm, nhà trạm hoặc kết cấu đỡ.</li><li>Hệ thống tiếp địa, thoát nước và hàng rào.</li><li>Hạ tầng kéo cáp và đấu nối.</li></ul>
        <div className="article-image-right second" style={{ backgroundImage: `url(${heroImg})` }} />
        <h3>2.3. Chi phí nhân công & thí nghiệm</h3>
        <ul><li>Lắp đặt, đấu nối và kiểm tra thiết bị.</li><li>Thí nghiệm, hiệu chỉnh và nghiệm thu.</li><li>Hồ sơ hoàn công và hướng dẫn vận hành.</li></ul>
        <div className="article-inline-cta"><div><b>Bạn cần dự toán chi tiết cho dự án?</b><span>Gửi công suất, địa điểm và bản vẽ hiện có.</span></div><LinkButton navigate={navigate} href="/lien-he">Yêu cầu báo giá <ArrowRight size={18} aria-hidden="true" /></LinkButton></div>
        <h2 id="muc-3">3. Chi phí theo công suất</h2>
        <p>Không nên dùng một đơn giá chung cho mọi công suất. Cấu hình bảo vệ, phương án xây dựng, chiều dài tuyến cáp và yêu cầu đấu nối có thể làm thay đổi đáng kể tổng chi phí.</p>
        <h2 id="muc-4">4. Yếu tố ảnh hưởng đến chi phí</h2>
        <p>Công suất, loại máy biến áp, mặt bằng, khoảng cách đấu nối, tiêu chuẩn của chủ đầu tư và tiến độ là các yếu tố cần xác nhận trong bước khảo sát.</p>
        <section className="related-articles"><h2>Bài viết liên quan</h2><div>{['Trạm biến áp là gì? Cấu tạo và nguyên lý', 'Quy trình lắp đặt trạm biến áp chuẩn kỹ thuật', 'Kinh nghiệm nghiệm thu trạm biến áp', 'Hướng dẫn bảo trì trạm biến áp định kỳ'].map(title => <button key={title} onClick={() => navigate('/kien-thuc/chi-phi-lap-tram-bien-ap')}><span style={{ backgroundImage: `url(${heroImg})` }} /><b>{title}</b><small>Kiến thức kỹ thuật</small></button>)}</div></section>
        <div className="author-card"><span>KỸ SƯ</span><div><b>Ban kỹ thuật Điện 24H</b><p>Nội dung chuyên môn cần được rà soát bởi người phụ trách kỹ thuật trước khi xuất bản chính thức.</p></div></div>
      </article>
    </section>

  </div>
}

function KnowledgeIndex({ navigate }: { navigate: Navigate }) {
  const articles = ['Chi phí lắp trạm biến áp gồm những gì?', 'Nhà xưởng nên dùng máy biến áp bao nhiêu kVA?', 'MCCB tổng nhảy liên tục do đâu?', 'ACB và MCCB khác nhau như thế nào?', 'Bao lâu phải bảo trì trạm biến áp?', 'Chọn tiết diện cáp cho nhà xưởng']

  return <div className="knowledge-page">
    <section className="projects-head">
      <div className="projects-head-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="container"><Breadcrumb navigate={navigate} items={[["Trang chủ", "/"], ["Kiến thức"]]} /><Eyebrow>THƯ VIỆN KỸ THUẬT</Eyebrow><h1>Kiến thức điện công nghiệp</h1><p>Nội dung thực tiễn dành cho người phụ trách kỹ thuật, mua hàng và vận hành nhà máy.</p></div>
    </section>
    <section className="section container"><div className="article-card-grid">{articles.map((title, index) => <article key={title}><div style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: `${45 + index * 8}% center` }} /><span>{index % 2 ? 'HƯỚNG DẪN' : 'KỸ THUẬT'}</span><h2>{title}</h2><p>Góc nhìn thực tế để chuẩn bị yêu cầu, đánh giá giải pháp và làm việc với nhà thầu.</p><button onClick={() => navigate('/kien-thuc/chi-phi-lap-tram-bien-ap')}>Đọc bài viết <ArrowRight size={17} aria-hidden="true" /></button></article>)}</div></section>
  </div>
}
