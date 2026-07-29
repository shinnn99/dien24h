import { useEffect, useState } from 'react'
import { SiteHeader, SiteFooter } from './components/SiteChrome'
import {
  AboutPage,
  ArticlePage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
  ProjectDetailPage,
  ProjectsPage,
  ServicePage,
} from './pages'
import './App.css'
import './home-v2.css'
import './typography.css'

export type Navigate = (href: string) => void

const normalizePath = (path: string) => {
  const clean = path.replace(/\/+/g, '/').replace(/\/$/, '')
  return clean || '/'
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate: Navigate = (href) => {
    const next = normalizePath(href)
    if (next !== path) window.history.pushState({}, '', next)
    setPath(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Điện 24H Đồng Nai | Điện công nghiệp & trạm biến áp 24/7',
      '/dich-vu/sua-chua-dien-24h': 'Sửa chữa điện công nghiệp 24/7 tại Đồng Nai | Điện 24H',
      '/dich-vu/tram-bien-ap': 'Thi công trạm biến áp 22kV tại Đồng Nai | Điện 24H',
      '/san-pham': 'Thiết bị điện công nghiệp chính hãng | Điện 24H',
      '/san-pham/may-bien-ap-dau-1000kva': 'Máy biến áp dầu 1000kVA 22/0.4kV | Điện 24H',
      '/du-an': 'Dự án điện công nghiệp tiêu biểu | Điện 24H Đồng Nai',
      '/du-an/tram-bien-ap-1000kva-bien-hoa': 'Thi công trạm biến áp 1000kVA tại Biên Hòa | Điện 24H',
      '/kien-thuc/chi-phi-lap-tram-bien-ap': 'Chi phí lắp trạm biến áp gồm những gì? | Điện 24H',
      '/gioi-thieu': 'Về Điện 24H Đồng Nai | Thương hiệu thuộc DOBICO',
      '/lien-he': 'Liên hệ & yêu cầu báo giá | Điện 24H Đồng Nai',
    }
    document.title = titles[path] || 'Điện 24H Đồng Nai'
    const descriptions: Record<string, string> = {
      '/': 'Điện 24H Đồng Nai: trạm biến áp 22kV, điện nhà xưởng, thiết bị điện và tiếp nhận xử lý sự cố 24/7.',
      '/dich-vu/sua-chua-dien-24h': 'Tiếp nhận, chẩn đoán và xử lý sự cố điện công nghiệp tại Đồng Nai.',
      '/dich-vu/tram-bien-ap': 'Khảo sát, thiết kế, thi công, thí nghiệm và bàn giao đường dây, trạm biến áp 22kV.',
      '/san-pham': 'Danh mục máy biến áp, dây cáp, thiết bị đóng cắt và tủ điện theo yêu cầu dự án.',
      '/du-an': 'Cấu trúc hồ sơ dự án điện công nghiệp và các nhóm công trình của Điện 24H Đồng Nai.',
      '/gioi-thieu': 'Giới thiệu Điện 24H trong hệ sinh thái xây lắp DOBICO và các lĩnh vực hoạt động.',
      '/lien-he': 'Hotline, email, địa chỉ và biểu mẫu yêu cầu báo giá Điện 24H Đồng Nai.',
    }
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', descriptions[path] || 'Website Điện 24H Đồng Nai.')
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://dien24h.vn${path === '/' ? '' : path}`
  }, [path])

  const renderPage = () => {
    if (path === '/') return <HomePage navigate={navigate} />
    if (path === '/dich-vu/sua-chua-dien-24h') return <ServicePage navigate={navigate} variant="repair" />
    if (path === '/dich-vu/tram-bien-ap') return <ServicePage navigate={navigate} variant="transformer" />
    if (path === '/dich-vu/dien-cong-nghiep') return <ServicePage navigate={navigate} variant="industrial" />
    if (path === '/dich-vu/bao-tri-thi-nghiem-dien') return <ServicePage navigate={navigate} variant="maintenance" />
    if (path === '/dich-vu/solar') return <ServicePage navigate={navigate} variant="solar" />
    if (path === '/dich-vu/may-phat-dien') return <ServicePage navigate={navigate} variant="generator" />
    if (path === '/dich-vu/chong-set') return <ServicePage navigate={navigate} variant="lightning" />
    if (path === '/san-pham') return <ProductsPage navigate={navigate} />
    if (path === '/san-pham/may-bien-ap-dau-1000kva') return <ProductDetailPage navigate={navigate} />
    if (path === '/du-an') return <ProjectsPage navigate={navigate} />
    if (path === '/du-an/tram-bien-ap-1000kva-bien-hoa') return <ProjectDetailPage navigate={navigate} />
    if (path === '/kien-thuc/chi-phi-lap-tram-bien-ap') return <ArticlePage navigate={navigate} />
    if (path === '/kien-thuc') return <ArticlePage navigate={navigate} index />
    if (path === '/gioi-thieu' || path === '/ho-so-nang-luc') return <AboutPage navigate={navigate} />
    if (path === '/lien-he' || path === '/yeu-cau-bao-gia') return <ContactPage navigate={navigate} />
    return <NotFoundPage navigate={navigate} />
  }

  return (
    <main>
      <SiteHeader path={path} navigate={navigate} />
      {renderPage()}
      <SiteFooter navigate={navigate} />
    </main>
  )
}

export default App
