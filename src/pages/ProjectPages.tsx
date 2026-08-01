import type { Navigate } from '../App'
import { Breadcrumb, CapabilityStrip, DarkCta, Eyebrow, LinkButton } from '../components/Blocks'
import heroImg from '../assets/dien24h-hero.png'

type WorkGroup = {
  tag: string
  title: string
  description: string
  href: string
  pos: string
}

const publishedWorkGroups: WorkGroup[] = [
  {
    tag: 'ĐƯỜNG DÂY & TRẠM BIẾN ÁP',
    title: 'Xây lắp và bảo trì trạm biến áp',
    description: 'Tư vấn thiết kế, thi công đường dây trung thế, lắp đặt, bảo trì và thí nghiệm trạm biến áp.',
    href: '/dich-vu/tram-bien-ap',
    pos: '70% 40%',
  },
  {
    tag: 'SỬA CHỮA ĐIỆN 24H',
    title: 'Xử lý sự cố điện ngày và đêm',
    description: 'Tiếp nhận sự cố chập cháy, mất pha, cân pha, đảo pha cho nhà xưởng và điện dân dụng.',
    href: '/dich-vu/sua-chua-dien-24h',
    pos: '86% 48%',
  },
  {
    tag: 'THIẾT BỊ ĐIỆN 24H',
    title: 'Cung cấp và lắp đặt thiết bị điện',
    description: 'Thiết bị chiếu sáng, thiết bị đóng cắt và tủ điện điều khiển; giao hàng và bảo hành tại công trình.',
    href: '/san-pham',
    pos: '91% 55%',
  },
  {
    tag: 'SOLAR 24H',
    title: 'Giải pháp điện mặt trời cho doanh nghiệp',
    description: 'Tư vấn và thi công hệ thống điện mặt trời hòa lưới, bám tải và giải pháp có lưu trữ.',
    href: '/dich-vu/solar',
    pos: '14% 58%',
  },
  {
    tag: 'CHỐNG SÉT 24H',
    title: 'Chống sét và hệ thống tiếp địa',
    description: 'Thi công chống sét trực tiếp, chống sét lan truyền, tiếp địa và đo kiểm điện trở đất.',
    href: '/dich-vu/chong-set',
    pos: '72% 28%',
  },
  {
    tag: 'MÁY PHÁT ĐIỆN 24H',
    title: 'Nguồn điện dự phòng cho công trình',
    description: 'Cho thuê máy phát điện công nghiệp ngắn hoặc dài hạn, cung cấp máy mới hoặc đã qua sử dụng và bảo trì định kỳ.',
    href: '/dich-vu/may-phat-dien',
    pos: '80% 58%',
  },
]

export function ProjectsPage({ navigate }: { navigate: Navigate }) {
  return <>
    <section className="projects-head">
      <div className="projects-head-bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="container">
        <Breadcrumb navigate={navigate} items={[["Trang chủ", '/'], ['Hồ sơ công trình']]} />
        <Eyebrow>HỒ SƠ CÔNG TRÌNH</Eyebrow>
        <h1>Hồ sơ công trình đang cập nhật</h1>
        <p>Điện 24H chưa công bố tên khách hàng, địa điểm, quy mô hoặc hình ảnh của dự án cụ thể. Nội dung sẽ được cập nhật khi có hồ sơ xác minh và quyền sử dụng.</p>
      </div>
    </section>

    <section className="section container projects-page">
      <article className="featured-project">
        <div style={{ backgroundImage: `url(${heroImg})` }} />
        <div>
          <span>NGUYÊN TẮC CÔNG BỐ</span>
          <h2>Chỉ đăng hồ sơ công trình có thông tin được xác nhận</h2>
          <div className="project-meta">
            <b>Hình ảnh có quyền sử dụng</b>
            <b>Phạm vi công việc rõ ràng</b>
            <b>Kết quả có căn cứ</b>
          </div>
          <p>Trong thời gian chờ dữ liệu thực tế, trang này chỉ trình bày các nhóm công việc Điện 24H đang giới thiệu trên website, không gán tên khách hàng, công suất hoặc địa điểm cho dự án mẫu.</p>
          <LinkButton navigate={navigate} href="/lien-he" className="button outline">Trao đổi nhu cầu công trình →</LinkButton>
        </div>
      </article>

      <CapabilityStrip items={[
        ['10+', 'Năm kinh nghiệm', 'Theo nội dung đang công bố'],
        ['24/7', 'Tiếp nhận sự cố', 'Phục vụ ngày và đêm'],
        ['6', 'Nhóm dịch vụ', 'Hệ sinh thái điện trọn gói'],
        ['Đồng Nai', 'Khu vực được nhắc đến', 'Biên Hòa và khu công nghiệp'],
      ]} />

      <div className="section-title row-title">
        <div>
          <Eyebrow>PHẠM VI ĐANG GIỚI THIỆU</Eyebrow>
          <h2>Các nhóm công việc có thể trao đổi</h2>
          <p>Đây là phạm vi dịch vụ được công bố, không phải danh sách dự án đã nghiệm thu.</p>
        </div>
      </div>

      <div className="project-grid listing">
        {publishedWorkGroups.map(group => <article className="project-card" key={group.title}>
          <div className="project-image" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: group.pos }}>
            <span>{group.tag}</span>
            <i>HÌNH MINH HỌA</i>
          </div>
          <div className="project-body">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <button type="button" onClick={() => navigate(group.href)}>Xem phạm vi dịch vụ →</button>
          </div>
        </article>)}
      </div>

      <section className="project-story">
        <div className="overview">
          <div>
            <Eyebrow>HỒ SƠ SẼ ĐƯỢC BỔ SUNG</Eyebrow>
            <h2>Mỗi công trình cần có dữ liệu kiểm chứng</h2>
            <p>Khi được phép công bố, mỗi hồ sơ sẽ nêu rõ hạng mục, địa điểm, quy mô, thời gian triển khai, hình ảnh thực tế và kết quả đạt được.</p>
          </div>
          <ul>
            <li>✓ Tên hoặc nhóm khách hàng được phép công bố</li>
            <li>✓ Phạm vi thi công và thiết bị sử dụng</li>
            <li>✓ Hình ảnh thực tế có nguồn rõ ràng</li>
            <li>✓ Kết quả nghiệm thu hoặc bàn giao có căn cứ</li>
          </ul>
        </div>
      </section>

      <DarkCta navigate={navigate} title="Bạn đang có công trình cần tư vấn?" text="Chia sẻ nhu cầu, địa điểm và thông tin hiện có để Điện 24H trao đổi phạm vi phù hợp." />
    </section>
  </>
}

export function ProjectDetailPage({ navigate }: { navigate: Navigate }) {
  return <ProjectsPage navigate={navigate} />
}
