import { useEffect, useState } from 'react'
import { SiteHeader, SiteFooter } from './components/SiteChrome'
import { FloatingContact } from './components/FloatingContact'
import { BackToTop } from './components/BackToTop'
import {
  AboutPage,
  ArticlePage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
  ServicePage,
} from './pages'
import './App.css'
import './typography.css'
import './home-v2.css'

export type Navigate = (href: string) => void

const normalizePath = (path: string) => {
  const clean = path.replace(/\/+/g, '/').replace(/\/$/, '')
  return clean || '/'
}

const routeAliases: Record<string, string> = {
  '/dich-vu/bao-tri-thi-nghiem-dien': '/dich-vu/tram-bien-ap',
  '/san-pham/may-bien-ap-dau-1000kva': '/san-pham/may-bien-ap',
  '/du-an': '/lien-he',
  '/du-an/tram-bien-ap-1000kva-bien-hoa': '/lien-he',
  '/ho-so-nang-luc': '/gioi-thieu',
  '/yeu-cau-bao-gia': '/lien-he',
}

const resolvePath = (path: string) => {
  const normalized = normalizePath(path)
  return routeAliases[normalized] || normalized
}

function App() {
  const [path, setPath] = useState(() => resolvePath(window.location.pathname))

  useEffect(() => {
    const syncPath = () => {
      const requestedPath = normalizePath(window.location.pathname)
      const resolvedPath = resolvePath(requestedPath)
      if (resolvedPath !== requestedPath) window.history.replaceState({}, '', resolvedPath)
      setPath(resolvedPath)
    }
    syncPath()
    const onPopState = () => syncPath()
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate: Navigate = (href) => {
    const next = resolvePath(href)
    if (next !== path) window.history.pushState({}, '', next)
    setPath(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Điện 24H Đồng Nai | Giải pháp điện công nghiệp & dân dụng',
      '/dich-vu/sua-chua-dien-24h': 'Sửa chữa điện 24H tại Đồng Nai | Điện 24H',
      '/dich-vu/tram-bien-ap': 'Đường dây & trạm biến áp tại Đồng Nai | Điện 24H',
      '/dich-vu/dien-cong-nghiep': 'Cung cấp & lắp đặt thiết bị điện | Điện 24H',
      '/dich-vu/solar': 'Điện mặt trời hòa lưới, bám tải & lưu trữ | Điện 24H',
      '/dich-vu/may-phat-dien': 'Cho thuê & cung cấp máy phát điện | Điện 24H',
      '/dich-vu/chong-set': 'Thi công chống sét & tiếp địa | Điện 24H',
      '/san-pham': 'Vật tư & thiết bị điện cho công trình | Điện 24H',
      '/san-pham/may-bien-ap': 'Máy biến áp 22 kV Thibidi, Shilin EMC, MBT | Điện 24H',
      '/kien-thuc': 'Kiến thức điện công nghiệp | Điện 24H',
      '/kien-thuc/chi-phi-lap-tram-bien-ap': 'Chi phí lắp trạm biến áp gồm những gì? | Điện 24H',
      '/gioi-thieu': 'Về Điện 24H Đồng Nai | Hơn 10 năm kinh nghiệm',
      '/lien-he': 'Liên hệ & yêu cầu báo giá | Điện 24H Đồng Nai',
    }
    const descriptions: Record<string, string> = {
      '/': 'Điện 24H cung cấp giải pháp điện công nghiệp và dân dụng, sửa chữa điện 24/7, trạm biến áp, thiết bị điện, Solar, chống sét và máy phát điện tại Đồng Nai.',
      '/dich-vu/sua-chua-dien-24h': 'Xử lý chập cháy, mất pha, cân pha, đảo pha và sự cố điện nhà xưởng, dân dụng tại Đồng Nai.',
      '/dich-vu/tram-bien-ap': 'Tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp.',
      '/dich-vu/dien-cong-nghiep': 'Cung cấp tận nơi và lắp đặt thiết bị chiếu sáng, đóng cắt và tủ điện điều khiển.',
      '/dich-vu/solar': 'Tư vấn và thi công điện mặt trời hòa lưới, bám tải hoặc có lưu trữ cho doanh nghiệp.',
      '/dich-vu/may-phat-dien': 'Cho thuê máy phát điện công nghiệp ngắn hoặc dài hạn, cung cấp máy mới, máy đã qua sử dụng và bảo trì định kỳ.',
      '/dich-vu/chong-set': 'Thi công chống sét trực tiếp, chống sét lan truyền, tiếp địa và đo điện trở đất.',
      '/san-pham': 'Máy biến áp, dây cáp điện, thiết bị đóng cắt, tủ điện, Solar và thiết bị chống sét cho nhu cầu công trình.',
      '/san-pham/may-bien-ap': 'Máy biến áp 22 kV của Thibidi, Shilin EMC và MBT; liên hệ Điện 24H để nhận tư vấn và báo giá.',
      '/kien-thuc': 'Thư viện kiến thức điện công nghiệp dành cho người phụ trách kỹ thuật, mua hàng và vận hành nhà máy.',
      '/kien-thuc/chi-phi-lap-tram-bien-ap': 'Tổng hợp các nhóm chi phí thiết bị, vật tư, xây dựng, nhân công và thí nghiệm khi lắp trạm biến áp.',
      '/gioi-thieu': 'Điện 24H Đồng Nai giới thiệu hơn 10 năm kinh nghiệm cùng sáu nhóm dịch vụ điện công nghiệp và dân dụng.',
      '/lien-he': 'Hotline 0888.979.111, email contact@dien24h.vn và địa chỉ Điện 24H tại Trảng Dài, Biên Hòa, Đồng Nai.',
    }
    const pageTitle = titles[path] || 'Điện 24H Đồng Nai'
    const pageDescription = descriptions[path] || 'Website Điện 24H Đồng Nai.'
    document.title = pageTitle
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', pageDescription)

    const setMetaContent = (selector: string, key: 'name' | 'property', keyValue: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(key, keyValue)
        document.head.appendChild(element)
      }
      element.content = content
    }
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', pageTitle)
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', pageDescription)
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle)
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://dien24h.vn${path === '/' ? '' : path}`
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonical.href)

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.name = 'robots'
      document.head.appendChild(robots)
    }
    const publicPaths = new Set(Object.keys(titles))
    robots.content = publicPaths.has(path) ? 'index,follow' : 'noindex,follow'
  }, [path])

  const renderPage = () => {
    if (path === '/') return <HomePage navigate={navigate} />
    if (path === '/dich-vu/sua-chua-dien-24h') return <ServicePage navigate={navigate} variant="repair" />
    if (path === '/dich-vu/tram-bien-ap') return <ServicePage navigate={navigate} variant="transformer" />
    if (path === '/dich-vu/dien-cong-nghiep') return <ServicePage navigate={navigate} variant="industrial" />
    if (path === '/dich-vu/solar') return <ServicePage navigate={navigate} variant="solar" />
    if (path === '/dich-vu/may-phat-dien') return <ServicePage navigate={navigate} variant="generator" />
    if (path === '/dich-vu/chong-set') return <ServicePage navigate={navigate} variant="lightning" />
    if (path === '/san-pham') return <ProductsPage navigate={navigate} />
    if (path === '/san-pham/may-bien-ap') return <ProductDetailPage navigate={navigate} />
    if (path === '/kien-thuc') return <ArticlePage navigate={navigate} index />
    if (path === '/kien-thuc/chi-phi-lap-tram-bien-ap') return <ArticlePage navigate={navigate} />
    if (path === '/gioi-thieu') return <AboutPage navigate={navigate} />
    if (path === '/lien-he') return <ContactPage navigate={navigate} />
    return <NotFoundPage navigate={navigate} />
  }

  return (
    <main>
      <SiteHeader path={path} navigate={navigate} />
      {renderPage()}
      <SiteFooter navigate={navigate} />
      <FloatingContact />
      <BackToTop />
    </main>
  )
}

export default App
