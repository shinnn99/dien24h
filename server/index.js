export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    let response = await env.ASSETS.fetch(request)
    if (response.status === 404 && !url.pathname.includes('.')) {
      const routes = new Set([
        '/', '/dich-vu/sua-chua-dien-24h', '/dich-vu/tram-bien-ap',
        '/dich-vu/dien-cong-nghiep', '/dich-vu/bao-tri-thi-nghiem-dien',
        '/dich-vu/solar', '/dich-vu/chong-set', '/dich-vu/may-phat-dien',
        '/san-pham', '/san-pham/may-bien-ap-dau-1000kva',
        '/du-an', '/du-an/tram-bien-ap-1000kva-bien-hoa',
        '/kien-thuc', '/kien-thuc/chi-phi-lap-tram-bien-ap',
        '/gioi-thieu', '/ho-so-nang-luc', '/lien-he', '/yeu-cau-bao-gia',
      ])
      const path = url.pathname.replace(/\/$/, '') || '/'
      if (!routes.has(path)) return new Response('Không tìm thấy trang', { status: 404 })
      response = await env.ASSETS.fetch(new Request(new URL('/index.html', url), request))
    }
    return response
  },
}
