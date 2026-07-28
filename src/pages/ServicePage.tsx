import type { Navigate } from '../App'
import { DarkCta, Eyebrow, FaqBlock, LinkButton, PageHero, QuoteForm } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'
import { phoneDisplay, phoneHref } from '../data'

const variants = {
  repair: {
    eyebrow: 'DỊCH VỤ SỬA CHỮA ĐIỆN 24H',
    title: <>Xử lý sự cố<br />điện công nghiệp <span>24/7</span></>,
    text: 'Chẩn đoán và xử lý mất điện, nhảy Aptomat, chập cháy, mất pha, quá tải và lỗi tủ điện cho nhà máy, kho, xưởng.',
    stats: [['30–60 phút','Mục tiêu điều phối','Cần xác nhận theo khu vực'],['Trực 24/7','Tiếp nhận yêu cầu','Kể cả ngày lễ'],['Kỹ sư hiện trường','Chẩn đoán sự cố','Thiết bị đo phù hợp'],['Đồng Nai','Khu vực phục vụ','Theo khả năng điều phối']],
    section: 'SỰ CỐ THƯỜNG GẶP',
    items: [['ϟ','Mất điện đột ngột'],['▣','Nhảy Aptomat liên tục'],['♨','Chập cháy, mùi khét'],['⌁','Mất pha, lệch pha'],['◴','Quá tải, nóng thiết bị'],['▤','Lỗi tủ điện, MCCB/ACB']],
    process: ['Tiếp nhận yêu cầu','Điều phối kỹ sư','Kiểm tra & chẩn đoán','Xử lý sự cố','Kiểm tra & bàn giao'],
    packages: ['Xử lý sự cố khẩn cấp 24/7','Kiểm tra định kỳ','Bảo trì hệ thống điện','Thay thế thiết bị'],
    evidence: 'Kỹ thuật tại Đồng Nai',
    caseTitle: 'Sự cố nhảy ACB tổng nhà xưởng',
  },
  transformer: {
    eyebrow: 'ĐƯỜNG DÂY & TRẠM BIẾN ÁP 22KV',
    title: <>Thi công trạm biến áp<br />trọn gói tại <span>Đồng Nai</span></>,
    text: 'Từ khảo sát, thiết kế, thi công, thí nghiệm đến nghiệm thu và đóng điện.',
    stats: [['22kV','Đường dây trung thế','Theo năng lực công bố'],['Trọn gói','Phạm vi triển khai','Từ khảo sát đến bàn giao'],['Hồ sơ','Thiết kế & nghiệm thu','Theo yêu cầu dự án'],['Đồng Nai','Khu vực trọng tâm','Nhà máy & KCN']],
    section: 'LOẠI CÔNG VIỆC TRIỂN KHAI',
    items: [['▥','Trạm biến áp nền'],['▣','Trạm kiosk hợp bộ'],['⌁','Đường dây trung thế'],['⚡','Nâng công suất trạm'],['◎','Thí nghiệm điện'],['⚙','Bảo trì trạm biến áp']],
    process: ['Khảo sát hiện trạng','Thiết kế & dự toán','Thống nhất hồ sơ','Thi công lắp đặt','Thí nghiệm & bàn giao'],
    packages: ['Khảo sát & thiết kế','Đường dây trung thế 22kV','Thi công trạm biến áp','Thí nghiệm & đóng điện'],
    evidence: 'Năng lực triển khai tại Đồng Nai',
    caseTitle: 'Cấu trúc hồ sơ dự án trạm biến áp',
  },
  industrial: {
    eyebrow: 'ĐIỆN CÔNG NGHIỆP',
    title: <>Hệ thống điện nhà xưởng<br /><span>an toàn & ổn định</span></>,
    text: 'Thiết kế và thi công điện động lực, chiếu sáng, tủ phân phối, cáp nguồn và hệ thống tiếp địa.',
    stats: [['MSB/MCC','Tủ điện phân phối','Theo thiết kế'],['Động lực','Hệ thống cấp nguồn','Cho dây chuyền sản xuất'],['Chiếu sáng','Nhà xưởng & kho','Theo tiêu chuẩn'],['Đồng Nai','Khu vực trọng tâm','Nhà máy & KCN']],
    section: 'HẠNG MỤC ĐIỆN NHÀ XƯỞNG',
    items: [['▥','Tủ điện MSB/MCC'],['⌁','Cáp động lực'],['☀','Chiếu sáng nhà xưởng'],['⏚','Tiếp địa an toàn'],['▣','ATS & nguồn dự phòng'],['⚙','Điều khiển tự động']],
    process: ['Khảo sát phụ tải','Thiết kế hệ thống','Bóc tách & báo giá','Thi công lắp đặt','Đo kiểm & bàn giao'],
    packages: ['Thiết kế điện nhà xưởng','Thi công điện động lực','Tủ điện & điều khiển','Cải tạo & nâng cấp'],
    evidence: 'Năng lực phục vụ nhà máy',
    caseTitle: 'Cấu trúc hồ sơ hệ thống điện nhà xưởng',
  },
  maintenance: {
    eyebrow: 'BẢO TRÌ & THÍ NGHIỆM ĐIỆN',
    title: <>Đánh giá tình trạng<br /><span>trước khi xảy ra sự cố</span></>,
    text: 'Kiểm tra, đo lường, vệ sinh, hiệu chỉnh và lập báo cáo kỹ thuật cho hệ thống điện.',
    stats: [['Định kỳ','Kế hoạch bảo trì','Theo điều kiện vận hành'],['Đo kiểm','Thiết bị chuyên dụng','Theo hạng mục'],['Báo cáo','Kết quả kỹ thuật','Có kiến nghị xử lý'],['An toàn','Quy trình cô lập','Theo phương án duyệt']],
    section: 'HẠNG MỤC KIỂM TRA',
    items: [['◎','Máy biến áp'],['▣','Tủ trung & hạ thế'],['⌁','Cáp và đầu cáp'],['⏚','Hệ thống tiếp địa'],['⚙','Thiết bị đóng cắt'],['◷','Chất lượng điện năng']],
    process: ['Tiếp nhận hồ sơ','Lập phương án','Đo kiểm hiện trường','Phân tích kết quả','Báo cáo & kiến nghị'],
    packages: ['Bảo trì trạm biến áp','Bảo trì tủ điện','Thí nghiệm thiết bị','Đo kiểm tiếp địa'],
    evidence: 'Kế hoạch bảo trì theo hệ thống',
    caseTitle: 'Cấu trúc báo cáo đo kiểm',
  },
  solar: {
    eyebrow: 'ĐIỆN MẶT TRỜI DOANH NGHIỆP',
    title: <>Giải pháp solar<br /><span>cho mái nhà công nghiệp</span></>,
    text: 'Khảo sát phụ tải, mặt bằng, thiết kế và triển khai hệ thống điện mặt trời theo hồ sơ được duyệt.',
    stats: [['Khảo sát','Mái & phụ tải','Đánh giá trước thiết kế'],['Thiết kế','Sơ đồ & bố trí','Theo điều kiện thực tế'],['Thi công','Lắp đặt đồng bộ','An toàn trên cao'],['Bàn giao','Hồ sơ vận hành','Theo phạm vi hợp đồng']],
    section: 'PHẠM VI TRIỂN KHAI',
    items: [['☀','Khảo sát mái'],['⌁','Thiết kế điện'],['▣','Tấm pin & inverter'],['⏚','Tiếp địa & chống sét'],['◎','Giám sát hệ thống'],['⚙','Bảo trì định kỳ']],
    process: ['Khảo sát hiện trạng','Phân tích phụ tải','Thiết kế giải pháp','Thi công lắp đặt','Kiểm tra & bàn giao'],
    packages: ['Khảo sát & thiết kế','Solar mái nhà xưởng','Hệ thống giám sát','Vận hành & bảo trì'],
    evidence: 'Giải pháp theo nhu cầu sử dụng điện',
    caseTitle: 'Cấu trúc hồ sơ dự án solar',
  },
  generator: {
    eyebrow: 'MÁY PHÁT ĐIỆN & ATS',
    title: <>Nguồn điện dự phòng<br /><span>sẵn sàng khi cần</span></>,
    text: 'Tư vấn máy phát điện, ATS, hòa đồng bộ và bảo trì theo nhu cầu phụ tải doanh nghiệp.',
    stats: [['Dự phòng','Theo phụ tải ưu tiên','Tính toán công suất'],['ATS','Chuyển nguồn','Theo cấu hình'],['Bảo trì','Theo lịch vận hành','Kiểm tra định kỳ'],['Hỗ trợ','Kỹ thuật hiện trường','Theo khu vực']],
    section: 'HẠNG MỤC MÁY PHÁT ĐIỆN',
    items: [['⚡','Tư vấn công suất'],['▣','Tủ ATS'],['⌁','Cáp & đấu nối'],['◎','Hòa đồng bộ'],['⚙','Bảo trì máy phát'],['◷','Chạy thử có tải']],
    process: ['Khảo sát phụ tải','Chọn cấu hình','Cung cấp thiết bị','Lắp đặt & đấu nối','Chạy thử & bàn giao'],
    packages: ['Cung cấp máy phát','Tủ ATS & chuyển nguồn','Lắp đặt đồng bộ','Bảo trì máy phát'],
    evidence: 'Nguồn dự phòng theo tải ưu tiên',
    caseTitle: 'Cấu trúc phương án nguồn dự phòng',
  },
  lightning: {
    eyebrow: 'CHỐNG SÉT & TIẾP ĐỊA',
    title: <>Bảo vệ công trình<br /><span>từ xung sét & quá áp</span></>,
    text: 'Khảo sát, thiết kế, thi công và đo kiểm hệ thống chống sét trực tiếp, lan truyền và tiếp địa.',
    stats: [['Trực tiếp','Kim & dây thoát sét','Theo thiết kế'],['Lan truyền','SPD bảo vệ thiết bị','Theo cấp bảo vệ'],['Tiếp địa','Đo điện trở đất','Theo yêu cầu'],['Hồ sơ','Kết quả đo kiểm','Theo phạm vi']],
    section: 'PHẠM VI CHỐNG SÉT',
    items: [['ϟ','Chống sét trực tiếp'],['▣','Chống sét lan truyền'],['⏚','Hệ thống tiếp địa'],['⌁','Dây thoát sét'],['◎','Đo điện trở đất'],['⚙','Bảo trì định kỳ']],
    process: ['Khảo sát công trình','Thiết kế bảo vệ','Bóc tách vật tư','Thi công lắp đặt','Đo kiểm & bàn giao'],
    packages: ['Chống sét trực tiếp','SPD lan truyền','Hệ thống tiếp địa','Đo kiểm định kỳ'],
    evidence: 'Giải pháp theo đặc điểm công trình',
    caseTitle: 'Cấu trúc hồ sơ đo kiểm chống sét',
  },
}

export type ServiceVariant = keyof typeof variants

export function ServicePage({ navigate, variant }: { navigate: Navigate; variant: ServiceVariant }) {
  const info = variants[variant]
  return <>
    <PageHero navigate={navigate} eyebrow={info.eyebrow} title={info.title} text={info.text}>
      <div className="hero-actions"><LinkButton href={phoneHref} navigate={navigate}>☎ Gọi khẩn cấp {phoneDisplay}</LinkButton><LinkButton href="/lien-he" navigate={navigate} className="button secondary">Gửi yêu cầu →</LinkButton></div>
    </PageHero>
    <div className="container service-commitments">{info.stats.map(([n,t,s]) => <div key={t}><b>{n}</b><span><strong>{t}</strong><small>{s}</small></span></div>)}</div>

    <section className="section container">
      <div className="section-title center"><Eyebrow>{info.section}</Eyebrow><h2>Phạm vi công việc rõ ràng</h2></div>
      <div className="issue-grid">{info.items.map(([i,t]) => <article key={t}><span>{i}</span><h3>{t}</h3><p>Phạm vi và tiêu chuẩn được xác nhận theo hồ sơ kỹ thuật của từng dự án.</p></article>)}</div>
    </section>

    <section className="section surface"><div className="container">
      <div className="section-title center"><Eyebrow>QUY TRÌNH TIẾP NHẬN</Eyebrow><h2>Điều phối và xử lý nhanh</h2></div>
      <div className="process-steps">{info.process.map((x,i)=><article key={x}><b>0{i+1}</b><span>{['☎','⌖','⌕','⚙','✓'][i]}</span><h3>{x}</h3><p>{['Ghi nhận đầu vào','Đánh giá thực tế','Phạm vi minh bạch','Theo phương án duyệt','Hồ sơ đầy đủ'][i]}</p></article>)}</div>
    </div></section>

    <section className="section container">
      <div className="section-title center"><Eyebrow>GÓI DỊCH VỤ</Eyebrow><h2>Chọn đúng mức hỗ trợ</h2></div>
      <div className="service-package-grid">{info.packages.map((x,i)=><article key={x}><div className="package-image" style={{backgroundImage:`url(${heroImg})`,backgroundPosition:`${55+i*8}% center`}}/><h3>{x}</h3><ul><li>Khảo sát và xác nhận phạm vi</li><li>Đề xuất phương án trước khi thực hiện</li><li>Hồ sơ kỹ thuật theo công việc</li></ul><button onClick={()=>navigate('/lien-he')}>{variant==='repair'&&i===0?'Gọi ngay '+phoneDisplay:'Nhận tư vấn'}</button></article>)}</div>
    </section>

    <section className="section surface"><div className="container two-col evidence-grid">
      <article className="service-area"><Eyebrow>KHU VỰC & NĂNG LỰC</Eyebrow><h2>{info.evidence}</h2><div className="map-visual"><span>24H</span><i>Biên Hòa</i><i>Long Thành</i><i>Nhơn Trạch</i><i>Trảng Bom</i></div><p>Khu vực và thời gian điều phối được xác nhận theo địa điểm, hiện trạng và năng lực vận hành tại thời điểm tiếp nhận.</p></article>
      <article><Eyebrow>HỒ SƠ MINH HỌA</Eyebrow><h2>{info.caseTitle}</h2><div className="before-after"><div style={{backgroundImage:`url(${heroImg})`}}><span>HIỆN TRẠNG</span></div><div style={{backgroundImage:`url(${heroImg})`}}><span>GIẢI PHÁP</span></div></div><h3>Nội dung chờ hồ sơ thực tế</h3><p>Case study chính thức chỉ hiển thị sau khi có dữ liệu xác minh và quyền sử dụng hình ảnh.</p></article>
    </div></section>

    <section className="section container three-col-bottom"><FaqBlock title="Câu hỏi về dịch vụ" /><div className="emergency-card"><Eyebrow light>HỖ TRỢ KHẨN CẤP</Eyebrow><h2>{phoneDisplay}</h2><p>Gọi ngay · Có mặt nhanh · Xử lý triệt để</p><a href={phoneHref} className="button primary">☎ Gọi kỹ sư</a></div><QuoteForm compact /></section>
    <div className="container cta-spacing"><DarkCta navigate={navigate} title="Đừng để sự cố làm gián đoạn sản xuất" text="Gọi trực tiếp để kỹ sư tiếp nhận tình trạng và hướng dẫn bước an toàn đầu tiên." /></div>
  </>
}
